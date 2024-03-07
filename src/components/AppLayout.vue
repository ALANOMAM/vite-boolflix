
<script>
import {store} from '../store'
import AppFilm from './AppFilm.vue'
import AppSeries from './AppSeries.vue'

export default{
    name:'AppLayout',
    components:{
        AppFilm,
        AppSeries,
    },

    data(){
        return{
          store,
        }
    }
}
</script>

<template>
<div class="layout">
   <AppFilm></AppFilm>
   <AppSeries></AppSeries>
</div>

</template>

<style>

</style>