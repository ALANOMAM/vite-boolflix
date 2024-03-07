
<script>
import {store} from '../store'
export default{
    name:'AppLayout',
    data(){
        return{
          store,
        }
    }
}
</script>

<template>
<div class="layout">
    <div v-for="movie in store.movies" class="item-box">
<div  class="item">
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
.layout{
    display: flex;
    flex-wrap: wrap;
}

.item-box{
    width: calc(100% /2 );
    display: flex;
    border: 1px solid blue;
    justify-content: center;
    /*padding: 20px;*/
}

.item{
  border: 1px red solid;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}


</style>