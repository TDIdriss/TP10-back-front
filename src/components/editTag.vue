<template>
  <div class="edit-tag"> 
      <h1>edit-tagComponent</h1>
      <input v-model="tag.intitule" type="text">
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
   
      tag :string;
      
     ficheT :Array<FicheComponent>;
  
   }

  @Component({})
  export default class EditTagComponent extends Vue {
@Prop({type:Object as PropType<SampleObject> }) private edittag!:SampleObject;
      tag = {}

    async edit(){
      try {
        let response = await axios({
          url : `http://localhost:8081/tag/modif/${this.tag.id}`,
          method :"PUT",
          data : this.tag
        })
        console.log(response.data);
        
        this.$root.$emit("edit", this.tag,this.edittag)
      } catch (error) {
        console.log(error);
        
      }}
      async supp(){
      try {
        let response = await axios({
          url : `http://localhost:8081/tag/delete/${this.tag.id}`,
          method :"DELETE",
          data : this.tag
        })
        console.log(response.data);
        
        this.$root.$emit("supp", this.tag,this.edittag)
      } catch (error) {
        console.log(error);
        
      }}
      
    created(){

      this.tag = this.edittag
    }
    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

