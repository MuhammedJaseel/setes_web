import {
  api_init_delete,
  api_init_get,
  api_init_post,
} from "../module/a_apiinit";
import { api_init_put } from "../module/a_apiinit";
import { aHomeReload } from "./a_home";

export async function aAddCtaker(e, props) {
  e.preventDefault();
  const setState = (v) => props.setState(v);
  var data = e.target;
  setState({ sLoading: true, sError: null });
  var body = {
    user_name: data.user_name.value,
    password: data.password.value,
    type: data.type.value,
  };
  var clearForm = async () => {
    document.getElementById("ctaker_add_form").reset();
    setState({ sPage: 0 });
    await aHomeReload(props);
  };
  var setError = (v) => setState({ sError: v });
  await api_init_post("ctaker", body, clearForm, setError);
  setState({ sLoading: false });
  return 0;
}

export async function aUpdateCtaker(e, props) {
  e.preventDefault();
  const setState = (v) => props.setState(v);
  var data = e.target;
  setState({ sLoading: true, sError: null });
  var body = {
    user_name: data.user_name.value,
    type: data.type.value,
  };
  var clearForm = async () => {
    document.getElementById("ctaker_add_form").reset();
    await aHomeReload(props);
  };
  var setError = (v) => setState({ sError: v });
  var id = props.state.ctaker._id;
  await api_init_put("ctaker?ctaker_id=" + id, body, clearForm, setError);
  setState({ sLoading: false });
  return 0;
}

export async function aBlockCtaker(props) {
  const setState = (v) => props.setState(v);
  setState({ sLoading: true, sError: null });
  var body = { status: "Blocked" };
  var clearForm = async () => {
    await aHomeReload(props);
    setState({ ctaker: null });
  };
  var setError = (v) => setState({ sError: v });
  var id = props.state.ctaker._id;
  await api_init_put("ctaker?ctaker_id=" + id, body, clearForm, setError);
  setState({ sLoading: false });
  return 0;
}

export async function aDeleteCtaker(props) {
  const setState = (v) => props.setState(v);
  setState({ sLoading: true, sError: null });
  var clearForm = async () => {
    await aHomeReload(props);
    setState({ ctaker: null });
  };
  var setError = (v) => setState({ sError: v });
  var id = props.state.ctaker._id;
  if (window.confirm("Confirm Delete"))
    await api_init_delete("ctaker?ctaker_id=" + id, clearForm, setError);
  setState({ sLoading: false });
  return 0;
}

export async function aGetHomeCtakers(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("ctakers", setdata, seterror);
  aSetHomeCtakers(props, error, data);
}

export function aSetHomeCtakers(props, error, data) {
  var dataT = [];
  for (let i = 0; i < data.length; i++)
    dataT.push([
      [data[i].user_name, data[i].type],
      [data[i].created, data[i].status],
    ]);
  props.setState({ ctakers: data, ctakersT: dataT, error });
}
