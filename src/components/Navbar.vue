
<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarNav class="d-flex flex-row">
      <!-- Icons -->
      <MDBNavbarItem to="#" class="me-3 me-lg-0">
        <MDBIcon icon="shopping-cart"></MDBIcon>
      </MDBNavbarItem>
      <!-- <MDBNavbarItem href="#" class="me-3 me-lg-0">
        <MDBIcon iconStyle="fab" icon="twitter"></MDBIcon>
      </MDBNavbarItem> -->
      <!-- Icon dropdown -->
      <MDBNavbarItem class="me-3 me-lg-0 dropdown">
        <MDBDropdown v-model="dropdown3">
          <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown3 = !dropdown3" >
            <MDBIcon icon="user" />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#">Login</MDBDropdownItem>
            <MDBDropdownItem href="#">Sign Up</MDBDropdownItem>
            <MDBDropdownItem href="#">Profile</MDBDropdownItem>
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
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
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
      MDBDropdownItem
    },
    setup() {
      const dropdown3 = ref(false);
      return {
        dropdown3
      }
    }
  };
</script>