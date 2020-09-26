<template>
  <div id="join">
      <section v-if="!loggedIn">
        <div class="columns is-centered">
            <div class="column is-6">
                <section>
                <h1 class="title">Join</h1>
                <b-field>
                    <b-input v-model="user.username" placeholder="Your nickname" size="is-medium"></b-input>
                    <b-input v-model="user.inviteCode" placeholder="Invite code" size="is-medium"></b-input>
                    <b-button
                        @click.prevent="handleLogin()"
                        type="is-primary"
                        size="is-medium"> Join room</b-button> 
                </b-field>

                <p>Click here to join existing room by invite code</p>
                </section>
            </div>
            <div class="column is-6">
                <section>
                <h1 class="title">Create</h1>
                <b-field>
                    <b-button type="is-primary" size="is-medium"> Create room</b-button>
                </b-field>
                
                <p>Create room and queue songs. First you need to authenticate with Spotify-account</p>
                </section>
            </div>
        </div>
      </section>
      <section v-else>
          <h1 class="title"></h1>
      </section>
  </div>
</template>

<script>
import User from '../models/user.model'

export default {
    data() {
        return {
            user: new User('',''),
            loading: false,
            message: null
        }
    },
    methods: {
        handleLogin() {
        this.loading = true;
        console.log('ASDSAD')
        if (this.user.username && this.user.inviteCode) {
          this.$store.dispatch('auth/LOGIN_DEBUG', this.user).then(
            () => {
              this.$router.push('/room');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.loggedIn;
        }
    }
}
</script>

<style>
#join {
    margin: 20pt;
}
p {
    text-align: justify;
}
.column {
    border: 2pt solid rgb(214, 58, 219);
    border-style: ridge;
    margin: 5pt;
}

</style>