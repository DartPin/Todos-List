<template>
  <div class="home">
    <div class="title-app">
      <div class="title-app__text">{{todos[0].date}}</div>      
    </div>
    <div class="home__body">
      <div class="home__body-item" v-for="el of todos[0].items" :key="el.id">
        <input class="home__body-item-checkbox" type="checkbox" v-if="el.check===0" >
        <input class="home__body-item-checkbox" type="checkbox" checked v-if="el.check===1" >
        <input class="home__body-item-checkbox" type="checkbox" v-if="el.check===2" >
        <img src="../assets/cross.png" alt="cross" class="cross" v-if="el.check===3" > 
        <div class="home__body-item-text">{{el.text}}</div>
        <div class="home__body-item-time" :class="el.statusColor"> {{el.status}}</div>
      </div>

      <div style="width: 100%"><div class="new-todo"> <div class="new-todo__plus">+ДОБАВИТЬ</div> </div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    
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
    font-weight: 300;
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
</style>
