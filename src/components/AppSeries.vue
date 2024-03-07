
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
 
   <span class="category">SERIE</span>
    <div class="container">
    <div v-for="(serie, index) in store.series" class="series-box">
    <div  class="series">
    <!--accedo a tutte le immagini delle serie che sono dentro il mio array "seriesImage" nel "store.js"-->  
    <img :src="this.store.seriesImage[index]" alt="">
    <span>{{serie.name }}</span>
    <span>{{serie.original_name }}</span>
    <span>{{serie.original_language }}</span>
    <span>{{serie.vote_average }}</span>
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

.series-box{
    padding: 10px;
    width: calc(100% /4 );
    display: flex;
    /*border: 1px solid blue;*/
    justify-content: center;
    /*padding: 20px;*/
}

.series{
 width:100% ;
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