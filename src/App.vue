<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const info = () => {
  $message.warning('This is a warning message')
}
const dialog = () => {
  $dialog.warning({
    title: '123123132',
    content: '你确定？',
    positiveText: '确定',
    negativeText: '不确定',
    onPositiveClick: () => {
      $message.success('确定')
    },
    onNegativeClick: () => {
      $message.error('不确定')
    }
  })
}
</script>

<template>
  <Application>
    <template #adny>
      <n-space>
        <n-button @click="info">Default</n-button>
        <n-button @click="dialog" type="tertiary"> Tertiary </n-button>
        <n-button type="primary"> Primary </n-button>
        <n-button type="info"> Info </n-button>
        <n-button type="success"> Success </n-button>
        <n-button type="warning"> Warning </n-button>
        <n-button type="error"> Error </n-button>
      </n-space>
    </template>
  </Application>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
