<template>
  <div class="edit-fache">
    <h1>edit-ficheComponent</h1>
    <form>
      <div class="mb-3">
        <label for="" class="form-label">Intitulé</label>
        <input
          v-model="fiche.intitule"
          class="form-control"
          id=""
          type="text"
        />
      </div>
      <button @click="edit" type="submit" class="btn btn-primary">
        Editer
      </button>
      <button @click="supp" type="submit" class="btn btn-primary">
        Supprimer
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import SectionsComponent from "./sections.vue";
import TagsComponent from "./tags.vue";
import UsersComponent from "./users.vue";
import axios from "axios";
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

@Component({})
export default class EditFacheComponent extends Vue {
  @Prop({ type: Object as PropType<SampleObject> })
  private editFiche!: SampleObject;
  fiche = {};

  async edit() {
    try {
      let response = await axios({
        url: `http://localhost:8081/fiche/modif/${this.fiche.id}`,
        method: "PUT",
        data: this.fiche,
      });
      console.log(response.data);

      this.$root.$emit("edit", this.fiche, this.editFiche);
    } catch (error) {
      console.log(error);
    }
  }
  async supp() {
    try {
      let response = await axios({
        url: `http://localhost:8081/fiche/delete/${this.fiche.id}`,
        method: "DELETE",
        data: this.fiche,
      });
      console.log(response.data);

      this.$root.$emit("supp", this.fiche, this.editFiche);
    } catch (error) {
      console.log(error);
    }
  }

  created() {
    this.fiche = this.editFiche;
  }
  mounted() {
    console.log("hello from app");
  }
}
</script>

