<template>
  <div id="room">
      <h1 class="title">Welcome to your {{ currentUser.nickname }} room!</h1>
      <span class="subtitle">Here you will find</span>
      <p>
        
      </p>
  </div>
</template>

<script>

export default {
  name: 'room',
  computed: {
      currentUser() {
        return this.$store.state.auth.user
      },
  }
}
</script>

<style>
#room{
    border: 2pt;
    border-color: brown;
}


</style>