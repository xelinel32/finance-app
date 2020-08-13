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
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-col cols="12" md="4">
              <v-container>
                <v-row>
                  <v-col cols="12" md="12"></v-col>
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
