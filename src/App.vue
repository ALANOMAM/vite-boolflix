
<script>
import axios from 'axios'
import {store} from './store'
import AppHeader from './components/AppHeader.vue'
import AppLayout from './components/AppLayout.vue'

export default{
  
  components:{
    AppHeader,
    AppLayout,
  },

  data(){
    return{
        store,
    }
  },

  created(){
    //chiamata API per i film associati al titolo che cerco

    axios.get('https://api.themoviedb.org/3/search/movie?api_key=756ab663684b23166a50d98c73cd1472&query=ritorno+al+futuro')
    .then(res=> {
   
        //console.log(res.data.results[0].poster_path)
        // salvo i vari oggetti legati al film nel mio array "movies" nel file "store.js"
        this.store.movies = res.data.results

        //pusho i link (stavolta completi) che mi indirizzano verso le immagini 
        //li pusho tutti dentro il mio array "moviesImage" dentro il mio file "store.js"
       for(let i=0; i < res.data.results.length ; i++){
       this.store.moviesImage.push('https://image.tmdb.org/t/p/w342'+res.data.results[i].poster_path)
        }

       //console.log(this.store.moviesImage)
       
    })


      //chiamata API per le serie associate al titolo che cerco
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=756ab663684b23166a50d98c73cd1472&query=ritorno+al+futuro')
    .then(res=> {
   
        //console.log(res.data.results)
        // salvo i vari oggetti legati alle serie nel mio array "series" nel file "store.js"
         this.store.series = res.data.results
        // console.log(this.store.series)

        //pusho i link (stavolta completi) che mi indirizzano verso le immagini 
        //li pusho tutti dentro il mio array "seriesImage" dentro il mio file "store.js"
       for(let i=0; i < res.data.results.length ; i++){
       this.store.seriesImage.push('https://image.tmdb.org/t/p/w342'+res.data.results[i].poster_path)
        }

      // console.log(this.store.seriesImage)
       
    })


  }

}

</script>

<template>
  <AppHeader></AppHeader>
  <AppLayout></AppLayout>
</template>

<style>


</style>