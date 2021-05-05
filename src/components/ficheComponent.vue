<template>
  <div class="fiche-component">

    <ul class="list-group list-group-horizontal">
      <li class="list-group-item">libelle : {{ fiche.libelle }}</li>
      <li class="list-group-item">date : {{ fiche.date }}</li>
      <li class="list-group-item">note : {{ fiche.note }}</li>
      <li class="list-group-item">temps : {{ fiche.temps }}</li>
      <li class="list-group-item">url : {{ fiche.url }}</li>
      <li class="list-group-item">tags : {{ fiche.tags }}</li>
      <li class="list-group-item">section : {{ fiche.section }}</li>
      <li class="list-group-item">user: {{ fiche.user }}</li>
      <li class="list-group-item"><button @click="update">Modifier</button></li>
    </ul>
    <div v-if="editmodal"><edit-fache-component :editFiche="fiche" /></div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import SectionsComponent from "./sections.vue";
import TagsComponent from "./tags.vue";
import UsersComponent from "./users.vue";
import EditFacheComponent from "@/components/editFache.vue";
interface SampleObject {
  libelle: string;
  lieu: string;
  date: string;
  note: string;
  temps: string;
  url: string;
  tags: Array<TagsComponent>;
  section: SectionsComponent;
  user: UsersComponent;
}

@Component({
  components: { EditFacheComponent },
})
export default class FicheComponentComponent extends Vue {
  @Prop({ type: Object as PropType<SampleObject> })
  private fiche!: SampleObject;
  editmodal = false;
  mounted() {
    console.log("hello from app");
  }
  update() {
    this.editmodal = true;
  }
}
</script>

