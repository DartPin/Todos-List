<template>
  <div class="home">
    <div class="title-app">
      <div class="title-app__text">{{todos[0].date}}г.</div>      
    </div>
    <div class="home__body">
      <div v-for="el of todos[0].items" :key="el.id" @click="el.descriptionStatus = !el.descriptionStatus">
        <div class="home__body-item" >
          <img :src="require('@/assets/check'+ el.check +'.jpg')" alt="cross" class="cross"> 
          <div class="home__body-item-text">{{el.text}}</div>
          <div class="home__body-item-time" :class="el.statusColor"> {{el.status}}</div>         
        </div>
        <transition name="slide-fade">
          <div v-if='el.descriptionStatus'>
            <div class="home__body-item-disc">{{el.description}}</div>
            <div class="line" ></div>
          </div>        
        </transition>
      </div>
      

      <div style="width: 100%"><div class="new-todo"> <div class="new-todo__plus" @click="newTodoWin = !newTodoWin">+ДОБАВИТЬ</div> </div></div>

      <transition name="bounce">
        <div class="newTodoWin" v-if="newTodoWin">
          <div class="title-app">
            <div class="title-app__text">Новая задача</div>      
          </div>
          <!-- виджет выбора даты -->
          <div class="inputWindowsLine" >
            <div class="inputWindowsLine-inpdesc">Дата</div>  
            <div>
              <div class="arrow-up"  @click="setData(0, 1)">&#9650;</div>
              <transition name=list>
                <input type="text" class="inputWindowsLine-input small" v-model="dataChange.day">
              </transition>
              <div class="arrow-down" @click="setData(0, -1)">&#9660;</div>
            </div>     
            <div>
              <div class="arrow-up arr-med" @click="setData(1, 1, index)">&#9650;</div>
              <input type="text" class="inputWindowsLine-input medium" v-model="dataChange.mounth[index]">
              <div class="arrow-down arr-med" @click="setData(1, -1, index)">&#9660;</div>
            </div>    
            <div>
              <div class="arrow-up" @click="setData(2, 1, index)">&#9650;</div>
              <input type="text" class="inputWindowsLine-input small" v-model="dataChange.year">
              <div class="arrow-down" @click="setData(2, -1, index)">&#9660;</div>
            </div>    
          </div>
          <div class="inputWindowsLine" >
            <div class="inputWindowsLine-inpdesc">Задача</div>  
            <input type="text" class="inputWindowsLine-input" v-model="newTodo.text">      
          </div>
          <div class="inputWindowsLine" >
            <div class="inputWindowsLine-inpdesc" >Описание</div>  
            <textarea class="inputWindowsLine-input textarea" v-model="newTodo.description"></textarea>      
          </div>
          <div class="inputWindowsLine" >
            <div class="inputWindowsLine-inpdesc">Завершить до</div>  
            <input type="text" class="inputWindowsLine-input" v-model="newTodo.timeEnd">      
          </div>
          <div class="inputWindowsLine-buttonBlock">
            <img src="../assets/check2.jpg" alt="confrim" class="inputWindowsLine-button" @click="setNewTodo()">
            <img src="../assets/check3.jpg" alt="disline" class="inputWindowsLine-button" @click="newTodoWin = !newTodoWin">
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    
  },
  data() {
        return {
          newTodoWin: false,
          options: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
          newTodo: {
            date: new Date().toLocaleString("ru"),
            text: "",
            description: "",
            timeEnd: ""
          } ,
          dataChange:{
            day: 1,
            mounth: ["ЯНВАРЯ", "ФЕВРАЛЯ", "МАРТА", "АПРЕЛЯ", "МАЯ", "ИЮНЯ", "ИЮЛЯ", "АВГУСТА", "СЕНТЯБРЯ", "ОКТЯБРЯ", "НОЯБРЯ", "ДЕКАБРЯ"],
            year: 2021
          },
          index: 0
        };
  },
  methods:{
    setNewTodo(){
      this.newTodoWin = !this.newTodoWin
      this.$store.dispatch('NEW_TODO', this.newTodo);
      console.log(this.newTodo)
      this.newTodo = {
             date: "",
             text: "",
             description: "",
             timeEnd: ""
           } 
    },
    setData(value, arrow, index){
      // обработка изменения дня
      if (value === 0){
        if (arrow > 0){
          this.dataChange.day = this.dataChange.day + 1;
          if (this.dataChange.day === 32){
            this.dataChange.day = 1
          }
        } else {
          this.dataChange.day = this.dataChange.day - 1;
          if (this.dataChange.day === 0){
            this.dataChange.day = 31
          }
        }
      }
      //обработка изменения месяца
      if (value === 1){
        if (arrow > 0){
          this.index = this.index + 1
          if (this.index === 12){
            this.index = 0;
          }
        } else {
          this.index = this.index - 1
          if (this.index === -1){
            this.index = 11;
          }
        }
      }
      // обработка изменения года
      if (value === 2){
        if (arrow > 0){
          this.dataChange.year = this.dataChange.year + 1;
        } else {
          this.dataChange.year = this.dataChange.year - 1;
        }
      }
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title-app{
    color: white;
    background: red;
    height: 60px;
    text-align: center;
  }
  .title-app__text{
    font-size: 40px;
  }


  .home__body{
    width: 90%;
    margin: 15px 5% 15px 5%;
  }
  .home__body-item{
    width: 100%;
    padding: 0 0 8px 0;
    border-bottom: 1px solid red;
    display: inline-flex;
  }
  .home__body-item-checkbox{
    width: 10%;
    margin: 7px 0 0 0;
  }
  .home__body-item-text{
    width: 45%;
  }
  .home__body-item-time{
    width: 45%;
    color: green;
  }
  .cross{
    width:20px;
    height: 20px;
    margin: 5px 10px 0 7px;
  }
  .red{
    color: red;
  }
  .new-todo{
    position: absolute;
    left: 50%;
    margin: 10px 0 0 -48px;
    width: 95px;
    height: 20px;
    background: red;
    border-radius: 4px;
    border: 1px solid grey;
    color: white;
    font-size: 20px;
  }
  .new-todo__plus{
    position: absolute;
    margin: -6px 0 0 2px; 
  }
  .home__body-item-disc{
    border-left: 1px  solid red;
    margin: 5px 0 0 0;
    padding: 5px 0 15px 5px;
    font-weight: 300;
  }
  .line{
    width: 30%;
    border-top: 1px solid red;
    margin-bottom: 10px;
  }

  /* Стили для окна нового задания*/
  .newTodoWin{
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    border: 1px solid red;
    border-radius: 10px;
    background: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  .inputWindowsLine{
    display: inline-flex;
    width: 90%;
    margin: 10px 0 0 5%;
  }
  .inputWindowsLine-inpdesc{
    width: 35%;
  }
  .inputWindowsLine-input{
    width: 65%;
    border-bottom: 1px solid red;
    border-left: 1px solid rgb(221, 220, 220);
    border-right: 1px solid rgb(221, 220, 220);
    border-top: 1px solid rgb(241, 241, 241);
    background: rgb(241, 241, 241);
    border-radius: 3px;
  }
  .textarea{
    height: 100px;
  }
  .inputWindowsLine-buttonBlock{
    display: inline-flex;
    width: 100%;
    margin: 30px 0 0 0;
    justify-content: center;
    
  }
  .inputWindowsLine-button{
    width: 40px;
    height: 40px;
    margin: 0 15px 0 15px;
  }







/* Анимация появления текста описания задачи*/
  .slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s ;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}

.arrow-up{
  width: 45px;
  border-top: 1px solid red;
  border-radius: 5px 5px 0 0;
  text-align: center;
  background: rgb(241, 241, 241);
}
.arrow-down{
  width: 45px;
  border-bottom: 1px solid red;
  border-radius: 0 0 5px 5px;
  text-align: center;
  background: rgb(241, 241, 241);
}
.arr-med{
  width: 105px;
}
.small{
  width: 40px;
  text-align: center;
  border-bottom: 0px;
}
.medium{
  width: 100px;
  text-align: center;
  border-bottom: 0px;
}

/* Анимация появления окна*/
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Анимация изменения даты*/
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
