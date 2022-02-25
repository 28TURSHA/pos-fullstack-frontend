
<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarNav class="d-flex flex-row">
           <MDBNavbarItem router-link :to="{name:'Home'}" active> Home </MDBNavbarItem>
           <MDBNavbarItem router-link :to="{name:'Login'}" active> Login </MDBNavbarItem>
            <MDBNavbarItem router-link :to="{name:'SignUp'}" active> SignUp </MDBNavbarItem>
             <MDBNavbarItem router-link :to="{name:'Profile'}" active> Profile </MDBNavbarItem>
             <MDBNavbarItem router-link :to="{name:'Products'}" active> Products </MDBNavbarItem>
             <MDBNavbarItem router-link :to="{name:'Cart'}" active> Cart </MDBNavbarItem>


      <!-- Icons -->
      <MDBNavbarItem :to="{name:'Cart'}" class="me-3 me-lg-0">
        <MDBIcon icon="shopping-cart"></MDBIcon>
      </MDBNavbarItem>
      
      <!-- Icon dropdown -->
      <MDBNavbarItem class="me-3 me-lg-0 dropdown">
        <MDBDropdown v-model="dropdown3">
          <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown3 = !dropdown3" >
            <MDBIcon icon="user" />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem router-link :to="{name:'Login'}">Login</MDBDropdownItem>
            <MDBDropdownItem router-link :to="{name:'SignUp'}">Sign Up</MDBDropdownItem>
            <MDBDropdownItem router-link :to="{name:'Profile'}">Profile</MDBDropdownItem>
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
<script>

</script>