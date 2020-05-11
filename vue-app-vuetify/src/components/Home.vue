<template>
    <v-container>
        <v-list-item v-for="note in notes" :key="note.id" two-line>
            <v-list-item-content>
                <v-list-item-title>{{note.name}}</v-list-item-title>
                <v-list-item-subtitle>{{note.description}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn icon>
                    <v-icon @click="getNote(note)" color="grey lighten-1">mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon @click="deleteNote(note.id)" color="grey lighten-1">mdi-delete</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>
        <v-dialog v-model="dialog">
            <v-card>
                <v-card-title>
                    <span class="headline">New Note</span>
                </v-card-title>
                <v-form v-model="valid">
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm12 md12>
                                    <v-text-field
                                        v-model="newTitle"
                                        value=""
                                        label="Title*"
                                        :rules="nameRules"
                                        required />
                                </v-flex>
                                <v-flex xs12 sm12 md12>
                                    <v-textarea
                                        v-model="newContent"
                                        value=""
                                        label="Descripcion*"
                                        :rules="descRules"
                                        required />
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <small>* indicates required files</small>
                    </v-card-text>
                    <v-card-actions>
                            <v-spacer/>
                            <v-btn color="blue darken-1" @click="closeModal()">Close</v-btn>
                            <v-btn color="blue darken-1" :disabled="!valid" @click="saveNote()">
                                {{(isEditing ? 'Edit':'Save') }}
                            </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import uuidv5 from 'uuid/v4';
import { DummyData } from '../data/dummy-data';

export default {
  name: 'Home',

  components: {
  },

  data: () => ({
    notes: [],
    dialog: false,
    valid: false,
    newTitle: '',
    newContent: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length >= 4 || 'Name must be at last 4 character',
    ],
    descRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length >= 10 || 'Description must be at last 10 character',
    ],
    isEditing: false,
    idToEdit: -1,
  }),

  mounted() {
    this.notes = DummyData;
    this.$root.$on('NEW_NOTE', (action) => { if (action) { this.newNote(); } });
  },

  methods: {
    newNote() {
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
      this.reset();
    },
    saveNote() {
      if (!this.isEditing) {
        const noteToSave = {
          id: uuidv5(),
          name: this.newTitle,
          description: this.newContent,
        };

        this.notes.push(noteToSave);
      } else {
        const originalNote = this.notes.findIndex((item) => (item.id === this.idToEdit));
        const noteToEdit = {
          id: this.idToEdit,
          name: this.newTitle,
          description: this.newContent,
        };
        this.notes[originalNote] = noteToEdit;
      }
      this.closeModal();
    },

    deleteNote(id) {
      const noteToDelete = this.notes.findIndex((item) => (item.id === id));
      this.notes.splice(noteToDelete, 1);
    },

    getNote(note) {
      this.idToEdit = note.id;
      this.newTitle = note.name;
      this.newContent = note.description;
      this.isEditing = true;
      this.dialog = true;
    },

    reset() {
      this.isEditing = false;
      this.newTitle = '';
      this.newContent = '';
      this.idToEdit = -1;
    },
  },
};
</script>

<style scoped>

</style>
