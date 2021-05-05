<template>
  <div class="fiche">
    <fiches/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import fiches from "@/components/fiches.vue";

@Component({
  components: {
    fiches
  },
})
export default class Fiche extends Vue {}
</script>
