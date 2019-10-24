<template>
  <div ref="homeTime"
       class="home-time"
       :class="animateClass"
       @mouseenter="animateClass = 'time-in'"
       @mouseleave="animateClass = 'time-out'"
  >
    <div class="left">
      <span class="week">{{week}}</span><br>
      <span class="year">{{year}}</span>
      <span class="month">{{month}}</span>
      <span class="date">{{date}}</span>
    </div>
    <span class="hour">{{hour}}</span>
    <span class="minute">{{minute}}</span>
    <span class="second">{{second}}</span>
  </div>
</template>

<script>
const weeks = '日一二三四五六';
let timer = null;

export default {
  data() {
    return {
      week: '',
      year: '',
      month: '',
      date: '',
      hour: '',
      minute: '',
      second: '',
      animateClass: ''
    };
  },
  created() {
    this.initTime();
  },
  methods: {
    // 初始化时间
    initTime() {
      clearTimeout(timer);
      let d = new Date();
      this.week = `星期${weeks[d.getDay()]}`;
      this.year = `${d.getFullYear()}`.substring(2);
      this.month = `${d.getMonth() + 1}`.padStart(2, '0');
      this.date = `${d.getDate()}`.padStart(2, '0');
      this.hour = `${d.getHours()}`.padStart(2, '0');
      this.minute = `${d.getMinutes()}`.padStart(2, '0');
      this.second = `${d.getSeconds()}`.padStart(2, '0');
      timer = setTimeout(() => this.initTime(), 1000);
    }
  }
};
</script>
