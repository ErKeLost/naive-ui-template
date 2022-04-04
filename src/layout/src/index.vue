<template>
  <drawer />
  <div>
    <n-layout class="main-content">
      <n-layout-header
        v-if="settingStore.headerSetting.showHeader"
        ref="header"
        :height="`${getHeaderSetting.height}px`"
        :style="{ marginLeft: settingStore.menuSetting.fixed ? `${getSideSetting.width}px` : '' }"
        :class="[
          settingStore.headerSetting.fixed ? ['header-fixed'] : '',
          settingStore.menuSetting.fixed ? ['menu-margin'] : ''
        ]"
      >
        <div style="color: red">Headesr</div>
      </n-layout-header>
      <n-layout
        has-sider
        :class="settingStore.headerSetting.fixed ? ['page-content'] : ''"
        :style="[
          settingStore.headerSetting.fixed && settingStore.headerSetting.showHeader
            ? { marginTop: `${getHeaderSetting.height}px` }
            : ''
        ]"
      >
        <n-layout-sider
          v-if="settingStore.sideSetting.showSide"
          :class="[
            'side-setting-class',
            settingStore.menuSetting.fixed ? 'aside-fixed' : '',
            settingStore.menuSetting.headerFixed ? 'aside-headerFixed' : ''
          ]"
          :style="[
            settingStore.menuSetting.headerFixed ? { top: `${getHeaderSetting.height}px` } : ''
          ]"
          :width="`${getSideSetting.width}px`"
        >
          <div style="width: 100%; height: 500px; background-color: #bfa" />
        </n-layout-sider>
        <n-layout class="[settingStore.sideSetting.showSide ? 'full-container' : '']">
          <n-layout-content
            :class="[
              settingStore.menuSetting.fixed ? ['menu-margin'] : '',
              settingStore.menuSetting.headerFixed ? ['menu-margin'] : ''
            ]"
            :style="{
              marginLeft:
                settingStore.menuSetting.headerFixed && settingStore.sideSetting.showSide
                  ? `${getSideSetting.width}px`
                  : '',
              marginBottom:
                settingStore.footerSetting.fixed && settingStore.footerSetting.showFooter
                  ? `${getFooterSetting.height}px`
                  : ''
            }"
          >
            <div style="background: #eab">
              <i-ep-add-location />
              <i-ep-aim />
              <i-ep-picture-rounded color="red" font-size="30px" />
              <div style="height: 1500px"></div>
              <div style="height: 1500px"></div>
              4153456456465
            </div>
          </n-layout-content>
          <NLayoutFooter
            v-if="settingStore.footerSetting.showFooter"
            :class="[
              settingStore.footerSetting.fixed ? 'page-footer' : '',
              settingStore.menuSetting.fixed || settingStore.menuSetting.headerFixed
                ? ['menu-margin']
                : ''
            ]"
            :style="{
              height: `${getFooterSetting.height}px`,
              marginLeft:
                settingStore.menuSetting.fixed && settingStore.sideSetting.showSide
                  ? `${getSideSetting.width}px`
                  : '',
              marginLeft:
                settingStore.menuSetting.headerFixed && settingStore.sideSetting.showSide
                  ? `${getSideSetting.width}px`
                  : ''
            }"
          >
            <Footer />
          </NLayoutFooter>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>
<script lang="ts" setup>
import { useProjectSettingStore } from '~/store/modules/projectSetting'
import { useProjectSetting } from '~/composables/setting/useProjectSetting'
const settingStore = useProjectSettingStore()
const { getHeaderSetting, getFooterSetting, getSideSetting } = useProjectSetting()
watch(
  () => getSideSetting.value,
  (newVal) => {
    console.log(newVal)
  }
)
const header = ref(null)
watch(
  () => getHeaderSetting.value.fixed,
  (newVal) => {
    if (!newVal) {
      window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= getHeaderSetting.value.scroll) {
          settingStore.headerSetting.fixed = true
        } else {
          settingStore.headerSetting.fixed = false
        }
      })
    }
  }
)
</script>
<style scoped lang="scss">
.full-container {
  width: 100vw;
}
.side-setting-class {
  position: relative;
  z-index: 2001;
}
.aside-fixed {
  position: fixed;
  top: 0px;
  left: 0;
  height: 100%;
}
.aside-headerFixed {
  position: fixed;
  left: 0;
  height: 100%;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fba;
  z-index: 2001;
}
.page-footer {
  position: fixed;
  bottom: 0;
  background-color: #abf;
  width: 100%;
  z-index: 2001;
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
  position: relative;
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
  padding: 0;
}
</style>
