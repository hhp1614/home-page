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
import { debounce } from '../../utils/helper';

export default {
  data() {
    return {
      searchClass: '',
      searchContext: ''
    };
  },
  methods: {
    searchInput() {
      debounce(() => console.log(this.searchContext));
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
