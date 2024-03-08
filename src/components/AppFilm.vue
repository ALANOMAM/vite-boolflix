
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

     methods:{

     }

     
}
</script>

<template>
    <span class="category">FILM</span>
    <div class="container">
    <div v-for="(movie, index) in store.movies" class="film-box">
    <div class="film">
     <!--accedo a tutte le immagini dei film che sono dentro il mio array "moviesImage" nel "store.js"-->   
    <img :src="store.moviesImage[index]" alt="">
    <span>Titolo: {{movie.title }}</span>
    <span>Titolo originale: {{movie.original_title }}</span>
    <span>{{movie.original_language }}</span>
    <div class="voto">
    <span>Voto: </span>
    <span v-for=" star in Math.floor((movie.vote_average*5)/10)"><i class="fa-regular fa-star"></i></span> 
    </div>
    </div>
    </div>
    </div>

</template>


<style lang="scss">

.category{
    display: inline-block;
    margin-top: 20px;
    padding: 5px;
    border-radius: 5px;
    font-size: 30px;
    background-color: red;
    color: white;
    
}

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

.voto{
    i{
    color:orange;
    }
}
</style>