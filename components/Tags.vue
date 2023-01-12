<!-- ./components/Tags.vue -->

<script setup lang="ts">
// tag list state
const expanded = ref(false)

// helper function to flatten tags array
const flatten = (tags, key) => {
  console.log(tags)

  const _tags = tags
    .map((tag) => {
      let _tag = tag
      if (tag[key]) {
        const flattened = flatten(tag[key])
        _tag = flattened
      }
      return _tag
    })
    .flat(1)

  console.log({ _tags })

  return _tags
}

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value
}

// get only tags data from `/blog`
const { data } = await useAsyncData('tags', () => queryContent('projects').only(['tags']).find())

// generate array without duplicates from flattened array
const articleTags = [...new Set(flatten(data.value, 'tags'))]

console.log({ articleTags })
</script>

<template>
  <div
    class="tag-list"
    :class="{ active: expanded }"
  >
    <!-- Button to toggle expand -->
    <!-- <button @click="toggleExpand" class="cta w-icon">
      <div i-carbon-tag/>
      <span>Tags</span>
    </button> -->
    <div i-carbon-tag />
    <span>Tags</span>
    <!-- <ul class="article-tags" :class="{ expanded: expanded }"> -->
    <ul class="article-tags expanded">
      <!-- list out tags with links -->
      <li
        v-for="(tag, n) in articleTags"
        :key="n"
        class="tag"
      >
        <NuxtLink
          :to="`/blogs/tags/${tag}`"
          class="font-semibold"
        >
          {{ tag }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* ... */
.tag-list {
  @apply flex items-center gap-2 p-2 border border-transparent  rounded-lg;
}
.tag-list.active {
  @apply border-slate-200;
}
.article-tags {
  @apply transition-all max-w-0 overflow-hidden;
}
.article-tags.expanded {
  @apply max-w-full;
}
</style>
