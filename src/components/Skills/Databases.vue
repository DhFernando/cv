<template>
  <div >
        <v-list-item  >
            <v-list-item-content>
                <v-list-item-title>MySQL / MS SQL</v-list-item-title> 
            </v-list-item-content>
        </v-list-item>

        <v-list-item  >
            <v-list-item-content>
                <v-list-item-title>Firebase Firestore</v-list-item-title> 
            </v-list-item-content>
        </v-list-item>

        <v-list-item >
            <v-list-item-content>
                <v-list-item-title>Mongo DB </v-list-item-title>
            </v-list-item-content>
        </v-list-item> 
  </div>
</template>

<script>
export default {
  name: 'SkillsPage',
  props: [],
  data() {
      return {
          javascript: 85,
          php:80,
          csharp:75,
          solidity:60,
          dart:40
      }
  },

}
</script>


