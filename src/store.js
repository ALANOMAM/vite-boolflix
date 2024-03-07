import { reactive } from 'vue'

export const store = reactive({
    /*dove salvo gli oggetti con i dati dei film assciati al nome che cerco */
   movies:[],

   /*dove salvo gli oggetti con i dati delle serie assciate al nome che cerco*/
   series:[],
   
   moviesImage:[],

   seriesImage:[],

   movieName:''
});   
