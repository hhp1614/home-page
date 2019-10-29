<template>
  <div ref="home" class="home">
    <div class="home-cover"
         :class="{active: glass}"
         :style="{backgroundImage: `url(${bg})`}"
    ></div>
    <div class="home-mask"></div>
    <div class="home-container">
      <Time @click.native="toggleMenu"/>
      <Search :class="{show: searchShow}" @toggleGlass="toggleGlass"/>
      <Menu :class="{show: !searchShow}" @closeMenu="toggleMenu"/>
    </div>
  </div>
</template>

<script>
import Time from '../components/home/Time';
import Search from '../components/home/Search';
import Menu from '../components/home/Menu';

import bgDefault from '../assets/bg_default.jpg';

export default {
  data() {
    return {
      bg: bgDefault,
      glass: false,
      searchShow: true
    };
  },
  components: { Time, Search, Menu },
  methods: {
    toggleMenu() {
      this.glass = !this.glass;
      this.searchShow = !this.searchShow;
    },
    toggleGlass(glass) {
      this.glass = glass;
    }
  }
};
</script>
