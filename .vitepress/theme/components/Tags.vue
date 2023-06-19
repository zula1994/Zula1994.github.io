<template>
    <div class="tags">
        <span
            @click="toggleTag(key as unknown as string)"
            v-for="(item, key) in data"
            class="tag"
            :class="(key as unknown as string) === selectTag ? 'active' : ''"
            ><span>#</span> <span> {{ key }}</span> <strong>{{ data[key].length }}</strong>
        </span>
    </div>
    <div class="tag-header">{{ selectTag }}</div>
    <a :href="withBase(article.regularPath)" v-for="(article, index) in data[selectTag]" :key="index" class="posts">
        <div class="post-container">
            <div class="post-dot"></div>
            {{ article.frontMatter.title }}
        </div>
        <div class="date">{{ article.frontMatter.date }}</div>
    </a>
</template>
<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initTags } from '../functions'
let url = location.href.split('?')[1]
let params = new URLSearchParams(url)
const { theme } = useData()
const data: any = computed(() => initTags(theme.value.posts))

let selectTag = ref(params.get('tag') ? params.get('tag') : Object.keys(unref(data))[0])
const toggleTag = (tag: string) => {
    selectTag.value = tag
}
</script>

<style scoped>
.tags {
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
}
.tag {
    display: inline-block;
    padding: 4px 16px;
    margin: 6px 8px;
    font-size: 0.875rem;
    background-color: transparent;
    color: var(--vp-c-text-1);
    cursor: pointer;
    gap: 0.4rem;
    position: relative;
}

.tag::after {
    transition: all 0.4s;
    content: '';
    position: absolute;
    bottom: 0;

    height: 1px;
    left: 100%;
    right: 100%;
    width: 0;
    background-color: var(--vp-c-brand);
}
.tag.active::after {
    left: 16px;
    right: 16px;
    width: inherit;
}
.tag strong {
    color: var(--vp-c-brand);
}
.tag-header {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1rem 0;
    text-align: left;
}

@media screen and (max-width: 768px) {
    .tag-header {
        font-size: 1.5rem;
    }
    .date {
        font-size: 0.75rem;
    }
}
</style>
