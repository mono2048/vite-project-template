<template>
  <div>
    <button @click="login" v-if="!state.isLogin">{{ state.text }}</button>
    <p>{{ user.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { testRequest } from '@/api/test';

const { data, loading, run } = testRequest();
const user = {
  name: computed(() => data.value?.data.name)
};

const state = reactive({
  isLogin: computed(() => !loading.value && user.name.value),
  text: '未登录'
});

const login = async () => {
  state.text = '登录中';
  run();
};
</script>

<style scoped></style>
