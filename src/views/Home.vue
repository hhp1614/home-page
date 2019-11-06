<template>
  <div ref="home" class="home">
    <!--毛玻璃特效-->
    <div class="home-cover"
         :class="{active: glass}"
         :style="{backgroundImage: `url(${bg})`}"
    ></div>
    <!--蒙版-->
    <div class="home-mask"></div>
    <!--已固定便笺列表-->
    <NoteList class="note-list-pin" :pinned="true"/>
    <div class="home-container">
      <!--时间-->
      <Time @click.native="toggleMenu"/>
      <!--搜索-->
      <Search :class="{show: searchShow}" @toggleGlass="toggleGlass"/>
      <!--菜单-->
      <Menu :class="{show: !searchShow}" @closeMenu="toggleMenu"/>
    </div>
  </div>
</template>

<script>
import Time from '../components/home/Time';
import Search from '../components/home/Search';
import Menu from '../components/home/Menu';
import NoteList from '../components/home/NoteList';

import bgDefault from '../assets/bg_default.jpg';

export default {
  data() {
    return {
      bg: bgDefault,
      glass: false,
      searchShow: true
    };
  },
  components: { Time, Search, Menu, NoteList },
  methods: {
    // 切换菜单
    toggleMenu() {
      this.glass = !this.glass;
      this.searchShow = !this.searchShow;
    },
    // 切换毛玻璃特效
    toggleGlass(glass) {
      this.glass = glass;
    }
  }
};
</script>
