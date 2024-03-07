
<script>
import axios from 'axios'
import {store} from './store'
import AppHeader from './components/AppHeader.vue'
export default{
  
  components:{
    AppHeader,
  },

  data(){
    return{
        store,
    }
  },

  created(){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=756ab663684b23166a50d98c73cd1472&query=ritorno+al+futuro')
    .then(res=> {
   
        //console.log(res.data.results[0].poster_path)
        // salvo i vari oggetti legati al film nel mio array "movies" nel file "store.js"
        this.store.movies = res.data.results
       
    })
  },
}
</script>

<template>
  <AppHeader></AppHeader>
</template>

<style>


</style>