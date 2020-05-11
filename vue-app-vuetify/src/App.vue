<template>
  <v-app>
    <myHeader/>
    <v-content>
      <!-- <Home/> -->
      <router-view></router-view>
    </v-content>
    <myFooter/>
  </v-app>
</template>

<script>
import myHeader from './components/Header.vue';
// import Home from './components/Home.vue';
// import HomeApi from './components/HomeApi.vue';
import myFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    myHeader,
    // Home,
    // HomeApi,
    myFooter,
  },
};
</script>
<style scope>
</style>
