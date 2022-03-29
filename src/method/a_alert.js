import { api_init_post } from "../module/a_apiinit";

export async function aPostAlert(e, i) {
  e.preventDefault();
  const body = {
    title: e.target.title.value,
    topic: e.target.desc.value,
    type: i === 1 ? "users" : "ctakers",
  };
  var seterror = (v) => alert(v);
  await api_init_post("alert", body, () => null, seterror);
}
