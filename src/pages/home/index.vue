<template>
  <div >
        <v-row class="mt-4">
            <v-col :cols="6" >
                <v-container>
                    <v-row class="m-4">
                        <v-col :cols="12" >
                            <v-row>
                                <h1>I am Dilshan Fernando</h1> <br>
                            
                            </v-row>
                            <v-row>
                                <p>Software Engeneer Intern</p>
                            </v-row>
                            <v-row>
                                <p>I am an enthusiastic, self-motivated, reliable, responsible and hardworking person. And I am a mature team worker and adaptable to all
                                    challenging situations.</p>
                            </v-row>
                            <v-row> Fav @ </v-row>
                            <v-row>
                                <v-col :cols="6">
                                    <v-img max-height="100"
                                        lazy-src="https://picsum.photos/id/11/10/6"
                                        src="https://res.cloudinary.com/dj8a0phpt/image/upload/v1602608339/ak9fsru79lyeikuvysn2.jpg"
                                        ></v-img>
                                        <span class="mt-2">Blockchain Development</span>
                                </v-col>
                                <v-col :cols="6">
                                    <v-img max-height="100"
                                    lazy-src="https://picsum.photos/id/11/10/6"
                                    src="https://res.cloudinary.com/dj8a0phpt/image/upload/v1602608559/kspkwhsmjisp7c8cjfg1.jpg"
                                    ></v-img>
                                    <span class="mt-2">Full Stack Web Development</span>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-btn class="mt-5"   dark color="black" x-large to="/projects" >
                                    <v-icon class="mr-3">mdi-console-network</v-icon> My Projects 
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col :cols="6" >
                <v-row class="mt-5">
                    <v-col :cols="12">
                        <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        src="https://res.cloudinary.com/dj8a0phpt/image/upload/v1602487776/wgtrz9mwf7dt7uxcoueo.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        
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
      
  },

  computed: {
      
  },


}
</script>


