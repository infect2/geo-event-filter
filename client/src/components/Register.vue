<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyon" dark>
        <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
              <h1> Register </h1>
              <input
                type="email"
                name="email"
                v-model="email"
                placeholder="email" />
              <br>
              <input
                type="password"
                name="password"
                v-model="password"
                placeholder="password" />
              <br>
              <div class="error" v-html="error" />
              <br>
              <v-btn class="cyon"
                @click="register"> Register </v-btn>
            </div>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('email has changed')
    }
  },
  mounted () {
    console.log('Register Vue is mounted')
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

.error {
  color: red
}
</style>