<template>
<div class= container>
   <div class="row justify-content-around">
    <div class="col-4">
  <img src="https://media1.popsugar-assets.com/files/thumbor/tFbxeIg5pAsBXQdWP02Zx9USuvE/0x65:3000x3065/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/27/932/n/1922564/8a543d4d5ea74d46927047.44013289_/i/How-Wear-Hoodie.jpg" alt="">
    </div>
    <div class="col-4">
       <button class="btn"  router-link :to="{ name: 'Products' }" :disabled="loading" >Buy Now!!</button>
    </div>
  </div>
</div>
  
</template>

<script>



export default {
  name: 'Home',
  components: {
    

  }
}
</script>
<style scoped>
img{
  height: 88vh;
  width:100vh
}

.btn{
  position: center;
}
</style>