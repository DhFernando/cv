<template>
  <div >
        <v-row>
            <v-col :cols="12"> <h3> Frameworks </h3> </v-col>
        </v-row>
        <v-row>
            <v-col :cols="6">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Asp .net core</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-progress-linear
                                    v-model="aspdotnetcore"
                                    height="15"
                                    color="blue-grey" dark
                                    >
                                    <strong>{{ Math.ceil(aspdotnetcore) }}%</strong>
                            </v-progress-linear>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Laravel</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-progress-linear
                                    v-model="laravel"
                                    height="15"
                                    color="blue-grey" dark
                                    >
                                    <strong>{{ Math.ceil(laravel) }}%</strong>
                            </v-progress-linear>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Codeigniter</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-progress-linear
                                    v-model="codeigniter"
                                    height="15"
                                    color="blue-grey" dark
                                    >
                                    <strong>{{ Math.ceil(codeigniter) }}%</strong>
                            </v-progress-linear>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Firebase</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-progress-linear
                                    v-model="firebase"
                                    height="15"
                                    color="blue-grey" dark
                                    >
                                    <strong>{{ Math.ceil(firebase) }}%</strong>
                            </v-progress-linear>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Node Js</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-progress-linear
                                    v-model="node"
                                    height="15"
                                    color="blue-grey" dark
                                    >
                                    <strong>{{ Math.ceil(node) }}%</strong>
                            </v-progress-linear>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-col>
            <v-col :cols="6">
                
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Vue</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-progress-linear
                                    v-model="vue"
                                    height="15"
                                    color="blue-grey" dark
                                    >
                                    <strong>{{ Math.ceil(vue) }}%</strong>
                            </v-progress-linear>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>React</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-progress-linear
                                    v-model="react"
                                    height="15"
                                    color="blue-grey" dark
                                    >
                                    <strong>{{ Math.ceil(react) }}%</strong>
                            </v-progress-linear>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-col>
        </v-row>
  </div>
</template>

<script>
export default {
  name: 'SkillsPage',
  props: [],
  data() {
      return {
          aspdotnetcore: 85,
          laravel:80,
          codeigniter:80,
          firebase:75,
          node:40,
          vue:90,
          react:80
      }
  },

}
</script>


