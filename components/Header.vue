<template>
    <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
        <NuxtLink i-carbon-home to="/" />
        <ul
            class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
                <NuxtLink class="text-xl text-gray-400 hover:text-gray-500" to="/blogs">Blogs</NuxtLink>
            </li>
            <li>
                <NuxtLink class="text-xl text-gray-400 hover:text-gray-500" to="/projects">Projects</NuxtLink>
            </li>
            <li>
                <NuxtLink class="text-xl text-gray-400 hover:text-gray-500" to="/publications">Publications</NuxtLink>
            </li>
        </ul>
        <NuxtLink i-carbon-logo-github to="https://github.com/billcxx/chengxiaoxing.me" />
    </nav>
</template>