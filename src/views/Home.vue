<template>
<!-- <div class= container>
   <div class="row justify-content-around">
    <div class="col-4">
  <img src="https://media1.popsugar-assets.com/files/thumbor/tFbxeIg5pAsBXQdWP02Zx9USuvE/0x65:3000x3065/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/27/932/n/1922564/8a543d4d5ea74d46927047.44013289_/i/How-Wear-Hoodie.jpg" alt="">
    </div>
    <div class="col-4">
       <button class="btn"  router-link :to="{ name: 'Products' }" :disabled="loading" >Buy Now!!</button>
    </div>
  </div>
</div> -->
  
  <div class="container">
    <div class="row">
      <div class="name col">
  
        <h1  style="font-size:80px;color:#2c3e50">THE HOODIE STORE</h1>
        <h6 style="font-size:20px;color:white;">Get your hoodie today!</h6>

     
      </div>
      <div class="col">
        <img src="https://media1.popsugar-assets.com/files/thumbor/tFbxeIg5pAsBXQdWP02Zx9USuvE/0x65:3000x3065/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/27/932/n/1922564/8a543d4d5ea74d46927047.44013289_/i/How-Wear-Hoodie.jpg" alt="">
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

.container {

  padding-top: 150px;
  margin-bottom:50px;
 
}

.name{
  padding-top:135px;
 
}
img{
  height:663px;
  object-fit: cover;
  
  
}
h6{
  font-weight: 700;
}
h1{
  font-weight:700;
}

@media screen and (max-width: 494px){
.name{
  padding-top:10px;
  padding-left:10px;
}
img{
  height:450px;
  object-fit: cover;
  padding-top: 30px;
 
}
.container {
   height:90vh;
}
.row {
  overflow-x: hidden;
}
}

</style>
