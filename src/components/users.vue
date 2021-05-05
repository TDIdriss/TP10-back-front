<template>
  <div class="user"> 
      <h1>userComponent</h1>

       <div class="row">
      <div class="col-12">
        <div class="card">
      <div> <user-component-component v-for="item in listuser" :key="item" :user="item"/> </div>
      <br>
      <button @click="openmodal">Ajouter une user</button>
      
      <form v-if="addmodal">
            <div class="row">
              <div class="col">
                <label for="" class="form-label">Nom</label>
                <input
                  type="text"
                  v-model="newuser.nom"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="col">
                <label for="" class="form-label">prenom</label>
                <input
                  type="text"
                  v-model="newuser.prenom"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="col"></div>
              <button @click="adduser" type="submit" class="btn btn-primary">
                Ajouter
              </button>
            </div>
          </form>

      </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import UserComponentComponent from "@/components/userComponent.vue";
 import axios from "axios";
 @Component({
   components:{
     UserComponentComponent
   }
 })
  export default class UserComponent extends Vue {
   addmodal=false
newuser = {}
   listuser=[
      {

      }
   ]
    
    async adduser(){
      try {
        let response = await axios({
          url : "/user/creation",
          method :"POST",
          data : this.newuser
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

    async finduser(){
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
        this.$root.$on("supp", this.removeuser)
        this.$root.$on("edit", this.edituser)
      }
      edituser(newuser,user){
        console.log(newuser);
        console.log(user);
        console.log(this.listuser.indexOf(user));
      
          this.listuser.splice(this.listuser.indexOf(user),1,newuser)
          console.log(this.listuser);
      }

      removeuser(user){
            console.log(user);
            console.log(this.listuser.indexOf(user))
            
            this.listuser.splice(this.listuser.indexOf(user),1)
            console.log(this.listuser);
            
      }
    async mounted (){
      console.log('hello from app');
      await this.finduser()
      console.log("ici");
      console.log(this.$route.path);
      
    }
    
  }

</script>



<style scoped>
.card {
  margin-left: 5%;
  margin-right: 5%;
}
</style>