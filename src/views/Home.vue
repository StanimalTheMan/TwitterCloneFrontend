<template>
  <div>
    <v-btn @click="handleLogout">Logout</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style scoped></style>
