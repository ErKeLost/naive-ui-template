<template>
  <div class="setting">
    <span class="setting-title">项目配置</span>
    <n-divider>
      <span class="setting-title-sub">主题化</span>
    </n-divider>
    <div text-center class="dark-switch">
      <n-tooltip size="large" placement="bottom">
        <template #trigger>
          <n-switch v-model:value="show" class="dark-theme-switch">
            <template #checked>
              <n-icon size="14" color="#ffd93b">
                <IcBaselineWbSunny />
              </n-icon>
            </template>
            <template #unchecked>
              <n-icon size="14" color="#ffd93b">
                <CarbonMoon />
              </n-icon>
            </template>
          </n-switch>
        </template>
        <!-- <span>{{ designStore.darkTheme ? '深' : '浅' }}色主题</span> -->
        <span>{{ '浅' }}色主题</span>
      </n-tooltip>
    </div>
    <n-divider>
      <NetFix />
    </n-divider>
    <n-divider>
      <span class="setting-title-sub">系统主题</span>
    </n-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <n-divider>
      <span class="setting-title-sub">导航栏模式</span>
    </n-divider>
    <div class="drawer-setting-item align-items-top">
      <div class="drawer-setting-item-style align-items-top">
        <n-tooltip trigger="hover" placement="top-start">
          <template #trigger>
            <img
              src="../../../../assets/images/nav-theme-dark.svg"
              alt="左侧菜单模式"
              @click="togNavMode('vertical')"
            />
          </template>
          左侧菜单模式
        </n-tooltip>
        <span class="setting-title-sub-er">左侧菜单模式</span>
        <div class="setting-choose">
          <n-badge v-show="settingStore.navMode === 'vertical'" dot />
        </div>
      </div>
      <div class="drawer-setting-item-style align-items-top">
        <n-tooltip placement="top-start">
          <template #trigger>
            <div class="mode mode-single" @click="togNavMode('content')" />
          </template>
          内容模式
        </n-tooltip>
        <span class="setting-title-sub-er">内容模式</span>
        <div class="setting-choose">
          <n-badge v-show="settingStore.navMode === 'content'" dot />
        </div>
      </div>
      <div class="drawer-setting-item-style align-items-top">
        <n-tooltip placement="top-start">
          <template #trigger>
            <div class="mode mode-footer" @click="togNavMode('footer')" />
          </template>
          底部模式
        </n-tooltip>
        <span class="setting-title-sub-er">底部模式</span>
        <div class="setting-choose">
          <n-badge v-show="settingStore.navMode === 'footer'" dot />
        </div>
      </div>
      <div class="drawer-setting-item-style align-items-top">
        <n-tooltip placement="top-start">
          <template #trigger>
            <div class="mode mode-footer-fix" @click="togNavMode('footer-fix')" />
          </template>
          底部混合模式
        </n-tooltip>
        <span class="setting-title-sub-er">底部混合模式</span>
        <div class="setting-choose">
          <n-badge v-show="settingStore.navMode === 'footer-fix'" is-dot />
        </div>
      </div>

      <div class="drawer-setting-item-style align-items-top">
        <n-tooltip placement="top-start">
          <template #trigger>
            <img
              src="../../../../assets/images/nav-horizontal.svg"
              alt="顶部菜单模式"
              @click="togNavMode('horizontal')"
            />
          </template>
          顶部菜单模式
        </n-tooltip>
        <span class="setting-title-sub-er">顶部菜单模式</span>
        <div class="setting-choose">
          <n-badge v-show="settingStore.navMode === 'horizontal'" dot />
        </div>
      </div>

      <div class="drawer-setting-item-style align-items-top">
        <n-tooltip placement="top-start">
          <template #trigger>
            <img
              src="../../../../assets/images/nav-horizontal-mix.svg"
              alt="顶部菜单混合模式"
              @click="togNavMode('horizontal-mix')"
            />
          </template>
          顶部菜单混合模式
        </n-tooltip>
        <span class="setting-title-sub-er">顶部菜单混合模式</span>
        <div class="setting-choose">
          <n-badge v-show="settingStore.navMode === 'horizontal-mix'" dot />
        </div>
      </div>
    </div>

    <n-divider>界面功能</n-divider>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">固定顶栏</div>
      <div class="drawer-setting-switch-action">
        <n-switch v-model:value="settingStore.headerSetting.fixed" />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">固定Footer</div>
      <div class="drawer-setting-switch-action">
        <n-switch v-model:value="settingStore.footerSetting.fixed" />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">固定侧边栏</div>
      <div class="drawer-setting-switch-action">
        <n-switch
          v-model:value="settingStore.menuSetting.fixed"
          :disabled="settingStore.menuSetting.headerFixed"
        />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">是否滚动固定顶栏</div>
      <div class="drawer-setting-switch-action">
        <n-switch v-model:value="settingStore.headerSetting.isScrollFixed" />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">不占据Header的固定侧边栏</div>
      <div class="drawer-setting-switch-action">
        <n-switch
          v-model:value="settingStore.menuSetting.headerFixed"
          :disabled="settingStore.menuSetting.fixed"
        />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">是否展示Aside</div>
      <div class="drawer-setting-switch-action">
        <n-switch v-model:value="settingStore.sideSetting.showSide" />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">是否展示Footer</div>
      <div class="drawer-setting-switch-action">
        <n-switch v-model:value="settingStore.footerSetting.showFooter" />
      </div>
    </div>
    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">是否展示Header</div>
      <div class="drawer-setting-switch-action">
        <n-switch v-model:value="settingStore.headerSetting.showHeader" />
      </div>
    </div>

    <div class="drawer-setting-slider">
      <div class="drawer-setting-switch-title">Header高度</div>
      <div class="slider">
        <n-slider v-model:value="settingStore.headerSetting.height" :min="60" :max="150" />
      </div>
    </div>
    <div class="drawer-setting-slider">
      <div class="drawer-setting-switch-title">Side宽度</div>
      <div class="slider">
        <n-slider v-model:value="settingStore.sideSetting.width" :min="180" :max="250" />
      </div>
    </div>
    <div class="drawer-setting-slider">
      <div class="drawer-setting-switch-title">Footer高度</div>
      <div class="slider">
        <n-slider v-model:value="settingStore.footerSetting.height" :min="60" :max="150" />
      </div>
    </div>

    <div class="drawer-setting-switch">
      <div class="drawer-setting-switch-title">滚动距离大于多少后固定顶栏</div>
      <div class="slider">
        <n-slider v-model:value="settingStore.headerSetting.scroll" :min="0" :max="250" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useProjectSettingStore } from '~/store/modules/projectSetting'
