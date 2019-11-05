<template>
  <div class="list">
    <div class="item"
         v-for="(item, index) in noteList"
         :key="index"
         @click="changeContentIndex(index)"
    >
      <div class="title">{{item.title | filterTitle}}</div>
      <div class="time">{{item.time}}</div>
      <div class="action">
        <button class="pin"><i class="iconfont icon-pin"></i></button>
        <button class="del" @click="del(index)"><i class="iconfont icon-del"></i></button>
      </div>
    </div>
    <div v-show="noteList.length" class="item" @click="add">
      <div class="add"><i class="iconfont icon-add"></i></div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import { db } from '../../utils/db';

export default {
  filters: {
    filterTitle(val) {
      return val.split('\n')[0];
    }
  },
  computed: {
    ...mapState(['noteList'])
  },
  methods: {
    ...mapActions(['UpdateNoteList', 'UpdateNoteContent', 'UpdateNoteContentIndex']),
    // 添加便签
    add() {
      this.UpdateNoteContent('');
      this.UpdateNoteContentIndex('');
      // this.$refs.content.focus();
    },
    // 选择便签
    changeContentIndex(index) {
      this.UpdateNoteContent(this.noteList[index].title);
      this.UpdateNoteContentIndex(index);
    },
    // 删除便签
    del(index) {
      const list = this.noteList;
      list.splice(index, 1);
      this.UpdateNoteList(list);
    },
    // 更新本地存储的便签
    updateDB() {
      db.ls.set('note_list', this.noteList);
    },
  }
};
</script>

