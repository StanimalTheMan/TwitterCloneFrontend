// Data service
import axios from "axios";
import authHeader from "./auth-header";

class UserService {
  getProfile(username) {
    return axios.get(`http://localhost:5000/${username}`, {
      headers: authHeader(),
    });
  }

  getTweet(username, tweetID) {
    return axios.get(`http://localhost:5000/${username}/status/${tweetID}`, {
      headers: authHeader(),
    });
  }

  postTweet(username) {
    return axios.post(`http://localhost:5000/${username}/tweets`, {
      headers: authHeader,
    });
  }

  updateTweet(username, tweetID) {
    return axios.put(`http://localhost:5000/${username}/tweets/${tweetID}`, {
      headers: authHeader,
    });
  }

  deleteTweet(username, tweetID) {
    return axios.delete(`http://localhost:5000/${username}/tweets/${tweetID}`, {
      headers: authHeader,
    });
  }
}

export default UserService;
