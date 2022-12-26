<!-- ./components/content/InfoBox.vue -->

<script setup lang="ts">
// import icons from HeroIcons

// define props in <script>
const props = defineProps({ type: { type: String, required: true } })
</script>

<template>
  <!-- Access `type` prop in Dynamic class  -->
  <div
    class="info-box not-prose"
    :class="[type]"
  >
    <!-- Conditionally render icons based on prop -->
    <div
      v-if="type == 'warning'"
      i-carbon-warning
      class="icon solid"
    />
    <div
      v-else-if="type == 'error'"
      i-carbon-error
      class="icon solid"
    />
    <div
      v-else
      i-carbon-information
      class="icon solid"
    />

    <details>
      <summary>
        <!-- Unamed Slot to render component content -->
        <slot />
      </summary>
      <div class="details pt-2">
        <!-- Named markdown component to render rich-text -->
        <Markdown
          :use="$slots.details"
          unwrap="p"
        />
      </div>
    </details>
  </div>
</template>

<style scoped>
.info-box {
  @apply flex items-start gap-2 p-4 bg-slate-100 border border-slate-200 text-slate-500 rounded-lg;
}

details summary {
  @apply flex font-semibold leading-tight cursor-pointer;
}

details .details {
  @apply text-sm;
}

.info-box .icon {
  @apply shrink-0;
}

.info-box.warning {
  @apply bg-yellow-200 border-yellow-400 text-yellow-600;
}

.info-box.warning .icon.solid {
  @apply fill-yellow-600;
}

.info-box.error {
  @apply bg-red-200 border-red-400 text-red-600;
}

.info-box.error .icon.solid {
  @apply fill-red-600;
}
</style>
