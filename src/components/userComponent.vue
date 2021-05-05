<template>
  <div class="user-component">
    <h1>user-componentComponent</h1>

    <ul class="list-group list-group-horizontal">
      <li class="list-group-item">nom : {{ user.nom }}</li>
      <li class="list-group-item">prenom : {{ user.prenom }}</li>
      <li class="list-group-item"><button @click="update">Modifier</button></li>
    </ul>
    <div v-if="editmodal"><edit-user-component :edituser="user" /></div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import FicheComponent from "@/components/ficheComponent.vue";
import EditUserComponent from "@/components/userComponent.vue";
interface SampleObject {
  nom: string;
  prenom: string;

  ficheU: Array<FicheComponent>;
}

@Component({
  components: { EditUserComponent },
})
export default class UserComponentComponent extends Vue {
  @Prop({ type: Object as PropType<SampleObject> }) private user!: SampleObject;
  editmodal = false;
  mounted() {
    console.log("hello from app");
  }
}
</script>

