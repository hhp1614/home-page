<template>
  <div class="home-search" :class="searchClass">
    <input v-model="searchContext"
           type="text"
           placeholder="Search"
           @input="searchInput"
           @focus="searchFocus"
           @blur="searchBlur"
    >
  </div>
</template>

<script>
let timer = null;

export default {
  data() {
    return {
      searchClass: '',
      searchContext: ''
    };
  },
  methods: {
    searchInput() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log(this.searchContext);
      }, 200);
    },
    searchFocus() {
      this.$emit('toggleGlass', true);
    },
    searchBlur() {
      this.searchContext = '';
      this.$emit('toggleGlass', false);
    }
  }
};
</script>
