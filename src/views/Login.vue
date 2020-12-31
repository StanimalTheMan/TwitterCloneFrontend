<template>
  <v-form>
    <v-text-field
      v-model="user.username"
      label="Username"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.password"
      label="Password"
      required
    ></v-text-field>
    <v-btn @click="handleLogin">Login</v-btn>
  </v-form>
</template>
<script>
import User from "../models/user";
export default {
  name: "Login",
  data() {
    return {
      user: new User("", "", ""),
      // loading: false,
      // message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  // created() {
  //   if (this.loggedIn) {
  //     this.$router.push(`/${this.$store.state.auth.user.username}`);
  //   }
  // },
  methods: {
    handleLogin() {
      this.$store.dispatch("auth/login", this.user).then(
        () => {
          this.$router.push(`/${this.$store.state.auth.user.username}`);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>
<style scoped></style>
