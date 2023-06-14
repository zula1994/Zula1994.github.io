<template>
    <div v-for="(article, index) in posts" :key="index" class="post-list">
        <div class="post-header">
            <div class="post-title">
                <a :href="withBase(article.regularPath)"> {{ article.frontMatter.title }}</a>
            </div>
        </div>
        <div class="post-tags">
            <span v-for="item in article.frontMatter.tags"
                ><a :href="withBase(`/pages/tags.html?tag=${item}`)"> {{ item }}</a></span
            >
        </div>
        <p class="describe" v-html="article.frontMatter.description"></p>
        <div class="post-info">
            {{ article.frontMatter.date }}
        </div>
    </div>

    <div class="pagination" v-if="pagesNum && pagesNum > 1">
        <a
            class="link"
            :class="{ active: pageCurrent === i }"
            v-for="i in pagesNum"
            :key="i"
            :href="withBase(i === 1 ? '/index.html' : `/page_${i}.html`)"
            >{{ i }}</a
        >
    </div>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress'
const props = defineProps({
    posts: Array<any>,
    pageCurrent: Number,
    pagesNum: Number
})
</script>

<style scoped>
.post-list {
    border-bottom: 1px dashed var(--vp-c-divider-light);
    padding: 14px 0 14px 0;
}
.post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post-title {
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0.1rem 0;
}
.post-info {
    font-size: 12px;
}
.post-tags {
    margin: 0.5rem 0;
}
.post-tags span {
    display: inline-block;
    padding: 0 8px;
    background-color: var(--vp-c-bg-alt);
    margin-right: 10px;
    transition: 0.4s;
    border-radius: 2px;
    color: var(--vp-c-text-1);
    font-size: 14px;
}
.describe {
    font-size: 0.9375rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: var(--vp-c-text-2);
    margin: 0.5rem 0;
    line-height: 1.5rem;
}
.pagination {
    gap: 4px;
    margin-top: 16px;
    display: flex;
    justify-content: center;
}
.link {
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: 400;
    box-sizing: border-box;
}
.link:hover {
    background-color: var(--vp-c-gutter);
}
.link.active {
    color: var(--vp-c-brand);
    border: 1px solid var(--vp-c-brand) !important;
}

@media screen and (max-width: 768px) {
    .post-list {
        padding: 14px 0 14px 0;
    }
    .post-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .post-title {
        font-size: 1.0625rem;
        font-weight: 400;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        width: 17rem;
    }
    .describe {
        font-size: 0.9375rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        margin: 0.5rem 0 1rem;
    }
}
</style>
