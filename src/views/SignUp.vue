<template>
  <div class="col-md-12">
    <div class="card card-container">
     <div id="card-title">
        <h2>SIGN UP</h2>
        <div class="underline-title"></div>
      </div>
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="first name">First name:</label>
            <input name="first name" type="text" v-model="firstName" placeholder="first name" />
            <!-- <ErrorMessage name="first name" class="error-feedback" /> -->
          </div>
          <div class="form-group">
            <label for="last name">Last name:</label>
            <input name="last name" type="text" v-model="lastName" placeholder="last name" />
            <!-- <ErrorMessage name="last name" class="error-feedback" /> -->
          </div>
          <div class="form-group">
            <label for="username">Username:</label>
            <input name="username" type="text" v-model="username" placeholder="username" />
            <!-- <ErrorMessage name="username" class="error-feedback" /> -->
          </div>
          <div class="form-group">
            <label for="email">E-mail address:</label>
            <input name="email" type="email" v-model="email" placeholder="email" />
            <!-- <ErrorMessage name="email" class="error-feedback" /> -->
          </div>
          <div class="form-group">
            <label for="telephone">Telephone:</label>
            <input name="telephone" type="text" v-model="telephone" placeholder="telephone" />
            <!-- <ErrorMessage name="telephone" class="error-feedback" /> -->
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input name="password" type="password" v-model="password" placeholder="password"/>
            <!-- <ErrorMessage name="password" class="error-feedback" /> -->
          </div>
          <div class="form-group">
            <label for="password">Repeat password:</label>
            <input name="password" type="password" v-model="password" placeholder="password" />
            <!-- <ErrorMessage name="password" class="error-feedback" /> -->
          </div>
          <div class="form-group">
            <button class="btn btn-danger " :disabled="loading" id="submit-btn">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
            </button>
          </div>
        </div>
      </Form>
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
     firstname: yup
        .string()
        .required("First name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
     lastname: yup
        .string()
        .required("Last name is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
     username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
        telephone: yup
        .string()
        .required("Telephone is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
body {
  background: -webkit-linear-gradient(bottom, #2dbd6e, #a6f77b);
  background-repeat: no-repeat;
}
label {
  font-family: "Raleway", sans-serif;
  font-size: 11pt;
}
#forgot-pass {
  color: #2dbd6e;
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 3px;
  text-align: right;
}
#card {
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: 410px;
  margin: 6rem auto 8.1rem auto;
  width: 329px;
}
#card-content {
  padding: 12px 44px;
}
#card-title {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
}
#signup {
  color: #2dbd6e;
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 16px;
  text-align: center;
}
#submit-btn {
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
#submit-btn:hover {
  box-shadow: 0px 1px 18px #24c64f;
}
.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}
.form-border {
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 1px;
  width: 100%;
}
.form-content {
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
}
.underline-title {
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 2px;
  margin: -1.1rem auto 0 auto;
  width: 89px;
}
</style>