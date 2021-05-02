<template>
  <div class="section">
    <sections/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import sections  from "@/components/sections.vue";

@Component({
  components: {
    sections
  },
})
export default class section extends Vue {}
</script>
