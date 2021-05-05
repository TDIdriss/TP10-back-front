<template>
  <div class="edit-tag">
    <h1>edit-tagComponent</h1>
    <form>
      <div class="mb-3">
        <label for="" class="form-label">Intitulé</label>
        <input v-model="tag.libelle" class="form-control" id="" type="text" />
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
  libelle: string;

  ficheT: Array<FicheComponent>;
}

@Component({})
export default class EditTagComponent extends Vue {
  @Prop({ type: Object as PropType<SampleObject> })
  private edittag!: SampleObject;
  tag = {};

  async edit() {
    try {
      let response = await axios({
        url: `http://localhost:8081/tag/modif/${this.tag.id}`,
        method: "PUT",
        data: this.tag,
      });
      console.log(response.data);

      this.$root.$emit("edit", this.tag, this.edittag);
    } catch (error) {
      console.log(error);
    }
  }
  async supp() {
    try {
      let response = await axios({
        url: `http://localhost:8081/tag/delete/${this.tag.id}`,
        method: "DELETE",
        data: this.tag,
      });
      console.log(response.data);

      this.$root.$emit("supp", this.tag, this.edittag);
    } catch (error) {
      console.log(error);
    }
  }

  created() {
    this.tag = this.edittag;
  }
  mounted() {
    console.log("hello from app");
  }
}
</script>

