<template>
  <div class="products section">
    <span v-show="loading" class="spinner-border spinner-border-sm" style="width: 100px; height: 100px; color: white;"></span>
    <div class="productsContainer">
    <div class="card mb-3" style="max-width: 540px;" v-for="cartItem in cart" :key="cartItem._id">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="cartItem.img" class="cartImg" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ cartItem.title }}</h5>
            <p class="card-text">{{ cartItem.description }}</p>
            <div class="d-flex mb-3 align-items-center">
            <h6 class="mx-2">QTY: </h6>
            <input type="number" class="form-control" min="1" id="addToCart${position}" :value="cartItem.qty" />
          </div>
            <p class="card-text">TOTAL: R{{ cartItem.price*cartItem.qty }}</p>
          <div class="d-flex justify-content-end card-footer" >
            <button type="button" class="btn w-20" id="delete" @click="removeItem(cartItem._id)">Remove Item</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import CartService from '../services/cart.services'
export default {
  name: "Cart",
  data() {
    return {
      cart: '',
      loading: false
    }
  },
  methods: {
    removeItem(product){
      this.$store.dispatch("cart/deleteOne", product).then(
        (response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          location.reload()
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    }
  },
  mounted() {
    this.loading = true;
    CartService.getCart().then(
      (response) => {
        this.cart = response.data;
        this.loading = false;
      },
      (error) => {
        this.cart =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
<style>

.section{
  min-height: 100vh;
}

.products {
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}


</style>
