<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-container>
      <v-row class="ma-4">
        <v-app style="background-color: grey lighten-1;" class="rounded">
          <v-row>
            <v-col cols="12" md="8" class="ligne">
              <v-container>
                <v-row>
                  <v-col cols="12" md="9" offset-md="1">
                    <v-text-field label="Search" prepend-inner-icon="search">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" align="center">
                    <v-badge color="error" overlap class="mt-5">
                      <template v-slot:badge>2</template>
                      <v-icon color="tertiary">
                        mdi-bell
                      </v-icon>
                    </v-badge>
                  </v-col>
                  <v-col cols="12" md="12">
                    <h1 class="headline mb-2 grey--text">Money Status</h1>
                    <template>
                      <div id="app">
                        <GChart
                          type="ColumnChart"
                          :data="chartData"
                          :options="chartOptions"
                        ></GChart>
                      </div>
                    </template>
                  </v-col>
                  <v-col cols="12" md="12">
                    <h1 class="headline mb-2 grey--text">Budgets</h1>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card>
<<<<<<< HEAD
                      <v-list>
                        <v-list-item>
                          <v-list-item-avatar color="blue">
                            <v-icon dark>fas fa-car</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>
                              Auto & Transport
                            </v-list-item-title>
                            <v-list-item-subtitle
                              >$ 700 left</v-list-item-subtitle
                            >
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title class="indigo--text">
                              $ 1,200
                            </v-list-item-title>
                            <v-list-item-subtitle
                              >$ 500 of 1,200</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="red">
                            <v-icon dark>fas fa-utensils</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>
                              Food & Drinks
                            </v-list-item-title>
                            <v-list-item-subtitle
                              >$ 2,100 left</v-list-item-subtitle
                            >
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title class="indigo--text">
                              $ 3,700
                            </v-list-item-title>
                            <v-list-item-subtitle
                              >$ 1500 of 1,200</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="orange">
                            <v-icon dark>fas fa-dumbbell</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>
                              Auto & Transport
                            </v-list-item-title>
                            <v-list-item-subtitle
                              >$ 350 left</v-list-item-subtitle
                            >
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title class="indigo--text">
                              $ 950
                            </v-list-item-title>
                            <v-list-item-subtitle
                              >$ 600 of 950</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="green">
                            <v-icon dark>fas fa-gamepad</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>
                              Game
                            </v-list-item-title>
                            <v-list-item-subtitle
                              >$ 150 left
                            </v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title class="indigo--text">
                              $ 350
                            </v-list-item-title>
                            <v-list-item-subtitle
                              >$ 100 of 350</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-card class="mx-auto" max-height="400">
                      <v-img
                        class="white--text aling-end"
                        height="150px"
                        src="card.jpg"
                      ></v-img>
                      <v-card-title class="pb-0">Cash loan</v-card-title>
                      <v-card-text class="text-primary">
                        <div>Up to 2 million dollars</div>
                        <div>Money the next date. Rate</div>
                      </v-card-text>
=======
                      <v-list-item>
                        <v-list-item-avatar color="blue">
                          <v-icon dark>fas fa-car</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>
                            Auto & Transport
                          </v-list-item-title>
                          <v-list-item-subtitle
                            >$ 700 left</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
>>>>>>> e909403e46609b0a8b8a8b594b5a781ebbd08c4e
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-col cols="12" md="4">
              <v-container>
                <v-row>
<<<<<<< HEAD
                  <v-col cols="12" md="12">
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="card2.jpg"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>AAA IdeaPro</v-list-item-title>
                        <v-list-item-subtitle
                          >aaaideapro@gmail.com</v-list-item-subtitle
                        >
                      </v-list-item-content>
                      <v-list-item-action
                        ><v-icon
                          >fas fa-sign-out-alt</v-icon
                        ></v-list-item-action
                      >
                    </v-list-item>
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-list-item>
                      <v-list-item-avatar color="grey">
                        <v-icon color="white">
                          fas fa-dollar-sign
                        </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-subtitle>Heisenberg</v-list-item-subtitle>
                        <v-list-item-title>$ 15,000</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon color="indigo" large>fab fa-cc-visa</v-icon>
                      </v-list-item-action>
                    </v-list-item>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-list-item>
                      <v-list-item-avatar color="grey">
                        <v-icon color="white">
                          fas fa-dollar-sign
                        </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-subtitle
                          >Grat Wall wallet</v-list-item-subtitle
                        >
                        <v-list-item-title>$ 6,500</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon color="black" large
                          >fab fa-cc-mastercard</v-icon
                        >
                      </v-list-item-action>
                    </v-list-item>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-list-item>
                      <v-list-item-avatar color="grey">
                        <v-icon color="white">
                          fas fa-dollar-sign
                        </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-subtitle
                          >Stone River wallet</v-list-item-subtitle
                        >
                        <v-list-item-title>$ 20,500</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon color="green" large>fab fa-cc-paypal</v-icon>
                      </v-list-item-action>
                    </v-list-item>
                  </v-col>
                  <v-divider></v-divider>
                  <v-col cols="12" md="12">
                    <v-list-item>
                      <v-list-item-avatar color="indigo">
                        <v-icon color="white">fas fa-plus</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Add credit card</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-col cols="12" md="12">
                      <v-card color="#952175" dark>
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                            <v-card-title class="headline">
                              Upgrade your plan to GOLD
                            </v-card-title>
                            <v-card-subtitle
                              >With Gold account plan you get access to premium
                              features</v-card-subtitle
                            >
                          </div>
                          <v-avatar class="ma-3" size="100" tile>
                            <v-img src="card3.jpg"></v-img>
                          </v-avatar>
                        </div>
                      </v-card>
                    </v-col>
                  </v-col>
=======
                  <v-col cols="12" md="12"></v-col>
>>>>>>> e909403e46609b0a8b8a8b594b5a781ebbd08c4e
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-app>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350],
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
      },
    }),
    components: {},
    computed: {
      theme() {
        return this.$vuetify.theme.dark ? 'dark' : 'light'
      },
    },
  }
</script>

<style scoped>
  .rounded {
    border-radius: 30px;
  }
  .ligne {
    border-right: 1px solid #95a5a6;
  }
</style>
