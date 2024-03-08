
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
    <!--accedo a tutte le immagini dei film che sono dentro il mio array "moviesImage" nel "store.js"--> 
    <img :src="store.moviesImage[index]" alt=""> 

    <!--film info start-->
    <div class="film-info"> 
    <span><strong>Titolo: </strong>{{movie.title }}</span>
    <span><strong>Titolo originale: </strong>{{movie.original_title }}</span>
    <!--country flag start-->
    <div class="country-flag">
    <span><strong>Country: </strong></span>
    <span v-if="movie.original_language === 'en'"><img src="../../public/img/usa2.png" alt=""></span>
    <span v-else-if="movie.original_language === 'ja'"><img src="../../public/img/japan2.png" alt=""></span>
    <span v-else-if="movie.original_language === 'fr'"><img src="../../public/img/france.png" alt=""></span>
    <span v-else-if="movie.original_language === 'de'"><img src="../../public/img/german.png" alt=""></span>
    <span v-else>{{ movie.original_language }}</span>
    </div> 
    <!--country flag end--> 
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
    <!--film info end-->
    </div>
    </div>

</template>


<style lang="scss" scoped>

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
    position: relative;
    width: calc(100% /4 );
     display: flex;
     flex-direction: column;
     gap: 10px;
  /* border: 1px solid blue;*/
    justify-content: center;
    padding: 10px;
    
}

.film-info{
  /*width: 100%;*/
 /* border: 1px red solid;*/
  position: absolute;
  top:10px;
  right: 10px;
  left: 10px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items:flex-start;
  background-color:darkred;
  padding: 5px;
  /* opacity: 0;*/
}

/*.film-info:hover{
    opacity: 1;
    transition: 1s;
}*/

.voto{
    i{
    color:orange;
    }
}

.overview-box{
    height:300px;
    overflow-y: auto;
}

.country-flag{
    display: flex;
    align-items: center;
    gap: 5px;
    img{
        width: 50px;
    }
}
</style>