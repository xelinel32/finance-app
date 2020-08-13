<template>
  <nav>
    <v-navigation-drawer v-model="drawer" dark app class="blue accent-2">
      <v-row class="flex-column">
        <v-col class="mt-10 mb-10" align="center">
          <v-avatar>
            <v-icon large>fas fa-store</v-icon>
          </v-avatar>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-row class="ma-2">
        <template>
          <v-carousel
            cycle
            dark
            height="230"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet color="white" height="80%" align="center" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="grey--text">
                    <h4>Traffic fines</h4>
                    <p class="ma-2">{{ slide }}</p>
                    <v-btn outlined color="indigo">Read more</v-btn>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </template>
      </v-row>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      links: [
        {
          icon: 'fas fa-home',
          text: 'Home',
          route: '/',
        },
        {
          icon: 'far fa-credit-card',
          text: 'Balance',
          route: '/balance',
        },
        {
          icon: 'fas fa-chart-line',
          text: 'Investments',
          route: '/investments',
        },
        {
          icon: 'fas fa-balance-scale-right',
          text: 'Insurance',
          route: '/insurance',
        },
        {
          icon: 'fas fa-briefcase',
          text: 'Buisness',
          route: '/buisness',
        },
      ],
      slides: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      ],
    }),
  }
</script>

<style scoped>
  .border {
    border-left: 4px solid #2c3e50;
  }
</style>
