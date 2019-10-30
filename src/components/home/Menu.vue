<template>
  <div class="home-menu">
    <div class="cover" @click="closeMenu"></div>
    <div class="main">
      <div class="config">
        <!--用户-->
        <button class="iconfont icon-user"></button>
        <!--设置-->
        <button class="iconfont icon-setting"></button>
      </div>
      <div class="note">
        <div class="content">
          <textarea placeholder="在此键入以创建新的便笺"></textarea>
        </div>
        <div class="list">
          <div class="item">
            <div class="title">123123</div>
            <div class="time">2019-10-30</div>
            <div class="action">
              <button class="del"></button>
              <button class="pin"></button>
            </div>
          </div>
          <div class="item">
            <div class="title">123123</div>
            <div class="time">2019-10-30</div>
          </div>
        </div>
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
