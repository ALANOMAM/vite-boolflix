
<script>
import {store} from '../store'
export default{
     name:'AppSeries',

     data(){
        return {
            store,
        }
     }
}
</script>

<template>
 
 <div>SERIE</div>
    <div v-for="serie in store.series" class="series-box">
    <div  class="series">
    <span>qui ci andrà l'immagine</span>
    <span>{{serie.title }}</span>
    <span>{{serie.original_title }}</span>
    <span>{{serie.original_language }}</span>
    <span>{{serie.vote_average }}</span>
    </div>
    </div>

</template>


<style>

.series-box{
    width: calc(100% /2 );
    display: flex;
    border: 1px solid blue;
    justify-content: center;
    /*padding: 20px;*/
}

.series{
  border: 1px red solid;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

</style>