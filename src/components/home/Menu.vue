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
      <!--便笺-->
      <div class="note">
        <!--输入-->
        <div class="content">
          <textarea
                  ref="noteContent"
                  placeholder="在此输入以创建新的便笺"
                  v-model="noteContent"
                  @input="contentChange"
          ></textarea>
        </div>
        <!--便笺列表-->
        <NoteList/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { debounce } from '../../utils/helper';
import NoteList from './NoteList';

export default {
  filters: {
    filterTitle(val) {
      return val.split('\n')[0];
    }
  },
  components: { NoteList },
  computed: {
    ...mapState(['noteList', 'noteContentIndex']),
    noteContent: {
      get() {
        return this.$store.state.noteContent;
      },
      set(value) {
        this.UpdateNoteContent(value);
      }
    }
  },
  methods: {
    ...mapActions(['UpdateNoteList', 'UpdateNoteContent', 'UpdateNoteContentIndex']),
    // 输入便签内容
    contentChange() {
      debounce(() => {
        const list = this.noteList;
        const index = this.noteContentIndex;
        if (index !== '') {
          list[index].title = this.noteContent;
          this.UpdateNoteList(list);
        } else {
          list.push({
            title: this.noteContent,
            time: this.getTime(),
            pin: false
          });
          this.UpdateNoteList(list).then(() => {
            this.UpdateNoteContentIndex(this.noteList.length - 1);
          });
        }
      });
    },
    // 获取时间
    getTime() {
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const date = d.getDate();
      const hour = d.getHours();
      const minute = d.getMinutes();
      return `${year}年${month}月${date}日 ${hour}:${minute}`;
    },
    // 关闭菜单
    closeMenu() {
      this.$emit('closeMenu');
    }
  }
};
</script>
