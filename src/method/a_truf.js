import {
  api_init_delete,
  api_init_get,
  api_init_post,
  api_init_put,
} from "../module/a_apiinit";
import { aGetHome } from "./a_home";

export async function aPostTruf(e, props) {
  e.preventDefault();
  const setState = (v) => props.setState(v);
  var data = e.target;
  if (props.state.zones === null) {
    setState({ trufErrorAdd: "Chose District and Zone" });
    return 0;
  }
  setState({ trufLoadingAdd: true, trufErrorAdd: null });
  const formData = new FormData();
  if (data.img1.files[0] != null)
    formData.append("img1", data.img1.files[0], data.img1.files[0].name);
  if (data.img2.files[0] != null)
    formData.append("img2", data.img2.files[0], data.img2.files[0].name);
  if (data.img3.files[0] != null)
    formData.append("img3", data.img3.files[0], data.img3.files[0].name);
  else setState({ trufErrorAdd: "Select Image" });
  var body = {
    name: data.name.value,
    id: data.id.value,
    location: data.location.value,
    district: props.state.assets.locations[0].zone[data.district.value].title,
    zone: props.state.assets.locations[0].zone[data.district.value].zone[
      data.zone.value
    ].title,
    location: data.location.value,
    lat: data.lat.value,
    lon: data.lon.value,
    desc: data.desc.value,
  };
  formData.append("body", JSON.stringify(body));
  var clearForm = async () => {
    document.getElementById("truf_add_form").reset();
    setState({ trufPage: 0 });
    await aGetHome(props);
  };
  var setError = (v) => setState({ trufErrorAdd: v });
  await api_init_post("truf", formData, clearForm, setError);
  setState({ trufLoadingAdd: false });
  return 0;
}

export async function aPutTruf(e, props) {
  const truf_id = props.state.trufEdit._id;
  const setState = (v) => props.setState(v);
  e.preventDefault();
  var data = e.target;
  // if (props.state.zones === null) {
  //   setState({ trufErrorAdd: "Chose District and Zone" });
  //   return 0;
  // }
  setState({ trufLoadingAdd: true, trufErrorAdd: null });
  const formData = new FormData();
  if (data.img1.files[0] != null)
    formData.append("img1", data.img1.files[0], data.img1.files[0].name);
  if (data.img2.files[0] != null)
    formData.append("img2", data.img2.files[0], data.img2.files[0].name);
  if (data.img3.files[0] != null)
    formData.append("img3", data.img3.files[0], data.img3.files[0].name);
  var body = {
    name: data.name.value,
    location: data.location.value,
    // district: props.state.assets.locations[0].zone[data.district.value].title,
    // zone: props.state.assets.locations[0].zone[data.district.value].zone[
    //   data.zone.value
    // ].title,
    lat: data.lat.value,
    lon: data.lon.value,
    desc: data.desc.value,
    slots: props.state.trufEdit.slots,
  };
  formData.append("body", JSON.stringify(body));
  var clearForm = () => {
    alert("Succesfully Updated");
  };
  var setError = (v) => setState({ trufErrorAdd: v });
  await api_init_put("truf?truf_id=" + truf_id, formData, clearForm, setError);
  setState({ trufLoadingAdd: false, trufPage: 0 });
  return 0;
}

export async function aDeleteTruf(props) {
  const truf_id = props.state.trufEdit._id;
  const setState = (v) => props.setState(v);
  setState({ trufLoadingAdd: true, trufErrorAdd: null });
  var clearForm = async () => {
    await aGetHome(props);
    setState({ trufEdit: null });
  };
  var setError = (v) => setState({ trufErrorAdd: v });
  if (window.confirm("Confirm Delete"))
    await api_init_delete("truf?truf_id=" + truf_id, clearForm, setError);
  setState({ trufLoadingAdd: false, trufPage: 0 });
}

export async function aAddTrufSlot(props) {
  var slot = document.getElementById("truf_slot").value;
  const trufEdit = props.state.trufEdit;
  if (trufEdit.slots == null) trufEdit.slots = [];
  trufEdit.slots.push(slot);
  const setState = (v) => props.setState(v);
  setState({ trufEdit });
}

export async function aRemoveTrufSlot(props, k) {
  const trufEdit = props.state.trufEdit;
  trufEdit.slots.splice(k, 1);
  const setState = (v) => props.setState(v);
  setState({ trufEdit });
}

export async function aGetHomeTrufs(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("trufs", setdata, seterror);
  aSetHomeTrufs(props, error, data);
}

export function aSetHomeTrufs(props, error, data) {
  var dataT = [];
  for (let i = 0; i < data.length; i++)
    dataT.push([
      [data[i].name, data[i].location],
      [data[i].desc, data[i].status],
    ]);
  props.setState({ trufs: data, trufsT: dataT, error });
}
