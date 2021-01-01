// Authentication service
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/";

class AuthService {
  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }

  login(user) {
    return axios
      .post(API_URL + "login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.access_token && response.data.username) {
          localStorage.setItem(
            "jwt",
            JSON.stringify(response.data.access_token)
          );
          localStorage.setItem(
            "username",
            JSON.stringify(response.data.username)
          );
        }

        return response;
      });
  }

  logout() {
    return axios
      .post(API_URL + "logout", { headers: authHeader() })
      .then(() => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("username");
      });
  }
}

export default new AuthService();
