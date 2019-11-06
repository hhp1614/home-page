<template>
  <div class="list">
    <template v-for="(item, index) in noteList">
      <div class="item"
           v-if="pinNoteList(item)"
           :key="index"
           @click="changeContentIndex(index)"
      >
        <!--标题-->
        <div class="title" @click="showTitle(index)" :title="item.title | filterTitle">
          {{item.title | filterTitle}}
        </div>
        <!--创建时间-->
        <div class="time">{{item.time}}</div>
        <!--取消固定-->
        <div v-if="pinned" class="unpin" @click="pin(index)" title="取消固定">
          <i class="iconfont icon-close"></i>
        </div>
        <!--操作-->
        <div v-if="!pinned" class="action">
          <!--固定-->
          <button class="pin" :class="{active: item.pin}" @click.stop="pin(index)" title="固定">
            <i class="iconfont icon-pin"></i>
          </button>
          <!--删除-->
          <button class="del" @click.stop="del(index)" title="删除">
            <i class="iconfont icon-del"></i>
          </button>
        </div>
      </div>
    </template>
    <!--添加-->
    <div v-if="!pinned" v-show="noteList.length" class="item" @click="add" title="添加">
      <div class="add"><i class="iconfont icon-add"></i></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { db } from '../../utils/db';

export default {
  // 取内容的第一行为标题
  filters: {
    filterTitle(val) {
      return val.split('\n')[0];
    }
  },
  props: {
    // 是否只显示固定的便笺
    pinned: { type: Boolean, default: false }
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
      this.$parent.$refs.noteContent.focus();
    },
    // 选择便签
    changeContentIndex(index) {
      if (!this.pinned) {
        this.UpdateNoteContent(this.noteList[index].title);
        this.UpdateNoteContentIndex(index);
      }
    },
    // 切换固定便笺
    pin(index) {
      const list = this.noteList;
      list[index].pin = !list[index].pin;
      this.UpdateNoteList(list);
    },
    // 删除便签
    del(index) {
      const list = this.noteList;
      list.splice(index, 1);
      this.UpdateNoteList(list);
      this.add();
    },
    // 显示固定列表
    pinNoteList(item) {
      return this.pinned ? item.pin : true;
    },
    // 弹窗显示完整的便笺
    showTitle(index) {
      if (this.pinned) {
        alert(this.noteList[index].title);
      }
    },
    // 更新本地存储的便签
    updateDB() {
      db.ls.set('note_list', this.noteList);
    }
  }
};
</script>

