
<script>
import {store} from '../store'
export default{
     name:'AppFilm',

     data(){
        return {
            store,
        }
     }
}
</script>

<template>
    <span>FILM</span>
    <div class="container">
    <div v-for="movie in store.movies" class="film-box">
    <div  class="film">
    <span>qui ci andrà l'immagine</span>
    <span>{{movie.title }}</span>
    <span>{{movie.original_title }}</span>
    <span>{{movie.original_language }}</span>
    <span>{{movie.vote_average }}</span>
    </div>
    </div>
    </div>
</template>


<style>

.container{
    
    display: flex;
    flex-wrap: wrap;
}
.film-box{
    width: calc(100% /2 );
    display: flex;
    border: 1px solid blue;
    justify-content: center;
    /*padding: 20px;*/
}

.film{
  border: 1px red solid;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

</style>