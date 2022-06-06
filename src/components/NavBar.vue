<script setup lang="ts">
</script>

<template>
  <nav text-xl mt-6 w-full flex flex-wrap items-center>
    <div container-fluid w-full flex flex-wrap items-center justify-between>
      <button focus:no-underline>
        <div i-carbon-campsite />
        <RouterLink title="Home" to="/" no-underline>
          <span>Home</span>
        </RouterLink>
      </button>
      <div flex-grow>
        <ul navbar-nav flex flex-col list-none mr-auto>
          <li class="inline p-2">
            item1
          </li>
          <li class="inline p-2">
            item2
          </li>
        </ul>
      </div>
      <div flex relative items-center>
        <RouterLink title="Chonical" to="/chronical">
          <!-- <div i-carbon-time /> -->
          <span>Time</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
