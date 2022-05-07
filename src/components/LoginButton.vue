<template>
  <div>
    <button @click="login" v-if="!state.isLogin">{{ state.text }}</button>
    <p>{{ user.name }}</p>
    <p>{{ data2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { testRequest } from '@/api/test';
import { test2Request } from '@/api/test2';

const { data, loading, run } = testRequest();
const { data: data2 } = test2Request();
const user = {
  name: computed(() => data.value?.data.name || undefined)
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
