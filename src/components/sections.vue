<template>
  <div class="section"> 
      <h1>sectionComponent</h1>
      <div> <section-component-component v-for="item in listsection" :key="item" :section="item"/> </div>
      <button @click="openmodal">Ajouter une section</button>
      <div>
        <label for="">nom</label>
        <input type="text" v-model="newsection.libelle">

      <button @click="addsection"> Ajouter</button>
      </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import SectionComponentComponent from "@/components/sectionComponent.vue";
 import axios from "axios";
 @Component({
   components:{
     SectionComponentComponent
   }
 })
  export default class SectionComponent extends Vue {
   addmodal=false
newsection = {}
   listsection=[
      {

      }
   ]
    
    async addsection(){
      try {
        let response = await axios({
          url : "/section/creation",
          method :"POST",
          data : this.newsection
       })

       console.log(response.data);
       this.addmodal=false
      } catch (error) {
        console.log(error);
        
      }
    }
    openmodal(){
        this.addmodal=true
        //console.log("ici");
        console.log(this.addmodal);
        }

    async findsection(){
      try {
        let response = await axios({
          url : "/section",
          method :"GET",
          params : {}
       })

       console.log(response.data);
       this.listsection.push(response.data);
       
      } catch (error) {
        console.log(error);
        
      }
    }

    
    created(){
        this.$root.$on("supp", this.removesection)
        this.$root.$on("edit", this.editsection)
      }
      editsection(newsection,section){
        console.log(newsection);
        console.log(section);
        console.log(this.listsection.indexOf(section));
      
          this.listsection.splice(this.listsection.indexOf(section),1,newsection)
          console.log(this.listsection);
      }

      removesection(section){
            console.log(section);
            console.log(this.listsection.indexOf(section))
            
            this.listsection.splice(this.listsection.indexOf(section),1)
            console.log(this.listsection);
            
      }
    async mounted (){
      console.log('hello from app');
      await this.findsection()
      console.log("ici");
      
    }
    
  }

</script>


