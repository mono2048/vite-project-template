<template>
  <div>
    <button @click="login" v-if="!state.isLogin">{{ state.text }}</button>
    <p>{{ user.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { testRequest } from '@/api/test';

const { data, run } = testRequest();
const user = {
  name: computed(() => data.value?.data.name || '')
};

const state = reactive({
  isLogin: false,
  text: '未登录'
});

const login = async () => {
  state.text = '登录中';
  await run().then((res) => {
    console.log(res);
  });
  state.isLogin = true;
};
</script>

<style scoped></style>
