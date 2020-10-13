<template>
  <div >
      <v-row>
        <v-col :cols="12"> <h2>My Indrustrial Experience</h2> </v-col>
      </v-row>
      <v-row>
        <v-col :cols="12">
          <v-timeline
              align-top
              :dense="$vuetify.breakpoint.smAndDown"
            >
              <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
              >
                <v-card
                  :color="item.color"
                  dark
                >
                  <v-card-title class="title">
                    {{ item.companyName }}
                  </v-card-title>
                  <v-card-text class="white text--primary">
                    <p>{{item.purpose}}</p>
                     
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
        </v-col>
      </v-row>
   
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          companyName : "NEM Construction",
          purpose : "Develop automation system for fuel , employees management also provide best web and mobile solutions"
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-star',
          companyName : "99x Technology",
          purpose : "Developing HelpDesk for tracking the system issues ( ongoin progect )"
        }
      ],
    }),
  }
</script>


