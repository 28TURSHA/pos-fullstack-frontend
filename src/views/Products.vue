<template>
<div class="productsSection">
  <div class="container d-flex justify-content-end mb-3 mt-5 pt-4">
    <div class="d-flex w-25 ms-3">
      <label for="" class="form-label">Sort by category</label>
      <select
        class="form-select"
        name=""
        id="sortCategory"
        onchange="sortCategory()"
      >
        <option value="All">All</option>
        <option value="Hoodies">Hoodies</option>
        <option value="Crewnecks">Crewnecks</option>
        <option value="Cropped hoodies">Cropped hoodies</option>
      </select>
    </div>
    <div class="d-flex w-25 ms-3">
      <label for="" class="form-label">Sort name</label>
      <select class="form-select" name="" id="sortName" onchange="sortName()">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
    <div class="d-flex w-25 ms-3">
      <label for="" class="form-label">Sort price</label>
      <select class="form-select" name="" id="sortPrice" onchange="sortPrice()">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  </div>

  <button id="submit-btn" @click="toggleModal">
    Add Product
  </button>

  <!-- Button trigger modal -->
  <!-- <button
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#addProductModal"
  >
    Add a product
  </button> -->

  <!-- Modal -->
  <!-- <div
    class="modal fade"
    id="addProductModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="addTitle" class="form-label">Title</label>
            <input
              class="form-control"
              type="text"
              name="addTitle"
              id="addTitle"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Category</label>
            <select class="form-select" name="addCategory" id="addCategory">
              <option value="Stiletto">Stiletto</option>
              <option value="Platform">Platform</option>
              <option value="Block Heel">Block Heel</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="addPrice" class="form-label">Price</label>
            <input
              class="form-control"
              type="text"
              name="addPrice"
              id="addPrice"
            />
          </div>
          <div class="mb-3">
            <label for="addImg" class="form-label">Image URL</label>
            <input class="form-control" type="text" name="addImg" id="addImg" />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            onclick="createProduct()"
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  </div> -->

  <div class="products">
       <!-- <div v-for="product of products" :key="product.id" class="card__container"> -->
      <div class="card" v-for="product in content.products" :key="product._id">
        <img :src="product.img" class="card-img-top" draggable="false">
        <div class="card-body">
          <h5 class="card-title">{{product.title}}</h5>
          <h5 class="card-title">{{product.category}}</h5>
          <p class="card-text">{{product.price}}</p>
          <div class="d-flex mb-3">
            <input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
          <button
            type="button"
            class="btn ms-3"
            onclick="addToCart(${position})"
          >
            <MDBIcon icon="shopping-cart"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-cart2"
                viewBox="0 0 16 16">
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                />
              </svg>
            </MDBIcon>
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-end card-footer" v-if="currentUser.newUser._id.valueOf() == product.created_by.valueOf()">
          <button type="button" class="btn w-20" id="edit">Edit</button>
          <button type="button" class="btn w-20" id="delete" @click="deleteProduct(product._id)">Delete</button>
        </div>
      </div>
    </div>

    <Modal @clicked="toggleModal" v-if="showModal"/>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
import UserService from "../services/user.services";
export default {
  components: { Modal },
  name: "Products",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      content: "",
      showModal: false
    };
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    deleteProduct(product){
            this.loading = true;
            this.$store.dispatch("product/delete", product).then(
              () => {
                location.reload();
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
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
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
.products {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
}
.card{
    width: 100%;
    max-width: 400px;
    max-height:700px;
    padding: auto;
    text-align: center;
    box-shadow: 25px 25px 50px #2d302f;
}

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

#edit{
  background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #24c64f;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
#edit:hover {
  box-shadow: 0px 1px 18px #24c64f;
}

#delete {
  background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #24c64f;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
#delete:hover {
  box-shadow: 0px 1px 18px #24c64f;
}
</style>
