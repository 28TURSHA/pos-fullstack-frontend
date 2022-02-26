<template>
   <div class="products">
       <!-- <div v-for="product of products" :key="product.id" class="card__container"> -->
       <div class="card">
        <img src = "https://i.postimg.cc/8PrRLmpJ/2face.jpg" class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title">product.title</h5>
          <h5 class="card-title">product.category</h5>
          <p class="card-text">product.price</p>
          <div class="d-flex mb-3">
            <input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
            <button type="button" class="btn ms-3" onclick="addToCart(${position})">
                <MDBIcon icon="shopping-cart"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16" >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
          />
          </svg >
          </MDBIcon>
        </button>
      </div>
     </div>
          <div class="d-flex justify-content-end card-footer">
            <button type="button" class="btn btn-danger w-20">Edit</button>
            <button type="button" class="btn btn-danger w-20"> Delete</button>
          </div>
      </div>
     </div>
   <!-- </div> -->
  
</template>
<style>
.products {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
}
.card{
    max-height:700px;
    padding: auto;
    text-align: center;
    box-shadow: 25px 25px 50px #2d302f;
}
</style>