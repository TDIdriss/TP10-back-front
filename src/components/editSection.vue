<template>
  <div class="edit-section">
    <h1>edit-sectionComponent</h1>
    <form>
      <div class="mb-3">
        <label for="" class="form-label">Intitulé</label>
        <input
          v-model="section.intitule"
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
import FicheComponent from "@/components/ficheComponent.vue";
import axios from "axios";
interface SampleObject {
  section: string;

  ficheS: Array<FicheComponent>;
}

@Component({})
export default class EditSectionComponent extends Vue {
  @Prop({ type: Object as PropType<SampleObject> })
  private editsection!: SampleObject;
  section = {};

  async edit() {
    try {
      let response = await axios({
        url: `http://localhost:8081/section/modif/${this.section.id}`,
        method: "PUT",
        data: this.section,
      });
      console.log(response.data);

      this.$root.$emit("edit", this.section, this.editsection);
    } catch (error) {
      console.log(error);
    }
  }
  async supp() {
    try {
      let response = await axios({
        url: `http://localhost:8081/section/delete/${this.section.id}`,
        method: "DELETE",
        data: this.section,
      });
      console.log(response.data);

      this.$root.$emit("supp", this.section, this.editsection);
    } catch (error) {
      console.log(error);
    }
  }

  created() {
    this.section = this.editsection;
  }
  mounted() {
    console.log("hello from app");
  }
}
</script>

