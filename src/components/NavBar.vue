<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav>
    <RouterLink class="absolute lg:fixed m-6 select-none outline-none" to="/" focusable="false">
      <span v-show="isDark" class="white">Home white</span>
      <span v-show="!isDark" class="black">Home dark</span>
    </RouterLink>
    <div class="spacer" />
    <div class="right">
      <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
.header h1 {
    margin-bottom: 0;
}

.logo {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
}

.nav {
    padding: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: auto max-content;
    box-sizing: border-box;
}

.nav>* {
    margin: auto;
}

.nav img {
    margin-bottom: 0;
}

.nav a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s ease;
    opacity: 0.6;
    outline: none;
}

.nav a:hover {
    opacity: 1;
    text-decoration-color: inherit;
}

.nav .right {
    display: grid;
    grid-gap: 1.2rem;
    grid-auto-flow: column;
}

.nav .right>* {
    margin: auto;
}
</style>
