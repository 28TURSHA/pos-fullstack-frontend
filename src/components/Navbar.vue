<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarNav class="d-flex flex-row">
      <MDBNavbarItem router-link :to="{ name: 'Home' }" active>
        Home
      </MDBNavbarItem>
      <MDBNavbarItem router-link :to="{ name: 'Login' }" active>
        Login
      </MDBNavbarItem>
      <MDBNavbarItem router-link :to="{ name: 'SignUp' }" active>
        SignUp
      </MDBNavbarItem>
      <MDBNavbarItem router-link :to="{ name: 'Profile' }" active>
        Profile
      </MDBNavbarItem>
      <MDBNavbarItem router-link :to="{ name: 'Products' }" active>
        Products
      </MDBNavbarItem>
      <MDBNavbarItem router-link :to="{ name: 'Cart' }" active>
        Cart
      </MDBNavbarItem>

      <!-- Icons -->
      <MDBNavbarItem :to="{ name: 'Cart' }" class="me-3 me-lg-0">
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
            /></svg
        ></MDBIcon>
      </MDBNavbarItem>

      <!-- Icon dropdown -->
      <MDBNavbarItem class="me-3 me-lg-0 dropdown">
        <MDBDropdown v-model="dropdown3">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown3 = !dropdown3"
          >
            <MDBIcon icon="user"> </MDBIcon>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem router-link :to="{ name: 'Login' }"
              >Login</MDBDropdownItem
            >
            <MDBDropdownItem router-link :to="{ name: 'SignUp' }"
              >Sign Up</MDBDropdownItem
            >
            <MDBDropdownItem router-link :to="{ name: 'Profile' }"
              >Profile</MDBDropdownItem
            >
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarItem>
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
};
</script>
<script></script>
