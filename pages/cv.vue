<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const { path } = useRoute()
const query: QueryBuilderParams = { path: path, find: 'one' }

</script>

<template>
    <main>
        <article class="prose mx-auto">
            <ContentDoc :query=query v-slot="{ doc }">
                <!-- Default list slot -->
                <h2 >教育经历</h2>
                <ul>
                    <li v-for="edu in doc.education" v-bind:key="edu.id">
                        <span>{{ edu.start_date }} - {{ edu.end_date }}, </span>
                        <span>{{ edu.school }}, </span>
                        <span>{{ edu.department }}, </span>
                        <span>{{ edu.degree }}, </span>
                        <span>{{ edu.score_type }}: </span>
                        <span>{{ edu.score }}</span>
                        <span v-if="edu.ranking">, 排名: {{ edu.ranking }}</span>
                        <span v-if="edu.advisor">, advised by {{ edu.advisor }}</span>
                    </li>
                </ul>
                <h2 >工作经历</h2>
                <ul>
                    <li v-for="job in doc.jobs" v-bind:key="job.id">
                        <span>{{ job.start_date }} - {{ job.end_date }}, </span>
                        <span>{{ job.name }}, </span>
                        <span>{{ job.role }} </span>
                        <p>{{ job.description }}</p>
                        <ul>
                            <li v-for="achievement in job.achievements" v-bind:key="achievement.id">
                                <span>{{ achievement }}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
                <h2 >技能树</h2>
                <h4 >编程类</h4>
                <table>
                    <tr v-for="skill in doc.coding" v-bind:key="skill.id">
                        <td align-top align="right">{{ skill.name }} </td>
                        <td align-top>{{ skill.description }}</td>
                    </tr>
                </table>
            </ContentDoc>
        </article>
    </main>
</template>
