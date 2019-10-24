<template>
  <div ref="home" class="home" :style="{backgroundImage: `url(${bg})`}">
    <div class="home-cover"
         :class="{active: glass}"
         :style="{backgroundImage: glass ? `url(${bg})` : ''}"
    ></div>
    <div class="container">
      <Time @click.native="toggleMenu"/>
      <Search @toggleGlass="toggleGlass"/>
    </div>
  </div>
</template>

<script>
import Time from '../components/home/Time';
import Search from '../components/home/Search';

import bgDefault from '../assets/bg_default.jpg';

export default {
  data() {
    return {
      bg: bgDefault,
      glass: false
    };
  },
  components: { Time, Search },
  methods: {
    toggleMenu() {
      console.log('toggleMenu');
    },
    toggleGlass() {
      this.glass = !this.glass;
    }
  }
};
</script>
