import { api_init_post } from "../module/a_apiinit";

export async function adminLogin(e, props) {
  e.preventDefault();
  props.setState({ loading: true });
  var body = {
    user_name: e.target.id.value,
    password: e.target.pass.value,
  };
  const setdata = (data) => {
    sessionStorage.setItem("userName", data.user_name);
    sessionStorage.setItem("userId", data._id);
    sessionStorage.setItem("authKey", data.key);
    window.location = "/admin";
  };
  const seterror = (e) => props.setState({ error: e });
  await api_init_post("login", body, setdata, seterror);
  props.setState({ loading: false });
}

export async function adminLogOut() {
  if (window.confirm("Are You sure you want to logout?")) {
    sessionStorage.setItem("userName", "");
    sessionStorage.setItem("userId", "");
    sessionStorage.setItem("authKey", "");
    window.location = "/admin/login";
  }
}
