
<script>
import {store} from '../store'
export default{
     name:'AppFilm',

     data(){
        return {
            store,
            image:''
        }
     },

     
}
</script>

<template>
    <span class="category">FILM</span>
    <div class="container">
    <div v-for="(movie, index) in store.movies" class="film-box">
    <div class="film">
     <!--accedo a tutte le immagini dei film che sono dentro il mio array "moviesImage" nel "store.js"-->   
    <img :src="store.moviesImage[index]" alt="">
    <span>{{movie.title }}</span>
    <span>{{movie.original_title }}</span>
    <span>{{movie.original_language }}</span>
    <span>{{movie.vote_average }}</span>
    </div>
    </div>
    </div>

</template>


<style lang="scss">

.container{
    
    display: flex;
    flex-wrap: wrap;
}
.film-box{
    width: calc(100% /4 );
     display: flex;
   /* border: 1px solid blue;*/
    justify-content: center;
    padding: 10px;
    
}

.film{
  width: 100%;
  /*border: 1px red solid;*/
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  img{
   width: 100%;
  }
}

</style>