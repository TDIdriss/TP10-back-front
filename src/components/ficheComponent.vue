<template>
  <div class="fiche-component"> 
      <h1>fiche-componentComponent</h1>

      <h1>libelle : {{fiche.libelle}}</h1>
      <h1>lieu : {{fiche.lieu}}</h1>
      <h1>date : {{fiche.date}}</h1>
      <h1>note : {{fiche.note}}</h1>
      <h1>temps : {{fiche.temps}}</h1>
      <h1>url : {{fiche.url}}</h1>
      <h1>tags : {{fiche.tags}}</h1>
      <h1>section : {{fiche.section}}</h1>
      <h1>user: {{fiche.user}}</h1>
      <div v-if="editmodal"> <edit-fache-component :editFiche="fiche"/> </div>
      
      

  </div>
</template>

<script lang="ts">
  
  import { PropType } from 'vue';
  import { Component, Prop, Vue } from 'vue-property-decorator';
import SectionsComponent from './sections.vue';
import TagsComponent from './tags.vue';
import UsersComponent from './users.vue';
import  EditFacheComponent from "@/components/editFache.vue";
interface SampleObject{
   
      libelle :string;
      lieu :string;
      date :string;
      note :string;
      temps :string;
      url :string;
     tags :Array<TagsComponent>;
     section :SectionsComponent;
     user: UsersComponent
   }

  @Component({
   components :{EditFacheComponent} 
  })
  export default class FicheComponentComponent extends Vue {
 @Prop({type:Object as PropType<SampleObject> }) private fiche!:SampleObject;
 editmodal=false;
    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

