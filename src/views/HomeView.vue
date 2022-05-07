<template>
  <div>
    <h2>《{{ poem.title }}》</h2>
    <h5>{{ poem.dynasty }} · {{ poem.author }}</h5>
    <p v-for="(row, idx) in poem.content" :key="idx">
      {{ row }}
    </p>

    <TSXDemo />
    <LoginButton />
  </div>
</template>

<script setup lang="ts">
import { readonly } from 'vue';

const poem = readonly({
  title: '登高',
  author: '杜甫',
  dynasty: '唐',
  content: [
    '风急天高猿啸哀，渚清沙白鸟飞回。',
    '无边落木萧萧下，不尽长江滚滚来。',
    '万里悲秋常作客，百年多病独登台。',
    '艰难苦恨繁霜鬓，潦倒新停浊酒杯。'
  ]
});
</script>

<style scoped></style>
