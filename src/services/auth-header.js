export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("jwt"));
  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
}
