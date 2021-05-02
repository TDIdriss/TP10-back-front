<template>
  <div class="fiches"> 
      <h1>fichesComponent</h1>
      <div> <fiche-component-component v-for="item in listfiche" :key="item" :fiche="item"/> </div>
      <button @click="openmodal">Ajouter une fiche</button>
      <div>
        <label for="">libelle</label>
        <input type="text" v-model="newfiche.libelle">

        <label for="">date</label>
        <input type="text" v-model="newfiche.date">

        <label for="">note</label>
        <input type="text" v-model="newfiche.note">

        <label for="">url</label>
        <input type="text" v-model="newfiche.url">

        <label for="">temps</label>
        <input type="text" v-model="newfiche.temps">

        <label for="">section</label>
        <input type="text" v-model="newfiche.section">

        <label for="">tags</label>
        <input type="text" v-model="newfiche.tags">

        <label for="">user</label>
        <input type="text" v-model="newfiche.user">
      <button @click="addFiche"> Ajouter</button>
      </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import FicheComponentComponent from "@/components/ficheComponent.vue";
 import axios from "axios";
 @Component({
   components:{
     FicheComponentComponent
   }
 })
  export default class FichesComponent extends Vue {
   addmodal=false
newfiche = {}
   listuser=[
      {

      }
    ]
   listfiche=[
      {

      }
    ]
    
    async addFiche(){
      try {
        let response = await axios({
          url : "/fiche/creation",
          method :"POST",
          data : this.newfiche
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

    async findFiche(){
      try {
        let response = await axios({
          url : "/fiche",
          method :"GET",
          params : {}
       })

       console.log(response.data);
       this.listfiche.push(response.data);
       
      } catch (error) {
        console.log(error);
        
      }
    }

    async findUser(){
      try {
        let response = await axios({
          url : "/user",
          method :"GET",
          params : {}
       })

       console.log(response.data);
       this.listuser.push(response.data);
       
      } catch (error) {
        console.log(error);
        
      }
    }
    created(){
        this.$root.$on("supp", this.removefiche)
        this.$root.$on("edit", this.editfiche)
      }
      editfiche(newfiche,fiche){
        console.log(newfiche);
        console.log(fiche);
        console.log(this.listfiche.indexOf(fiche));
      
          this.listfiche.splice(this.listfiche.indexOf(fiche),1,newfiche)
          console.log(this.listfiche);
      }

      removefiche(fiche){
            console.log(fiche);
            console.log(this.listfiche.indexOf(fiche))
            
            this.listfiche.splice(this.listfiche.indexOf(fiche),1)
            console.log(this.listfiche);
            
      }
    async mounted (){
      console.log('hello from app');
      await this.findFiche()
      console.log("ici");
      
    }
    
  }

</script>


