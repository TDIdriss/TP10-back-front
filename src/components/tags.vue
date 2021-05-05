<template>
  <div class="tag">
    <h1>tagComponent</h1>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div>
            <tag-component-component
              v-for="item in listtag"
              :key="item"
              :tag="item"
            />
          </div>
          <br />
          <button @click="openmodal">Ajouter un tag</button>

          <form v-if="addmodal">
            <div class="row">
              <div class="col">
                <label for="" class="form-label">Nom</label>
                <input
                  type="text"
                  v-model="newtag.libelle"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="col"></div>
              <button @click="addtag" type="submit" class="btn btn-primary">
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
import TagComponentComponent from "@/components/tagComponent.vue";
import axios from "axios";
@Component({
  components: {
    TagComponentComponent
  },
})
export default class tagComponent extends Vue {
  addmodal = false;
  newtag = {};
  listtag = [{}];

  async addtag() {
    try {
      let response = await axios({
        url: "/tag/creation",
        method: "POST",
        data: this.newtag,
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

  async findtag() {
    try {
      let response = await axios({
        url: "/tag",
        method: "GET",
        params: {},
      });

      console.log(response.data);
      this.listtag.push(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  created() {
    this.$root.$on("supp", this.removetag);
    this.$root.$on("edit", this.edittag);
  }
  edittag(newtag, tag) {
    console.log(newtag);
    console.log(tag);
    console.log(this.listtag.indexOf(tag));

    this.listtag.splice(this.listtag.indexOf(tag), 1, newtag);
    console.log(this.listtag);
  }

  removetag(tag) {
    console.log(tag);
    console.log(this.listtag.indexOf(tag));

    this.listtag.splice(this.listtag.indexOf(tag), 1);
    console.log(this.listtag);
  }
  async mounted() {
    console.log("hello from app");
    await this.findtag();
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