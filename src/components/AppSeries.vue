
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
    <span> <strong>Titolo:</strong> {{serie.name }}</span>
    <span> <strong>Titolo originale:</strong> {{serie.original_name }}</span>
    <span>{{serie.original_language }}</span>
    <div class="voto">
    <span> <strong>Voto: </strong></span>
    <span v-for=" star in Math.floor((serie.vote_average*5)/10)"><i class="fa-regular fa-star"></i></span> 
    </div>
    <span><strong>Overview: </strong>{{serie.overview }}</span>
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

.voto{
    i{
    color:orange;
    }
}

</style>