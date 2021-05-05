<template>
  <div class="section-component">
    <h1>section-componentComponent</h1>

    <ul class="list-group list-group-horizontal">
      <li class="list-group-item">libelle : {{ section.libelle }}</li>
      <li class="list-group-item"><button @click="update">Modifier</button></li>
    </ul>
    <div v-if="editmodal">
      <edit-section-component :editsection="section" />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import FicheComponent from "@/components/ficheComponent.vue";
import EditSectionComponent from "@/components/sectionComponent.vue";
interface SampleObject {
  section: string;

  ficheS: Array<FicheComponent>;
}

@Component({
  components: { EditSectionComponent },
})
export default class SectionComponentComponent extends Vue {
  @Prop({ type: Object as PropType<SampleObject> })
  private section!: SampleObject;
  editmodal = false;
  mounted() {
    console.log("hello from app");
  }
}
</script>

<style scoped>
.card {
  margin-left: 5%;
  margin-right: 5%;
}
</style>

