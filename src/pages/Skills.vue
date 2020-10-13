<template>
  <div >
      <v-row mb-5 pb-5>
          <v-col :cols="4">
              <v-row>
                  <v-col :cols="12"> <h3> Programming Languages Skills </h3> </v-col>
              </v-row>
              <v-row class="pl-5 pr-5">
                  <v-col :cols="12">
                        <ProgrammingLanguagesSkills />
                  </v-col>
              </v-row>
          </v-col>
          <v-divider vertical ></v-divider>
          <v-col :cols="7">
                <Frameworks />
          </v-col>
          
      </v-row>
      <v-row class="mt-5 pt-5">
          <v-col :cols="3">
                <v-row>
                  <v-col :cols="12">  <h3>Databases</h3>  </v-col>
                </v-row>
                <v-row class="pl-5 pr-5">
                  <v-col :cols="12"> <Databases />  </v-col>
                </v-row>
          </v-col>
          <v-divider vertical ></v-divider>
          <v-col :cols="4">
                <v-row>
                  <v-col :cols="12">  <h3>Technologies</h3>  </v-col>
                </v-row>
                <v-row class="pl-5 pr-5">
                  <v-col :cols="12"> <Technologies/>  </v-col>
                </v-row>
          </v-col>
          <v-divider vertical ></v-divider>
          <v-col :cols="4">
                <v-row>
                  <v-col :cols="12">  <h3>UI Designing Libraries</h3>  </v-col>
                </v-row>
                <v-row class="pl-5 pr-5">
                  <v-col :cols="12"> <UiDesigningLibraries />  </v-col>
                </v-row>
          </v-col>
          
      </v-row>
  </div>
</template>

<script>
import ProgrammingLanguagesSkills from '../components/Skills/programmingLanguages'
import Frameworks from '../components/Skills/Frameworks'
import Databases from '../components/Skills/Databases'
import Technologies from '../components/Skills/Technologies'
import UiDesigningLibraries from '../components/Skills/UiDesigningLibraries'
export default {
  name: 'SkillsPage',
  props: [],
  components: {
    ProgrammingLanguagesSkills, 
    Frameworks,
    Databases,
    Technologies,
    UiDesigningLibraries
  }

}
</script>


