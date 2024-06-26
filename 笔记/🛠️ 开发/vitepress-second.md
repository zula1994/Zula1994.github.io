---
cdate: 2023-06-02
tags:
  - blog
cssclasses:
  - max
---

# 使用 VitePress 和 Github 搭建个人博客网站，使用 github action 进行自动构建和发布

### 1. 创建 github 仓库，仓库名为`用户名.github.io`

### 2. 将 vitepress build 后生成的 dist 上传至创建的仓库

### 3. 添加 github workflows 脚本

::: danger workflows
当 push 代码到指定仓库时，会触发构建和发布流程，更新博客网站
:::

```yml
## .github/workflows/deploy.yml
name: Deploy

on:
    # Runs on pushes targeting the default branch
    push:
        branches: ['master']

    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:

jobs:
    deploy:
        runs-on: ubuntu-latest
        permissions:
            pages: write
            id-token: write
        environment:
            name: github-pages
            url: ${{ steps.deployment.outputs.page_url }}
        steps:
            - uses: actions/checkout@v3
              with:
                  fetch-depth: 0
            - uses: pnpm/action-setup@v2
              with:
                  version: 7
            - uses: actions/setup-node@v3
              with:
                  node-version: 16
                  cache: pnpm
            - run: pnpm install --no-frozen-lockfile
            - name: Build
              run: pnpm run build
            - uses: actions/configure-pages@v2
            - uses: actions/upload-pages-artifact@v1
              with:
                  path: .vitepress/dist
            - name: Deploy
              id: deployment
              uses: actions/deploy-pages@v1
```

### 4. 修改 GitHub 配置，位置依旧在 Settings -> Pages -> Build and deployment -> Source。将之前设置的 Deploy from a branch，修改为 GitHub Actions。

![](http://oss.zhuluu.cn/20230615221507.png)
