<template>
    <v-footer>
        <div>&copy; {{ new Date().getFullYear() }} Coldesoft SAS</div>
        <v-spacer></v-spacer>
        <v-btn
          fab
          dark
          absolute
          right
          color="indigo"
          class="floatButton"
          @click="newNote()">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
    </v-footer>
</template>

<script>

export default {
  name: 'myFooter',

  components: {
  },

  data: () => ({
  }),

  methods: {
    newNote() {
      this.$root.$emit('NEW_NOTE', true);
      // eslint-disable-next-line no-console
      console.log('New Note');
    },
  },
};
</script>

<style scoped>

</style>
