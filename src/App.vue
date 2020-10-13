<template>
  <v-app  ><Header/>
       <v-row>
         <v-col :cols="3">
            <sideBar />
         </v-col>
         <v-col :cols="9">
            <v-container class="grey lighten-5">
                <router-view></router-view>
            </v-container>
         </v-col>
       </v-row>
  </v-app>
</template>

<script>
import Header from './components/Header';
import sideBar from './components/sideBar'

export default {
  name: 'App',

  components: {
    Header,
    sideBar
  },

  data: () => ({
    //
  }),
};
</script>
