<template>
  <div class="tag-component">
    <h1>tag-componentComponent</h1>

    <ul class="list-group list-group-horizontal">
      <li class="list-group-item">libelle : {{ tag.libelle }}</li>
      <li class="list-group-item"><button @click="update">Modifier</button></li>
    </ul>

    <div v-if="editmodal"><edit-tag-component :edittag="tag" /></div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import FicheComponent from "@/components/ficheComponent.vue";
import EditTagComponent from "@/components/tagComponent.vue";
interface SampleObject {
  libelle: string;

  ficheT: Array<FicheComponent>;
}

@Component({
  components: { EditTagComponent },
})
export default class TagComponentComponent extends Vue {
  @Prop({ type: Object as PropType<SampleObject> }) private tag!: SampleObject;
  editmodal = false;
  mounted() {
    console.log("hello from app");
  }
  update() {
    this.editmodal = true;
  }
}
</script>

