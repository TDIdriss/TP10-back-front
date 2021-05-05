<template>
  <div class="user"> 
    <user-component/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import UserComponent from "@/components/users.vue";

  @Component({
    components: {
      UserComponent
    }
  })
  export default class User extends Vue {

    mounted (){
      console.log('hello from app');
    }
    
  }

</script>


