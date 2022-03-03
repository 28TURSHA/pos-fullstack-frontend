<template>
  <div class="container section">
    <header class="jumbotron">
      <h1><strong>PROFILE</strong></h1>
      <h3>
        <strong>{{ currentUser.newUser.fullname }}</strong> 
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{ currentUser.accessToken.substring(0, 20) }} ...
      {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}
    </p>
    <p>
      <strong>Id:</strong>
      {{ currentUser.newUser._id }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.newUser.email }}
    </p>
  </div>
</template>
<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
<style>
.section{
  min-height: 100vh;
}
</style>
