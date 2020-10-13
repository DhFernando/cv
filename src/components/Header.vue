<template>
    <div>
          <v-app-bar  height="150"  prominent color="teal accent-3" dark >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Dilshan Fernando</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn href="https://www.linkedin.com/in/dilshan-fernando-46b198173/" class="ma-2 mr-5" outlined small  color="white" >
                <v-icon class="mr-3">mdi-linkedin</v-icon> Linkedin
            </v-btn>
            <v-btn href="https://github.com/DhFernando" class="ma-2 mr-5" outlined small  color="white" >
                <v-icon class="mr-3">mdi-github</v-icon> Github
            </v-btn>
            <v-btn class="ma-2 mr-5" color="red lighten-2"
          @click="dialog = true" >
                <v-icon class="mr-3">mdi-card-account-mail-outline</v-icon> Contacts me
            </v-btn>

             
           
          </v-app-bar>

          <!-- Dialog -->
          <div class="text-center">
            <v-dialog v-model="dialog" width="570" >
              
              <v-card>
                <v-card-title class="headline grey lighten-2">
                  Contact Information
                </v-card-title>

                <v-card-text>
                
                    <v-row>
                      <v-col :cols="12">
                        <v-row justify="space-around">
                          <v-avatar  size="100">
                            <img src="https://res.cloudinary.com/dj8a0phpt/image/upload/v1602152015/dydlg20zhzijzbaeadtq.jpg" alt="John" >
                          </v-avatar>
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col :cols="6" >
                          <v-list-item two-line>
                            <v-list-item-content>
                              <v-list-item-subtitle><v-icon>mdi-account</v-icon> Name</v-list-item-subtitle>
                              <v-list-item-title> W.W.D.H Fernando</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                      </v-col>
      
                      <v-col :cols="6" >
                         <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-subtitle><v-icon>mdi-account</v-icon> Date of Birth </v-list-item-subtitle>
                            <v-list-item-title> 1996.09.09</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>

                      <v-col :cols="7" >
                         <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-subtitle><v-icon>mdi-school</v-icon> Degree </v-list-item-subtitle>
                            <v-list-item-title>
                               Computing and Information System <br/>
                               Faculty of Applied Sciences, <br>
                               University of Sabaragamuwa
                                </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>

                      <v-col :cols="5" >
                         <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-subtitle><v-icon>mdi-school</v-icon> Attended School</v-list-item-subtitle>
                            <v-list-item-title> St Peters College <br />  Colombo 04</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>

                      <v-row class="pt-4" justify="space-around">
                          <p >
                            <v-icon size="25" class="mr-5"> mdi-phone-in-talk </v-icon> 0713797147
                          </p>
                          <p >
                            <v-icon size="25" class="mr-5"> mdi-email </v-icon> hdilshan.fernando@gmail.com
                          </p>
                      </v-row>

                    <v-divider></v-divider>

                    <v-row class="pt-4" justify="space-around">
                       
                        <v-btn href="https://github.com/DhFernando" fab> <v-icon size="60"> mdi-github </v-icon> </v-btn>
                        <v-btn href="https://www.linkedin.com/in/dilshan-fernando-46b198173/" fab> <v-icon size="60" color="indigo"> mdi-linkedin </v-icon> </v-btn>
                        <v-btn href="https://www.facebook.com/dilshan.fernando.585112/" fab> <v-icon size="60" color="primary"> mdi-facebook </v-icon> </v-btn>
                       
                    </v-row>

                </v-card-text>
              </v-card>
            </v-dialog>
          </div>

    </div>
</template>

<script>
  export default {
    data: () => ({ 
      dialog: false,
    }),
    
  }
</script>