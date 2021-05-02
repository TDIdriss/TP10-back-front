<template>
  <div class="user-component"> 
      <h1>user-componentComponent</h1>

      <h1>libelle : {{user.nom}}</h1>
      <h1>libelle : {{user.prenom}}</h1>

      
      <div v-if="editmodal"> <edit-user-component :edituser="user"/> </div>
      
      

  </div>
</template>

<script lang="ts">
  
  import { PropType } from 'vue';
  import { Component, Prop, Vue } from 'vue-property-decorator';
import  FicheComponent from "@/components/ficheComponent.vue";
import EditUserComponent from "@/components/userComponent.vue";
interface SampleObject{
   
      nom : string;
      prenom : string
      
     ficheU :Array<FicheComponent>;
  
   }


  @Component({
   components :{EditUserComponent} 
  })
  export default class UserComponentComponent extends Vue {
 @Prop({type:Object as PropType<SampleObject> }) private user!:SampleObject;
 editmodal=false;
    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

