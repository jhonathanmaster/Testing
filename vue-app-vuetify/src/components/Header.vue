<template>
    <v-app-bar
        app
        color="primary"
        dark
    >
        <v-toolbar-title>Vue</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
            <v-btn
                to="/home"
                color="primary"
                >Json</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn
                to="/homeApi"
                color="primary"
                >API</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn
                to="/about"
                color="primary"
                >About</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>
<script>
export default {
  name: 'myHeader',
  components: {
  },
  data: () => ({
  }),
};
</script>
<style scoped>
</style>
