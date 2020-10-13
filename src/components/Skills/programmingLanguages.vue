<template>
  <div  >
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>Java Script</v-list-item-title>
                <v-list-item-subtitle>
                    <v-progress-linear
                            v-model="javascript"
                            height="15"
                            color="blue-grey"
                            dark
                            >
                            <strong>{{ Math.ceil(javascript) }}%</strong>
                    </v-progress-linear>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>PHP</v-list-item-title>
                <v-list-item-subtitle>
                    <v-progress-linear
                            v-model="php"
                            height="15"
                            color="blue-grey" dark
                            >
                            <strong>{{ Math.ceil(php) }}%</strong>
                    </v-progress-linear>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>C#</v-list-item-title>
                <v-list-item-subtitle>
                    <v-progress-linear
                            v-model="csharp"
                            height="15"
                            color="blue-grey" dark
                            >
                            <strong>{{ Math.ceil(csharp) }}%</strong>
                    </v-progress-linear>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>Solidity</v-list-item-title>
                <v-list-item-subtitle>
                    <v-progress-linear
                            v-model="solidity"
                            height="15"
                            color="blue-grey" dark
                            >
                            <strong>{{ Math.ceil(solidity) }}%</strong>
                    </v-progress-linear>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>Dart</v-list-item-title>
                <v-list-item-subtitle>
                    <v-progress-linear
                            v-model="dart"
                            height="15"
                            color="blue-grey" dark
                            >
                            <strong>{{ Math.ceil(dart) }}%</strong>
                    </v-progress-linear>
                </v-list-item-subtitle>
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


