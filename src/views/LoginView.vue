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
                Sign In
              </v-toolbar-title>

              <v-spacer></v-spacer>

            </v-app-bar>
          </v-img>
        </v-card>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="code"
            label="Enter code"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            color="primary"
            @click="signin"
          >
            Sign In
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            color="secondary"
            @click="goToRegister"
          >
            Dont have login? Click here!
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'LoginView',
  props: [],
  components: {
  },
  data () {
    return {
      code: ''
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    ...mapActions({
    }),
    ...mapMutations({
    }),

    signin () {
    },
    goToRegister () {
      this.$router.push({ name: 'Register' })
    }
  }
}
</script>

<style>

</style>
