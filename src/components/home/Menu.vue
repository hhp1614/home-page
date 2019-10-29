<template>
  <div class="home-menu">
    <div class="home-menu-cover" @click="closeMenu"></div>
    <div class="home-menu-main">
      <div class="home-menu-main-config">
        <!--用户-->
        <button class="iconfont icon-user"></button>
        <!--设置-->
        <button class="iconfont icon-setting"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$emit('closeMenu');
    }
  }
};
</script>
