
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
    <span><strong>Titolo: </strong>{{movie.title }}</span>
    <span><strong>Titolo originale: </strong>{{movie.original_title }}</span>
    <span>{{movie.original_language }}</span>
    <!--contentore voto start-->
    <div class="voto">
    <span><strong>Voto: </strong></span>
    <span v-for=" star in Math.floor((movie.vote_average*5)/10)"><i class="fa-regular fa-star"></i></span> 
    </div>
    <!--contentore voto end-->
    <!--contenitore overwiew start (messo per limitare lestensione di overview troppo lunghi)-->
     <div class="overview-box">
    <span><strong>Overview: </strong>{{movie.overview}}</span>
     </div>
    <!--contenitore overwiew end-->
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

.overview-box{
    height: 200px;
    overflow-y: auto;
}
</style>