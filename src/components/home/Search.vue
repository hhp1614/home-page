<template>
  <div class="home-search">
    <input type="text" placeholder="Search" @focus="toggleGlass">
    <button>🔍</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleGlass() {
      this.$emit('toggleGlass');
    }
  }
};
</script>
