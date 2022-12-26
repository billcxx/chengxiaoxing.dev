<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const { path } = useRoute()
const query: QueryBuilderParams = { path, find: 'one' }

</script>

<template>
  <main>
    <article class="prose mx-auto">
      <span>* Xiaoxing Cheng, Xiao-Xing Cheng, XX Cheng are all me.</span>
      <ContentDoc
        v-slot="{ doc }"
        :query="query"
      >
        <h3>Dissertation</h3>
        <ul>
          <ol
            v-for="(dissertation, index) in doc.dissertation"
            :key="dissertation.id"
          >
            <span class="w-8 inline-block">{{ index + 1 }}.</span>
            <span>{{ dissertation.author }}</span>.
            <span italic>{{ dissertation.title }}</span>.
            <span>{{ dissertation.school }}</span>,
            <span>{{ dissertation.year }}</span>
          </ol>
        </ul>
        <h3>Journal Articles</h3>
        <ul>
          <ol
            v-for="(journal, index) in doc.journals"
            :key="journal.id"
          >
            <span class="w-8 inline-block">{{ index + 1 }}.</span>
            <span>{{ journal.authors }}</span>,&nbsp;
            <span>"{{ journal.title }}</span>",&nbsp;
            <span
              inline-block
              italic
              font-semibold
            >{{ journal.journal }}</span>&nbsp;
            <span>({{ journal.year }})</span>.
          </ol>
        </ul>
        <h3>Books</h3>
        <ul>
          <ol
            v-for="(book, index) in doc.books"
            :key="book.id"
          >
            <span class="w-8 inline-block">{{ index + 1 }}.</span>
            <span>{{ book.title }}</span>,&nbsp;
            <span>({{ book.year }})</span>,&nbsp;
            <span>{{ book.authors }}</span>
          </ol>
        </ul>
      </ContentDoc>
    </article>
  </main>
</template>

<style scoped>
/* h1 {
    font-size: x-large;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
} */
</style>
