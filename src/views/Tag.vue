<template>
  <div class="tag">
    <tags/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import tags  from "@/components/tags.vue";

@Component({
  components: {
    tags
  },
})
export default class Tag extends Vue {}
</script>
