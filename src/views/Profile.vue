<template>
  <div class="profile section">
      <div class="profileContainer">
          <div class="card-body">
               <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
            <h1><strong>PROFILE</strong></h1>
            <h3><strong>{{ currentUser.newUser.fullname }}</strong> </h3>
            <p>
              <strong>Token:</strong>
              {{ currentUser.accessToken.substring(0, 20) }} ...
              {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}</p>
            <p>
              <strong>Id:</strong>
             {{ currentUser.newUser._id }}</p>
            
            <p>
              <strong>Email:</strong>
               {{ currentUser.newUser.email }}
            </p>
          </div>
      </div>
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
<style scoped>
.section {
  min-height: 100vh;
}
.card-body:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
h1 {
  color: white;
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profileContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.products {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
}
.card-body{
  width: 100%;
  max-width: 400px;
  max-height: 700px;
  margin-left: 20px;
  margin-right: 23px;
  margin-top: 30px;
  padding: auto;
  text-align: center;
  box-shadow: 25px 25px 50px #2d302f;
}

.profile img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

#profile-img{
height: 170px;
width:160px
}


</style>
