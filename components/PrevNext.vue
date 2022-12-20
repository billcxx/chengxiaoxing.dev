<!-- ./components/PrevNext.vue -->

<script setup>
// import icons
// define prev and next props
defineProps(["prev", "next"]);
</script>

<template>
  <ul class="prev-next-cont">
    <li class="link-item prev">
      <NuxtLink v-if="prev" :to="prev._path">
        <div i-carbon-arrow-left class="icon stroke" />
        <span> {{ prev.title }} </span>
      </NuxtLink>
    </li>
    <li class="link-item next">
      <NuxtLink v-if="next" :to="next._path">
        <span> {{ next.title }} </span>
        <div i-carbon-arrow-right class="icon stroke" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.prev-next-cont {
  @apply flex gap-4 justify-between p-4 border border-slate-200 rounded-lg;
}

.link-item a {
  @apply flex gap-2;
}
</style>