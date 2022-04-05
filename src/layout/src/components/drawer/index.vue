<template>
  <n-button
    type="primary"
    circle
    size="large"
    class="drawer-setting"
    @click="showDefaultSetting = true"
  >
    <n-icon :size="27">
      <setting />
    </n-icon>
  </n-button>
  <n-drawer v-model:show="showDefaultSetting" :z-index="2005" width="20%">
    <div class="default-setting-container">
      <defaultSetting />
    </div>
  </n-drawer>
</template>
<script setup lang="ts">
const showDefaultSetting = ref(false)
</script>
<style lang="scss" scoped>
.default-setting-container {
  margin: 10px 15px;
}
.drawer-setting {
  position: fixed;
  right: 0.5%;
  top: 39%;
  font-size: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 2001;
}
:deep(.el-switch__core) {
  // height: 24px;
  transform: scale(1.3);
}
// :deep(.el-switch__action) {
//   transform: translateY(2px);
//   font-size: 20px;
// }
// :deep(.el-switch__inner) {
//   transform: translateY(2px);
// }
</style>
