<template>
  <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>SIGN UP</h2>
        <div class="underline-title"></div>
      </div>
      <!-- <Form @submit="handleLogin" :validation-schema="schema">
        <div v-if="!successful">
        <label for="first name" style="padding-top:13px"> &nbsp;First Name</label>
        <input id="first name" class="form-content" type="first name"  v-model="firstName"  required />
        <div class="form-border"></div>

         <label for="last name" style="padding-top:13px"> &nbsp;Last Name</label>
        <input id="last name" class="form-content" type="last name"  v-model="lastName"  required />
        <div class="form-border"></div>

         <label for="username" style="padding-top:13px"> &nbsp;Username</label>
        <input id="username" class="form-content" type="username"  v-model="username"  required />
        <div class="form-border"></div>

          <label for="user-email" style="padding-top:13px"> &nbsp;Email </label>
        <input id="user-email" class="form-content" type="email" name="email" v-model="email"  required />
        
        <div class="form-border"></div>
        <label for="user-password" style="padding-top:22px">&nbsp;Password
          </label>
        <input id="user-password" class="form-content" type="password" name="password" v-model="password" required />
        <div class="form-border"></div>
       
        <input id="submit-btn" type="submit" name="submit" value="SIGN UP" />
        <br>
        <a href="#" id="signup">Want to edit your profile?</a>
        </div>
      </Form> -->
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username" style="padding-top:13px">Username</label>
            <Field name="username" type="text" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="email" style="padding-top:13px">Email</label>
            <Field name="email" type="email" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="telephone" style="padding-top:13px">Phone Number</label>
            <Field name="telephone" type="telephone" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="telephone" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password" style="padding-top:13px">Password</label>
            <Field name="password" type="password" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="password" class="error-feedback" />
          </div>
          <div class="form-group">
            <button id="submit-btn" class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
            </button>
          </div>
        </div>
      </Form>
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
     username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(40, "Must be maximum 40 characters!"),
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
  margin: 6rem auto 8.1rem auto;
  width: 330px;
  padding: 2rem;
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
  height: 3px;
  margin: -1.1rem auto 0 auto;
  width: 89px;
}
</style>