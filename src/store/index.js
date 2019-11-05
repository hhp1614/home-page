import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutationTypes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    noteList: [],
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
      state.contentIndex = noteContentIndex;
    }
  },
  actions: {
    UpdateNoteList({ commit }, noteList) {
      commit(types.NOTE_LIST, noteList);
    },
    UpdateNoteContent({commit}, noteContent) {
      commit(types.NOTE_CONTENT, noteContent);
    },
    UpdateNoteContentIndex({ commit }, noteContentIndex) {
      commit(types.CONTENT_INDEX, noteContentIndex);
    }
  },
  modules: {}
});
