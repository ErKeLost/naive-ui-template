<template>
  <drawer />
  <div>
    <n-layout class="main-content">
      <n-layout-header
        v-if="settingStore.headerSetting.showHeader"
        ref="header"
        :style="{
          height: `${getHeaderSetting.height}px`,
          marginLeft: settingStore.menuSetting.fixed ? `${getSideSetting.width}px` : ''
        }"
        :class="[
          settingStore.headerSetting.fixed ? ['header-fixed'] : ''
          // settingStore.menuSetting.fixed ? ['menu-margin'] : ''
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
          :width="`${getSideSetting.width}`"
        >
          <div style="width: 100%; height: 500px; background-color: #bfa" />
        </n-layout-sider>
        <n-layout
          :style="{
            marginLeft:
              settingStore.menuSetting.fixed && settingStore.sideSetting.showSide
                ? `${getSideSetting.width}px`
                : ''
          }"
          class="[settingStore.sideSetting.showSide ? 'full-container' : '']"
        >
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
            <div text-center>
              <div i-carbon-campsite text-6xl inline-block />
              <p>
                <em text-sm op75>Opinionated Vite Starter Template</em>
              </p>
              <div py-4 />
            </div>
            <div style="background: #eab">
              <n-space>
                <n-button dashed> Default </n-button>
                <n-button type="primary" dashed> Primary </n-button>
                <n-button type="info" dashed> Info </n-button>
                <n-button type="success" dashed> Success </n-button>
                <n-button type="warning" dashed> Warning </n-button>
                <n-button type="error" dashed> Error </n-button>
              </n-space>
              <n-space>
                <n-button>Default</n-button>
                <n-button type="tertiary"> Tertiary </n-button>
                <n-button type="primary"> Primary </n-button>
                <n-button type="info"> Info </n-button>
                <n-button type="success"> Success </n-button>
                <n-button type="warning"> Warning </n-button>
                <n-button type="error"> Error </n-button>
              </n-space>
              im title
              <div style="height: 1500px"></div>
              im bottom
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
  [() => getHeaderSetting.value.fixed, () => getHeaderSetting.value.isScrollFixed],
  (newVal) => {
    console.log(newVal)
    if (!newVal[0] && newVal[1]) {
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
  z-index: 2003;
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
.main-content {
  transition: display 0.3s ease-in-out;
}
</style>
