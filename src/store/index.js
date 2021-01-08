//import { push } from 'core-js/fn/array'
//import { valueOf } from 'core-js/fn/_'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      // check 0 - не начато,  1 - в процессе, 2 - завершено, 3 - провалено
      {
        date: "26 ЯНВАРЯ 2020",
        items: [
          {
            id: 0,
            check: 0,
            text: "пропылесосить",
            timeBegin: "",
            timeEnd: "",
            status: "",
            statusColor: "green",
            descriptionStatus: false,
            description: "ahsfjkasghfaklsdfk"
          },
          {
            id: 1,
            check: 1,
            text: "помыть посуду",
            timeBegin: "20-00 03 окт.",
            timeEnd: "",
            status: "нач. 20-00 03 окт.",
            statusColor: "green",
            descriptionStatus: false,
            description: "Перемыть все тарелки. Не забыть про ложки. Вили протереть с особой тщательностью!!!"
          },
          {
            id: 2,
            check: 3,
            text: "убраться",
            timeBegin: "20-00 03 окт.",
            timeEnd: "",
            status: "Просрочен 22-00 03 окт.",
            statusColor: "red",
            descriptionStatus: false,
            description: "ahsfjkasghfaklsdfk"
          },
          {
            id: 3,
            check: 2,
            text: "выкинуть мусор",
            timeBegin: "20-00 03 окт.",
            timeEnd: "",
            status: "Выполнен 21-00 03 окт.",
            statusColor: "green",
            descriptionStatus: false,
            description: "ahsfjkasghfaklsdfk"
          },
        ]
      }
    ]  
  },
  mutations: {
   NEW_TODO: (state, value) =>{
      let data = {}
        data.id = 5;
        data.check = 0;
        data.text = value.text;
        data.timeBegin = "";
        data.timeEnd = value.timeEnd;
        data.status = "";
        data.statusColor = "green";
        data.descriptionStatus = false;
        data.description =  value.description;
        
        let a = null;
        let mounth = ["ЯНВАРЯ", "ФЕВРАЛЯ", "МАРТА", "АПРЕЛЯ", "МАЯ", "ИЮНЯ", "ИЮЛЯ", "АВГУСТА", "СЕНТЯБРЯ", "ОКТЯБРЯ", "НОЯБРЯ", "ДЕКАБРЯ"];
        let strDate = state.todos[0].date.split(' ')
        for (let i = 0; i<mounth.length; i++){
          if (mounth[i] === strDate[1]){
            a = new Date(Number(strDate[2]), i, Number(strDate[0]))
          }
        } 
        
         
    console.log(a) 
    state.todos[0].items.push(data)
   }
  },
  actions: {
    NEW_TODO: (context, value) => {
      context.commit('NEW_TODO', value);
    },
  },
  modules: {
  }
})
