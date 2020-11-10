import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      // check 0 - не начато,  1 - в процессе, 2 - завершено, 3 - провалено
      {
        date: "26 января 2020г.",
        items: [
          {
            id: 0,
            check: 0,
            text: "пропылесосить",
            timeBegin: "",
            timeEnd: "",
            status: "",
            statusColor: "green"
          },
          {
            id: 1,
            check: 1,
            text: "помыть посуду",
            timeBegin: "20-00 03 окт.",
            timeEnd: "",
            status: "нач. 20-00 03 окт.",
            statusColor: "green"
          },
          {
            id: 2,
            check: 3,
            text: "убраться",
            timeBegin: "20-00 03 окт.",
            timeEnd: "",
            status: "Просрочен 22-00 03 окт.",
            statusColor: "red"
          },
          {
            id: 3,
            check: 2,
            text: "выкинуть мусор",
            timeBegin: "20-00 03 окт.",
            timeEnd: "",
            status: "Выполнен 21-00 03 окт.",
            statusColor: "green"
          },
        ]
      }
    ]  
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
