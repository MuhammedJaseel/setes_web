import { api_init_delete, api_init_get, api_init_post } from "../module/a_apiinit";
import { api_init_put } from "../module/a_apiinit";
import { aHomeReload } from "./a_home";

export async function aAddAdmin(e, props) {
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
    document.getElementById("admin_add_form").reset();
    setState({ sPage: 0 });
    await aHomeReload(props);
  };
  var setError = (v) => setState({ sError: v });
  await api_init_post("admin", body, clearForm, setError);
  setState({ sLoading: false });
  return 0;
}

export async function aUpdateAdmin(e, props) {
  e.preventDefault();
  const setState = (v) => props.setState(v);
  var data = e.target;
  setState({ sLoading: true, sError: null });
  var body = {
    user_name: data.user_name.value,
    type: data.type.value,
  };
  var clearForm = async () => {
    document.getElementById("admin_add_form").reset();
    await aHomeReload(props);
  };
  var setError = (v) => setState({ sError: v });
  var id = props.state.admin._id;
  await api_init_put("admin?admin_id=" + id, body, clearForm, setError);
  setState({ sLoading: false });
  return 0;
}

export async function aBlockAdmin(props) {
  const setState = (v) => props.setState(v);
  setState({ sLoading: true, sError: null });
  var body = { status: "Blocked" };
  var clearForm = async () => {
    await aHomeReload(props);
    setState({ admin: null });
  };
  var setError = (v) => setState({ sError: v });
  var id = props.state.admin._id;
  await api_init_put("admin?admin_id=" + id, body, clearForm, setError);
  setState({ sLoading: false });
  return 0;
}

export async function aDeleteAdmin(props) {
  const setState = (v) => props.setState(v);
  setState({ sLoading: true, sError: null });
  var clearForm = async () => {
    await aHomeReload(props);
    setState({ admin: null });
  };
  var setError = (v) => setState({ sError: v });
  var id = props.state.admin._id;
  if (window.confirm("Confirm Delete"))
    await api_init_delete("admin?admin_id=" + id, clearForm, setError);
  setState({ sLoading: false });
  return 0;
}

export async function aGetHomeAdmins(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("admins", setdata, seterror);
  aSetHomeAdmins(props, error, data);
}

export function aSetHomeAdmins(props, error, data) {
  var dataT = [];
  for (let i = 0; i < data.length; i++)
    dataT.push([
      [data[i].user_name, data[i].type],
      [data[i].created, data[i].status],
    ]);
  props.setState({ admins: data, adminsT: dataT, error });
}
