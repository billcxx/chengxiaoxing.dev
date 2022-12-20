<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const { path } = useRoute()
const query: QueryBuilderParams = { path: path, find: 'one' }

</script>

<template>
    <main>
        <ContentDoc :query=query v-slot="{ doc }">
            <!-- Default list slot -->
            <h1 text-3xl>教育经历</h1>
            <ul>
                <li v-for="edu in doc.education" v-bind:key="edu.id">
                    <p>{{ edu.school }}</p>
                    <p>{{ edu.start_date }} - {{ edu.end_date }}</p>
                </li>
            </ul>
        </ContentDoc>

    </main>
</template>
