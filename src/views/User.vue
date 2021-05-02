<template>
  <div class="user"> 
      <h1>userComponent</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class UserComponent extends Vue {

    mounted (){
      console.log('hello from app');
    }
    
  }

</script>


