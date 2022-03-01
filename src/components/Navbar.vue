<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarNav class="d-flex flex-row">
      <div class="startNav">
        <MDBNavbarItem router-link :to="{ name: 'Home' }" active>
        Home
      </MDBNavbarItem>
      <MDBNavbarItem router-link :to="{ name: 'Login' }" v-if="!currentUser">
        Login
      </MDBNavbarItem>
      <MDBNavbarItem router-link :to="{ name: 'SignUp' }" v-if="!currentUser">
        SignUp
      </MDBNavbarItem>
      <MDBNavbarItem router-link :to="{ name: 'Products' }" v-if="currentUser">
        Products
      </MDBNavbarItem>
      </div>

      <!-- Icons -->
      <div class="endNav">
        <MDBNavbarItem :to="{ name: 'Cart' }" class="me-3 me-lg-0" v-if="currentUser">
        <MDBIcon icon="shopping-cart"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-cart2"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
            /></svg
        ></MDBIcon>
      </MDBNavbarItem>

      <!-- Icon dropdown -->
      <MDBNavbarItem class="me-3 me-lg-0 dropdown" v-if="currentUser">
        <MDBDropdown v-model="dropdown3">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown3 = !dropdown3"
          >
            <MDBIcon icon="user"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                />
              </svg>
            </MDBIcon>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <!-- <MDBDropdownItem router-link :to="{ name: 'Login' }" v-if="!currentUser"
              >Login</MDBDropdownItem
            >
            <MDBDropdownItem router-link :to="{ name: 'SignUp' }" v-if="!currentUser"
              >Sign Up</MDBDropdownItem
            > -->
            <MDBDropdownItem router-link :to="{ name: 'Profile' }" v-if="currentUser"
              >Profile</MDBDropdownItem
            >
            <MDBDropdownItem router-link :to="{ name: 'Home' }" @click.prevent="logOut" v-if="currentUser"
              >Logout</MDBDropdownItem
            >
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarItem>
      </div>
    </MDBNavbarNav>
  </MDBNavbar>
</template>

<script>
import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  components: {
    MDBIcon,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  },
  setup() {
    const dropdown3 = ref(false);
    return {
      dropdown3,
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
<style>
a {
  cursor: pointer;
}

.navbar .container-fluid ul{
  width: 100%;
  justify-content: space-between;
}

.startNav, .endNav {
  display: flex;
  flex-direction: row;
}
</style>
