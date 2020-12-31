import axios from "axios";
import authHeader from "../services/auth-header";

export const tweets = {
  namespaced: true,
  state: {
    tweets: [],
  },
  actions: {
    getTweets({ commit }, username) {
      console.log(authHeader());
      return axios
        .get(`http://localhost:5000/${username}`, { headers: authHeader() })
        .then((data) => {
          commit("getTweets", data.data.tweets);
        });
    },
  },
  mutations: {
    getTweets(state, tweets) {
      state.tweets = tweets;
    },
  },
};
