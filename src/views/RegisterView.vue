<template>
  <v-form>
    <v-container>
      <v-row>
        <v-card width="100%">
          <v-img
            height="200px"
            src="@/assets/pic1.svg"
          >
            <v-app-bar
              flat
              color="rgba(0, 0, 0, 0)"
            >
              <v-btn
                color="primary"
                icon
              >
                <v-icon>arrow_back</v-icon>
              </v-btn>

              <v-toolbar-title class="text-h6 primary--text pl-0">
                Register
              </v-toolbar-title>

              <v-spacer></v-spacer>

            </v-app-bar>
          </v-img>
        </v-card>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="firstname"
            label="First name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            label="email"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="">
            <v-card-subtitle>
              <div class="d-flex justify-space-between">
                Adults

                <v-btn
                  class="mx-2"
                  fab
                  small
                  color="primary"
                  @click="addAdult"
                  >
                  <v-icon >
                    add
                  </v-icon>
                </v-btn>
              </div>
            </v-card-subtitle>
            <v-list
              subheader
              two-line
            >
              <v-list-item
                v-for="(a, i) in adults"
                :key="i"
                class="pt-0"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <div class="d-flex justify-space-between">
                      {{i + 1}}
                      <v-radio-group
                        v-model="a.foodPref"
                        label="Food preference"
                        col
                      >
                        <v-radio
                          label="Vegeterian"
                          value="V"
                        ></v-radio>
                        <v-radio
                          label="Non vegetian"
                          value="N"
                        ></v-radio>
                      </v-radio-group>
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon fab
                    @click="removeAdult(i)"
                  >
                    <v-icon color="grey lighten-1">remove</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <!-- Children -->
      <v-row>
        <v-col cols="12">
          <v-card class="">
            <v-card-subtitle>
              <div class="d-flex justify-space-between">
                Children
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="primary"
                  @click="addChild"
                  >
                  <v-icon dark>
                    add
                  </v-icon>
                </v-btn>
              </div>
            </v-card-subtitle>
            <v-list
              subheader
              three-line
            >
              <v-list-item
                v-for="(c, i) in children"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ i+1 }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-radio-group
                      v-model="c.foodPref"
                      label="Food preference"
                      col
                    >
                      <v-radio
                        label="Vegeterian"
                        value="V"
                      ></v-radio>
                      <v-radio
                        label="Non vegetian"
                        value="N"
                      ></v-radio>
                    </v-radio-group>
                  </v-list-item-subtitle>
                  <v-slider
                    class="pa-5"
                    v-model="c.age"
                    ticks="always"
                    :tick-labels="ageLabels"
                    thumb-label="always"
                    :max="3"
                    step="1"
                    tick-size="4"
                  >
                </v-slider>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon
                    @click="removeAdult(i)"
                  >
                    <v-icon color="grey lighten-1">remove</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row  >
        <v-col class="d-flex justify-space-between">
          <v-btn>
            Cancel
          </v-btn>
          <v-btn color="primary">
            Ok
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'RegisterView',
  props: [],
  components: {
  },
  data () {
    return {
      firstname: '',
      lastName: '',
      email: '',
      password: '',
      adults: [{
        foodPref: 'V'
      }],
      children: [],
      ageLabels: [
        '<4', '4-8', '8-12', '>12'
      ]
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters({
      myGetter: 'mygetter'
    })
  },
  methods: {
    ...mapActions({
    }),
    ...mapMutations({
    }),
    addAdult () {
      this.adults.push({
        dietery: 'V'
      })
    },
    removeAdult (idx) {
      this.adults.splice(idx, 1)
    },
    addChild () {
      this.children.push({
        dietery: 'V',
        ageGroup: 1
      })
    },
    removeChild (idx) {
      this.children.splice(idx, 1)
    },
    getAgeLabel (value) {
      switch (value) {
        case 1: {
          return '< 4'
        }
        case 2: {
          return '4-8'
        }
        case 3: {
          return '8-12'
        }
        default:
          return '> 12'
      }
    }
  }
}
</script>

<style>

</style>
