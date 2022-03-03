<template>
  <div class="productsSection section">
    <h1><strong>TAKE YOUR PICK!</strong></h1>
    <div class="top">
      <div class="container d-flex justify-content-start mb-3 mt-5 pt-4">
        <div class="d-flex w-25 ms-5">
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
        <div class="d-flex w-25 ms-5">
          <label for="" class="form-label">Sort by name</label>
          <select
            class="form-select"
            name=""
            id="sortName"
            onchange="sortName()"
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div class="d-flex w-25 ms-5">
          <label for="" class="form-label">Sort by price</label>
          <select
            class="form-select"
            name=""
            id="sortPrice"
            onchange="sortPrice()"
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>

      <button id="submit-btn" @click="toggleModal">Add Product</button>
    </div>

    <div class="products">
      <span
        v-show="loading"
        class="spinner-border spinner-border-sm"
        style="width: 100px; height: 100px"
      ></span>
      <div class="productsContainer">
        <div
          class="card"
          v-for="(product, i) in content.products"
          :key="product._id"
        >
          <img :src="product.img" class="card-img-top" draggable="false" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <h5 class="card-title">{{ product.category }}</h5>
            <p class="card-text">{{ product.price }}</p>
            <div class="d-flex mb-3">
              <input
                type="number"
                class="form-control"
                value="1"
                min="1"
                :id="`qty${i}`"
              />
              <button
                type="button"
                class="btn ms-3"
                @click="addToCart(product, i)"
              >
                <MDBIcon icon="shopping-cart"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-cart2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
                  </svg>
                </MDBIcon>
              </button>
            </div>
          </div>
          <div
            class="d-flex justify-content-end card-footer"
            v-if="
              currentUser.newUser._id.valueOf() == product.created_by.valueOf()
            "
          >
            <button
              type="button"
              class="btn w-20"
              id="edit"
              @click="changeUpdater(i)"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn w-20"
              id="delete"
              @click="deleteProduct(product._id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <Modal @clicked="toggleModal" v-if="showModal" />
    <UpdateModal
      :updateContent="updateContent"
      @clicked="toggleModal2"
      v-if="showModal2"
    />
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import UpdateModal from "../components/UpdateModal.vue";
import UserService from "../services/user.services";
export default {
  components: { Modal, UpdateModal },
  name: "Products",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      loading: false,
      content: "",
      showModal: false,
      showModal2: false,
      updateContent: "",
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal = !this.showModal;
    },
    changeUpdater(i) {
      this.updateContent = this.content.products[i];
      this.showModal2 = !this.showModal2;
    },
    deleteProduct(product) {
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
    },

    addToCart(product, i) {
      let qty = document.querySelector(`#qty${i}`).value;
      this.loading = true;
      this.$store.dispatch("cart/add", { _id: product._id, qty }).then(
        (response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
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
    },
  },
  mounted() {
    this.loading = true;
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
        this.loading = false;
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
.section {
  min-height: 100vh;
}
.card:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
h1 {
  color: white;
}
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.productsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.top div {
  margin: 0;
  padding: 0;
}

.products {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
}
.card {
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

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

#edit {
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
