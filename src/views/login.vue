<template>
    <v-container>
        <v-layout justify-center align-center>
            <!--<v-flex shrink>-->
            <form>
                <v-text-field
                        v-model="login.email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        required
                        @input="$v.login.email.$touch()"
                        @blur="$v.login.email.$touch()"
                ></v-text-field>
                <v-text-field
                        v-model="login.password"
                        :error-messages="passwordErrors"
                        label="Password"
                        :counter="$v.login.password.$params.maxLength.max"
                        required
                        @input="$v.login.password.$touch()"
                        @blur="$v.login.password.$touch()"
                ></v-text-field>
                <v-flex xs12 sm6>
                    <!--<v-text-field-->
                            <!--:append-icon="show4 ? 'visibility_off' : 'visibility'"-->
                            <!--:rules="[rules.required, rules.emailMatch]"-->
                            <!--:type="show4 ? 'text' : 'password'"-->
                            <!--name="input-10-2"-->
                            <!--label="Error"-->
                            <!--hint="At least 8 characters"-->
                            <!--value="Pa"-->
                            <!--error-->
                            <!--@click:append="show4 = !show4"-->
                    <!--&gt;</v-text-field>-->
                </v-flex>
                <v-checkbox
                        v-model="login.checkbox"
                        label="Remember Me."
                ></v-checkbox>

                <v-btn @click="submit">Login</v-btn>
                <v-btn @click="clear">clear</v-btn>
                <pre>{{$v}}</pre>
            </form>
            <!--</v-flex>-->
        </v-layout>
    </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "login",
  mixins: [validationMixin],

  validations: {
    login: {
      password: { required, maxLength: maxLength(16) },
      email: { required, email }
    }
  },

  data: () => ({
    login: {
      email: "admin@prod.io",
      password: "admin",
      checkbox: false
    }
  }),

  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.login.password.$dirty) return errors;
      !this.$v.login.password.maxLength &&
        errors.push("Password must be at most 16 characters long");
      !this.$v.login.password.required && errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.login.email.$dirty) return errors;
      !this.$v.login.email.email && errors.push("Must be valid e-mail");
      !this.$v.login.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        this.$router.push({ name: "home" });
      }
    },
    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.checkbox = false;
    }
  }
};
</script>

<style scoped>
</style>
