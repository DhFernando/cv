<template>
  <div >
      <v-row>
          <v-col :cols="4" >
              <h2> <b> Some highlight projects</b> </h2>
                
          </v-col>
          <v-col :cols="8">
                <v-btn class="mt-1"   dark color="black" small href="https://github.com/DhFernando" >
                    <v-icon class="mr-3">mdi-github</v-icon> more Projects 
                </v-btn>
          </v-col>
      </v-row>

    <v-row>
        <v-col :cols="12">
            <v-list-item three-line v-for="project in projects" :key="project.index">
                <v-card max-width="600" class="pl-4 mb-1" >
                    <v-list-item-content>
                        <v-list-item-title> <b>{{ project.projectName }}</b> <span v-if="project.ongoing" > - ongoing </span></v-list-item-title>
                        <v-list-item-subtitle >
                        Technologies : ( {{ project.using }} ) 
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="mt-4 pl-3">
                            {{ project.description }} 
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="mt-4" >
                            <ul>
                                <li v-for="point in project.points" :key="point.index" > {{ point }} </li>
                            </ul>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="mt-4">
                            
                            <p  v-for="link in project.links"  :key="link.index"  >
                                    <span class="mr-2">
                                    <v-icon class="mr-2" >mdi-github</v-icon>: 
                                </span  > <a :href="link" > {{ link }} </a>  </p>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-card>
            </v-list-item>
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
          projects : [
              {
                  projectName : "HelpDesk Web Application ( 99x Technology project ) ",
                  using : "Asp .net core | React Js",
                  ongoing : true,
                  points:[
                      'Developing issue tracking system',
                      'Group project for university mini project'
                  ],
                  description : "This is the ",
                  links : [ 'privete Repository' ]
                },
                {
                  projectName : "E-Commerce Web Application",
                  using : "Laravel | Vue | MySQL |Bootstrap",
                  ongoing : true,
                  points:[
                      'Via this platform anyone can post there advertisement',
                      'Admins revies and approves those advertisement'
                  ],
                  description : "This is the ",
                  links:['https://github.com/DhFernando/e-commerce-laravel-vue']
                },
                {
                  projectName : "Real Time Chat Application",
                  using : "Vue Js | Firebase | Bootstrap",
                  ongoing : !true,
                  points:[],
                  description : "This is the ",
                  links:[' https://github.com/DhFernando/vue-fire-message-webApp ']
                },
                {
                  projectName : "Block Chain Development",
                  using : "Web 3 | Solidity | Ganache |SmartContract ",
                  ongoing : true,
                  points:[],
                  description : "This is the ",
                  links:[
                      'https://github.com/DhFernando/solidity-practice',
                      'https://github.com/DhFernando/blockChain-js',
                      'https://github.com/DhFernando/react_ethereum'
                      ]
                },
                {
                  projectName : "Web base Material Management System",
                  using : "CodeIgniter | jQuery | Bootstrap",
                  ongoing : !true,
                  points:['Manage projects users and retrieves reports'],
                  description : "This is the ",
                  links:[
                      'https://github.com/DhFernando/materialManagementSystem'
                      ]
                },
                {
                  projectName : "Puzzle Game",
                  using : "Vue Js | Bootstrap",
                  ongoing : !true,
                  points:[],
                  description : "This is the ",
                  links:[
                      'https://github.com/DhFernando/vue-puzzle-game'
                      ]
                }

          ]
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


