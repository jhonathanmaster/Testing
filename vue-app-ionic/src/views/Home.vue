<template>
  <div class="ion-page">
    <myheader/>
    <ion-content class="ion-padding">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <ion-list v-for="note in notes" :key="note.id">
       <ion-item-sliding>
        <ion-item>
          <ion-label>{{note.name}}</ion-label>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option @click="edit()">Edit</ion-item-option>
          <ion-item-option color="warning" @click="toDelete()">Delete</ion-item-option>
        </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="openDialog()">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <myfootr/>
  </div>
</template>

<script>
import myheader from '../components/Header.vue';
import myfootr from '../components/Footer.vue';
import addForm from '../components/addForm.vue';

import { DummyData } from "../data/dummy-data.js";

export default {
  name: 'Home',
  data: function(){
    return {
      notes: DummyData,
    };
  },
  components: {
    myheader,
    myfootr,
  },
  methods: {
    async openDialog() {
      let modalProps = { component: addForm };

      this.modal = await this.$ionic.modalController.create(modalProps);
      this.modal.present();

      // const { data } = await this.modal.onWillDismiss();
      // console.log('data', data);
    },
    toDelete() {
      return;
    },
  },
}
</script>
