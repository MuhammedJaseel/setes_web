import { api_init_post } from "../module/a_apiinit";

export async function aPostAlert(e, i, p) {
  e.preventDefault();
  p.setState({ sLoading: true });
  const body = {
    title: e.target.title.value,
    topic: e.target.desc.value,
    type: i === 1 ? "users" : "ctakers",
  };
  var seterror = (v) => alert(v);
  var setDone = (v) => document.getElementById("alert_add_form").reset();
  await api_init_post("alert", body, setDone, seterror);
  p.setState({ sLoading: false });
}
