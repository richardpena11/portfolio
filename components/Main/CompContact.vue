<template>
  <div class="contact">
    <form class="form" @submit.prevent="sendEmail" id="">
      <v-text-field
        class="input_name"
        v-model="name"
        :error-messages="nameErrors"
        :counter="20"
        :label="info.form.name.placeholder"
        outlined
        required
        single-line
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
        background-color="#202833"
        dark
        name="user_name"
      ></v-text-field>

      <v-text-field
        class="input_email"
        v-model="email"
        :error-messages="emailErrors"
        :label="info.form.email.placeholder"
        outlined
        required
        single-line
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
        background-color="#202833"
        dark
        name="user_email"
      ></v-text-field>

      <v-text-field
        class="input_subject"
        v-model="subject"
        :error-messages="subjectErrors"
        :counter="80"
        :label="info.form.subject.placeholder"
        outlined
        required
        single-line
        @input="$v.subject.$touch()"
        @blur="$v.subject.$touch()"
        background-color="#202833"
        dark
        name="subject"
      ></v-text-field>

      <v-textarea
        class="input_message"
        v-model="message"
        :error-messages="messageErrors"
        :label="info.form.message.placeholder"
        outlined
        required
        single-line
        @input="$v.message.$touch()"
        @blur="$v.message.$touch()"
        background-color="#202833"
        dark
        name="message"
      ></v-textarea>

      <v-btn class="input_btn">
        <input type="submit" :value="this.info.form.submit" />
      </v-btn>

      <v-snackbar v-model="snackbar" :timeout="3000" outlined color="#66fcf1" dark>
        {{ alert === "success" ? this.info.form.alert.success : this.info.form.alert.error }}

        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </form>

    <div class="social_container">
      <div class="social_title">{{ this.info.social.divider }}</div>
      <comp-social :info="infoGeneral.social" where="contact"></comp-social>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import CompSocial from "../General/CompSocial.vue";
import emailjs from "emailjs-com";

export default {
  components: { CompSocial },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    subject: { required, maxLength: maxLength(80) },
    message: { required }
  },

  props: ["info", "infoGeneral"],

  data: () => ({
    name: "",
    email: "",
    subject: "",
    message: "",
    alert: "",
    snackbar: false
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push(this.info.form.name.tooLong);
      !this.$v.name.required && errors.push(this.info.form.name.required);
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push(this.info.form.email.valid);
      !this.$v.email.required && errors.push(this.info.form.email.required);
      return errors;
    },
    subjectErrors() {
      const errors = [];
      if (!this.$v.subject.$dirty) return errors;
      !this.$v.subject.maxLength && errors.push(this.info.form.subject.tooLong);
      !this.$v.subject.required && errors.push(this.info.form.subject.required);
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.required && errors.push(this.info.form.message.required);
      return errors;
    }
  },

  methods: {
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
    sendEmail(e) {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        emailjs
          .sendForm(
            "service_portfolio",
            "portfolio_template",
            e.target,
            "user_5iEbYepf1b2zL2m4z4JJi"
          )
          .then(
            result => {
              console.log("SUCCESS!", result.status, result.text);
              this.showAlert("success");
              this.clear();
            },
            error => {
              console.log("FAILED...", error);
              this.showAlert("error");
            }
          );
      }
    },

    async showAlert(value) {
      this.alert = value;
      this.snackbar = true;
      setTimeout(() => {
        this.alert = "";
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  padding-bottom: 200px;
  .form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 20px;
    padding-right: 40px;
    width: calc(100% - 100px);
    .input_name,
    .input_email {
      width: 45%;
    }
    .input_name {
      margin-right: 40px;
    }
    .input_subject,
    .input_message {
      width: 100%;
    }
    .input_btn {
      transition: background-color 300ms;
      &:hover {
        background: #66fcf1;
      }
    }
    .alert {
      margin-top: 20px;
      width: 100%;
      span {
        padding: 0 20px;
      }
    }
  }
  .social_container {
    border-left: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .social_title {
      margin: 5px 0;
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      color: #66fcf1;
    }
    .social {
      width: 100px;
      height: 100%;
      max-height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
}

@media screen and (max-width: 607px) {
  .contact {
    .form {
      .input_name,
      .input_email {
        width: 100%;
      }
      .input_name {
        margin-right: 0px;
      }
    }
    .social_container {
      border-left: 1px solid white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .social_title {
        margin: 5px 0;
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        color: #66fcf1;
      }
      .social {
        width: 100px;
        height: 100%;
        max-height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .contact {
    flex-direction: column;
    padding-bottom: 100px;
    .form {
      width: 100%;
      margin-bottom: 30px;
    }
    .social_container {
      border-left: 0px solid white;
      .social {
        width: 100%;
        height: initial;
        max-height: initial;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
}
</style>
