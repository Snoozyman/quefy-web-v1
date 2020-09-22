<template>
  <div id="app">
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item v-for="nav in navItems" v-bind:key="nav.name" tag="router-link"  :to="{ path: nav.path }">
                {{ nav.name }}
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: navBarRight.path }">
                    <a class="button is-primary" >
                        <strong>
                          {{ navBarRight.name }}
                          </strong>
                    </a>
            </b-navbar-item>
            <b-navbar-item v-if="loggedIn" @click="logout">
              <a class="button">
                <strong>
                  Logout
                </strong>
              </a>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'Room', path: '/room' },
        { name: 'About', path: '/about' },
        { name: 'Admin', path: '/admin' },
      ],
      navBarRight: {
        name: 'Join',
        path: '/join'
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/LOGOUT_DEBUG')
      this.$router.push('/')
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
