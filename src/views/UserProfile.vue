<template>
  <div>
    <v-list v-for="tweet in tweets" :key="tweet.id">
      <tweet :tweet="tweet" />
    </v-list>
  </div>
</template>

<script>
import Tweet from "../components/Tweet";
export default {
  components: {
    Tweet,
  },
  computed: {
    tweets() {
      return this.$store.state.tweets.tweets;
    },
  },
  created() {
    const username = JSON.parse(localStorage.getItem("username"));
    this.$store.dispatch("tweets/getTweets", username);
  },
};
</script>

<style scoped></style>
