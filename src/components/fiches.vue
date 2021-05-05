<template>
  <div class="fiches">
    <h1>fichesComponent</h1>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div>
            <fiche-component-component
              v-for="item in listfiche"
              :key="item"
              :fiche="item"
            />
          </div>
          <br />
          <button @click="openmodal" class="btn btn-primary">
            Ajouter une fiche
          </button>

          <form v-if="addmodal">
            <div class="row">
              <div class="col-4">
                <label for="" class="form-label">Libellé</label>
                <input
                  type="text"
                  v-model="newfiche.libelle"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="col-4">
                <label for="" class="form-label">Date</label>
                <input
                  type="text"
                  v-model="newfiche.date"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="col-4">
                <label for="" class="form-label">Note</label>
                <input
                  type="text"
                  v-model="newfiche.note"
                  class="form-control"
                  id=""
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="" class="form-label">Url</label>
                <input
                  type="text"
                  v-model="newfiche.url"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="col-4">
                <label for="" class="form-label">Temps</label>
                <input
                  type="text"
                  v-model="newfiche.temps"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="col-4">
                <label for="" class="form-label">Sections</label>
                <input
                  type="text"
                  v-model="newfiche.tags"
                  class="form-control"
                  id=""
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="" class="form-label">Tags</label>
                <input
                  type="text"
                  v-model="newfiche.tags"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="col-4">
                <label for="" class="form-label">User</label>
                <input
                  type="text"
                  v-model="newfiche.user"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="col-4"></div>
              <button type="submit" class="btn btn-primary" @click="addFiche">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import FicheComponentComponent from "@/components/ficheComponent.vue";
import axios from "axios";
@Component({
  components: {
    FicheComponentComponent,
  },
})
export default class FichesComponent extends Vue {
  addmodal = false;
  newfiche = {};
  listuser = [{}];
  listfiche = [{}];

  async addFiche() {
    try {
      let response = await axios({
        url: "/fiche/creation",
        method: "POST",
        data: this.newfiche,
      });

      console.log(response.data);
      this.addmodal = false;
    } catch (error) {
      console.log(error);
    }
  }
  openmodal() {
    this.addmodal = true;
    //console.log("ici");
    console.log(this.addmodal);
  }

  async findFiche() {
    try {
      let response = await axios({
        url: "/fiche",
        method: "GET",
        params: {},
      });

      console.log(response.data);
      this.listfiche.push(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async findUser() {
    try {
      let response = await axios({
        url: "/user",
        method: "GET",
        params: {},
      });

      console.log(response.data);
      this.listuser.push(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  created() {
    this.$root.$on("supp", this.removefiche);
    this.$root.$on("edit", this.editfiche);
  }
  editfiche(newfiche, fiche) {
    console.log(newfiche);
    console.log(fiche);
    console.log(this.listfiche.indexOf(fiche));

    this.listfiche.splice(this.listfiche.indexOf(fiche), 1, newfiche);
    console.log(this.listfiche);
  }

  removefiche(fiche) {
    console.log(fiche);
    console.log(this.listfiche.indexOf(fiche));

    this.listfiche.splice(this.listfiche.indexOf(fiche), 1);
    console.log(this.listfiche);
  }
  async mounted() {
    console.log("hello from app");
    await this.findFiche();
    console.log("ici");
  }
}
</script>

<style scoped>
.card {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
