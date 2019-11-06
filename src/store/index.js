import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutationTypes';
import { db } from '../utils/db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    noteList: db.ls.get('note_list') || [],
    noteContent: '',
    noteContentIndex: ''
  },
  mutations: {
    [types.NOTE_LIST](state, noteList) {
      state.noteList = noteList;
    },
    [types.NOTE_CONTENT](state, noteContent) {
      state.noteContent = noteContent;
    },
    [types.CONTENT_INDEX](state, noteContentIndex) {
      state.noteContentIndex = noteContentIndex;
    }
  },
  actions: {
    UpdateNoteList({ commit }, noteList) {
      db.ls.set('note_list', noteList);
      commit(types.NOTE_LIST, noteList);
    },
    UpdateNoteContent({ commit }, noteContent) {
      commit(types.NOTE_CONTENT, noteContent);
    },
    UpdateNoteContentIndex({ commit }, noteContentIndex) {
      commit(types.CONTENT_INDEX, noteContentIndex);
    }
  },
  modules: {}
});
