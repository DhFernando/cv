<template>
  <div >
    <v-container>
        <v-list nav dense >
              <v-list-item-group   active-class="deep-purple--text text--accent-4" >
                <v-list-item @click="goto('')">
                  <v-list-item-icon>
                    <v-icon>mdi-account-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title> About Me </v-list-item-title>
                </v-list-item>

                <v-list-item @click="goto('projects')">
                  <v-list-item-icon>
                    <v-icon>mdi-console-network</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>  My Projects  </v-list-item-title>
                </v-list-item>

                <v-list-item @click="goto('skills')">
                  <v-list-item-icon>
                    <v-icon>mdi-desktop-classic</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>  Skills  </v-list-item-title>
                </v-list-item>

                <v-list-item @click="goto('experience')">
                  <v-list-item-icon>
                    <v-icon>mdi-office-building</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>  Indrustrial Experience </v-list-item-title>
                </v-list-item>
  
              </v-list-item-group>

              
            </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: [],
  data() {
      return {
          msg: null
      }
  },

  created:function(){
      this.msg = "hey"
    },

  methods:{
       goto :function(page){ 
         this.$router.push({path:`/${page}`})
       }
  },

  computed: {
      
  },


}
</script>


