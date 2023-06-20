---
outline: [2, 3]
title: Next.js-rewrites使用
description: 通过rewrites函数将请求的地址重定向到目标页面
date: 2023-06-18
tags:
    - Next.js
---

## Next.js routes 顺序

1. `headers` are checked/applied
2. `redirects` are checked/applied
3. `beforeFiles` rewrites are checked/applied
4. static files from the public directory, \_next/static files, and non-dynamic pages are checked/served
5. `afterFiles` rewrites are checked/applied, if one of these rewrites is matched we check dynamic routes/static files after each match
6. `fallback` rewrites are checked/applied, these are applied before rendering the 404 page and after dynamic routes/all static assets have been checked. If you use fallback: true/'blocking' in getStaticPaths, the fallback rewrites defined in your next.config.js will not be run.

```js
// next.config.js
module.exports = {
    async rewrites() {
        return {
            beforeFiles: [
                // These rewrites are checked after headers/redirects
                // and before all files including _next/public files which
                // allows overriding page files
                {
                    source: '/some-page',
                    destination: '/somewhere-else',
                    has: [{ type: 'query', key: 'overrideMe' }]
                }
            ],
            afterFiles: [
                // These rewrites are checked after pages/public files
                // are checked but before dynamic routes
                {
                    source: '/non-existent',
                    destination: '/somewhere-else'
                }
            ],
            fallback: [
                // These rewrites are checked after both pages/public files
                // and dynamic routes are checked
                {
                    source: '/:path*',
                    destination: `https://my-old-site.com/:path*`
                }
            ]
        }
    }
}
```

## 重写时使用参数

```js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/old-about/:path*',
                destination: '/about' // The :path parameter isn't used here so will be automatically passed in the query
            },
            {
                source: '/docs/:path*',
                destination: '/:path*' // The :path parameter is used here so will not be automatically passed in the query
            },
            {
                source: '/:first/:second',
                destination: '/:first?second=:second'
                // Since the :first parameter is used in the destination the :second parameter
                // will not automatically be added in the query although we can manually add it
                // as shown above
            }
        ]
    }
}
```

## 路径匹配-支持正则

```js
module.exports = {
    async rewrites() {
        return [
            {
                // this will match `/english(default)/something` being requested
                source: '/english\\(default\\)/:slug',
                destination: '/en-us/:slug'
            }
        ]
    }
}
```

## 多语言的重写

```js
module.exports = {
    i18n: {
        locales: ['en', 'fr', 'de'],
        defaultLocale: 'en'
    },

    async rewrites() {
        return [
            {
                source: '/with-locale', // automatically handles all locales
                destination: '/another' // automatically passes the locale on
            },
            {
                // does not handle locales automatically since locale: false is set
                source: '/nl/with-locale-manual',
                destination: '/nl/another',
                locale: false
            },
            {
                // this matches '/' since `en` is the defaultLocale
                source: '/en',
                destination: '/en/another',
                locale: false
            },
            {
                // it's possible to match all locales even when locale: false is set
                source: '/:locale/api-alias/:path*',
                destination: '/api/:path*',
                locale: false
            },
            {
                // this gets converted to /(en|fr|de)/(.*) so will not match the top-level
                // `/` or `/fr` routes like /:path* would
                source: '/(.*)',
                destination: '/another'
            }
        ]
    }
}
```