import CarbonMoon from '~/components/icon/CarbonMoon.vue'
import IcBaselineWbSunny from '~/components/icon/IcBaselineWbSunny.vue'
const settingStore = useProjectSettingStore()
const show = ref(false)
function togNavMode(mode: any) {
  settingStore.navMode = mode
  settingStore.menuSetting.mixMenu = false
}
</script>
<style lang="scss" scoped>
.slider {
  width: 60%;
}
.slider-demo-block {
  display: flex;
  align-items: center;
}
.setting {
  display: grid;
  justify-items: center;
  &-choose {
    height: 20px;
  }
}
.setting-title {
  font-size: 18px;
  &-sub {
    font-size: 15px;
    &-er {
      font-size: 13px;
      padding: 10px 0;
    }
  }
}
.drawer-setting-switch {
  font-size: 13px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  &-title {
    width: 70%;
  }
}
.drawer-setting-slider {
  font-size: 13px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
}
.drawer-setting-item {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  &-style {
    display: grid;
    justify-items: center;
  }
}
.mode {
  position: relative;
  width: 50px;
  height: 45px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  background-color: #f3f3f3;
  transition: 0.3s;

  &::before,
  &::after {
    pointer-events: none;
  }
  &-white {
    border: 1px solid #eee;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 100%;
      background-color: #ffffff;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: #ffffff;
    }
  }
  &-black {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 100%;
      background-color: #181818;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: #181818;
    }
  }
  &-footer {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 12px;
      background-color: #303030;
    }
  }
  &-footer-fix {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 12px;
      background-color: #303030;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 12px;
      background-color: #303030;
    }
  }
  &-side {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 100%;
      background-color: #131313;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 15px;
      width: 100%;
      height: 10px;
      background-color: #fff;
    }
  }
  &-head {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: #ffffff;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0;
      width: 15px;
      height: calc(100% - 0px);
      background-color: rgb(22, 22, 22);
    }
  }
  &-single {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 100%;
    }
  }
  i {
    position: absolute;
    right: 2px;
    bottom: 2px;
    display: none;
  }
  &.active i {
    display: block;
    color: #409eff;
  }
}
// :deep(.n-switch.n-switch--active .n-switch__rail) {
//   background-color: #181818;
// }
// :deep(.n-switch .n-switch__rail) {
//   background-color: #181818;
// }
.justify-center {
  justify-content: center;
}

.dark-switch .n-switch {
  :deep(.n-switch__rail) {
    background-color: #000e1c !important;
  }
}
</style>
