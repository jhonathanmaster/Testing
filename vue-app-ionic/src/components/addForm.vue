<template>
    <form>
        <ion-item>
            <ion-label position="floating">Name*</ion-label>
            <ion-input
                ref="nameInput"
                :value="newTask.name"
                @input="updateModel()"
                required
            />
            <ion-label position="floating">Description*</ion-label>
            <ion-textarea
                ref="descInput"
                :value="newTask.description"
                @input="updateModel()"
                required
            />
            <p v-if="errors.length" class="alert-danger">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{error}}</li>
                </ul>
            </p>
        </ion-item>
        <ion-item>
            <ion-button color="primary" :disabled="!valid" @click="save()">Save</ion-button>
            <ion-button color="secondary" @click="cancel()">Cancel</ion-button>
        </ion-item>
    </form>
</template>
<script>
import uuidv5 from 'uuid/v4';
import { DummyData } from '../data/dummy-data';
export default {
    name: 'addForm',
    data: function() {
        return {
            newTask: {
                name: '',
                description: '',
            },
            valid: false,
            errors: [],
        };
    },
    mounted() {
        this.notes = DummyData;
        this.$root.$on('NEW_NOTE', (action) => { if (action) { this.newNote(); } });
    },
    methods: {
       async reset() {
           this.newTask.name = '';
           this.newTask.description = '';
           await this.$ionic.modalController.dismiss({action: 'dismiss'});
       },
        async cancel() {
            await this.$ionic.modalController.dismiss({action: 'dismiss'});
        },
        checkForm() {
            this.errors= [];
            this.valid = true;
            if(this.newTask.name.trim().length <= 4) {
                this.errors.push('Name must be at least 4 characters');
                this.valid = false;
            }
            if(this.newTask.description.trim().length < 10) {
                this.errors.push('Description must be at least 10 characters');
                this.valid = false;
            }
        },
        updateModel() {
            this.newTask.name = this.$refs.nameInput.value;
            this.newTask.description = this.$refs.descInput.value;
            this.checkForm();
        },
        save() {
            console.log('Save information');
            const noteToSave = {
                id: uuidv5(),
                name: this.newTask.name,
                description: this.newTask.description,
            };
            this.notes.push(noteToSave);
            console.log('data', noteToSave);
            this.reset();
        }
    },
}
</script>
<style>
.alert-danger {
    color: red;
}
</style>
