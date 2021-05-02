<template>
  <div class="edit-user"> 
      <h1>edit-userComponent</h1>
      <input v-model="user.intitule" type="text">
    <button @click="edit">Editer</button>
    <button @click="supp">Supprimer</button>
  </div>
</template>
<script lang="ts">
   import { PropType } from 'vue';
  import { Component, Prop, Vue } from 'vue-property-decorator';
import  FicheComponent from "@/components/ficheComponent.vue";
import axios from "axios";
interface SampleObject{
   
      nom :string;
      prenom :string;
     ficheU :Array<FicheComponent>;
  
   }

  @Component({})
  export default class EditUserComponent extends Vue {
@Prop({type:Object as PropType<SampleObject> }) private edituser!:SampleObject;
      user = {}

    async edit(){
      try {
        let response = await axios({
          url : `http://localhost:8081/user/modif/${this.user.id}`,
          method :"PUT",
          data : this.user
        })
        console.log(response.data);
        
        this.$root.$emit("edit", this.user,this.edituser)
      } catch (error) {
        console.log(error);
        
      }}
      async supp(){
      try {
        let response = await axios({
          url : `http://localhost:8081/user/delete/${this.user.id}`,
          method :"DELETE",
          data : this.user
        })
        console.log(response.data);
        
        this.$root.$emit("supp", this.user,this.edituser)
      } catch (error) {
        console.log(error);
        
      }}
      
    created(){

      this.user = this.edituser
    }
    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

