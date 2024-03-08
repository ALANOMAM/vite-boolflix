<script>

import {store} from '../store'
export default{
   name:'AppHeader',

  data(){
    return{
      store,
    }
  },

  methods:{
  
  }
}
</script>

<template>
    <div class="header">
        <span>BOOLFLIX</span>

         <div class="ricerca">
        <input type="text" placeholder="Scrivi il nome di un film" v-model="store.movieName" @keyup.enter="$emit('search')">
        <button @click="$emit('search')" >Cerca</button>
        </div>
    
    </div>
</template>

<style lang="scss">

.header{
    /*border: 1px blue solid;*/
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 0, 0, 0.753);

    span{
        font-size: 30px;
        font-weight: bolder;
    }
}

.ricerca{
    input{
        font-size: 20px;
        padding: 5px;
        border:1px solid white;
    }
    button{
        font-size: 20px;
        padding: 5px;
        color: white;
        background-color: gray;
        border:1px solid gray;
    }
}


</style>