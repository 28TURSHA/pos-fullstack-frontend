<template>
  <div class="bruh">
      <Form @submit="createProduct" :validation-schema="schema">
        <div class="form-group">
          <label for="title" style="padding-top:13px">title</label>
          <Field name="title" type="text" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="title" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="category" style="padding-top:13px">category</label>
          <Field name="category" type="category" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="category" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="description" style="padding-top:13px">description</label>
          <Field name="description" type="description" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="description" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="img" style="padding-top:13px">img</label>
          <Field name="img" type="img" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="img" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="price" style="padding-top:13px">price</label>
          <Field name="price" type="price" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group">
          <button id="submit-btn" class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Add Product</span>
          </button>
        </div>
        <router-link :to="{ path: '/signup' }" id="signup">Don't have account yet?</router-link>
        <!-- <a :to="{ name: 'SignUp' }" id="signup">Don't have account yet?</a> -->
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
     components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
          title: yup.string().required("title is required!"),
          category: yup.string().required("category is required!"),
          description: yup.string().required("description is required!"),
          img: yup.string().required("img is required!"),
          price: yup.string().required("price is required!")
        });
        return {
          loading: false,
          message: "",
          schema,
        };
    },
    methods: {
        createProduct(product){
            this.loading = true;
            this.$store.dispatch("product/create", product).then(
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
}
</script>

<style>

</style>