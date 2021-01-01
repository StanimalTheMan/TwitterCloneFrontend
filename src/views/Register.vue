<template>
  <v-form>
    <v-text-field> </v-text-field>
  </v-form>
</template>

<script>
import User from "../models/user";
export default {
  name: "Register",
  data() {
    return {
      user: new User("", "", ""),
      submitted: false,
      successful: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    // mounted vs created?
    if (this.loggedIn) {
      this.$router.push(`/${this.$store.state.auth.user.username}`);
    }
  },
  methods: {
    handleRegister() {
      this.submitted = true;
      this.$store.dispatch("auth/register", this.user).then(
        () => {
          this.message = "You've successfully signed up.";
          this.successful = true;
        },
        (error) => {
          console.log(error);
          this.successful = false;
        }
      );
    },
  },
};
</script>

<style scoped></style>
