import { api_init_get, api_init_post } from "../module/a_apiinit";
import { api_init_delete, api_init_put } from "../module/a_apiinit";
import { aHomeReload } from "./a_home";

export async function aPostSlot(e, props) {
  e.preventDefault();
  const setState = (v) => props.setState(v);
  const slotType = props.state.slotTypeforAdd;
  if (slotType === null) {
    setState({ slotErrorAdd: "Chose Type" });
    return;
  }
  var data = e.target;
  setState({ slotLoadingAdd: true, slotErrorAdd: null });
  var body = {
    ground: data.ground.value,
    s_time: data.s_time.value,
    e_time: data.e_time.value,
    truf__id: props.state.trufs[data.truf.value]._id,
    truf_id: props.state.trufs[data.truf.value].id,
    truf_name: props.state.trufs[data.truf.value].name,
    type: slotType,
    price: data.price.value * 100,
    ctaker: data.ctaker.value,
  };
  var clearForm = async () => {
    document.getElementById("slot_add_form").reset();
    setState({ slotPage: 0 });
    await aHomeReload(props);
  };
  var setError = (v) => setState({ slotErrorAdd: v });
  await api_init_post("slot", body, clearForm, setError);
  setState({ slotLoadingAdd: false });
  return 0;
}

export async function aPutSlot(e, props) {
  const slot_id = props.state.slotEdit._id;
  const setState = (v) => props.setState(v);
  e.preventDefault();
  var data = e.target;
  setState({ slotLoadingAdd: true, slotErrorAdd: null });
  var body = {
    name: data.name.value,
    location: data.location.value,
    lat: data.lat.value,
    lon: data.lon.value,
    desc: data.desc.value,
    slots: props.state.slotEdit.slots,
    ctaker: data.ctaker.value,
  };
  var clearForm = async() => {
    alert("Succesfully Updated");
    await aHomeReload(props);
  };
  var setError = (v) => setState({ slotErrorAdd: v });
  await api_init_put("slot?slot_id=" + slot_id, body, clearForm, setError);
  setState({ slotLoadingAdd: false, slotPage: 0 });
  return 0;
}

export async function aDeleteSlot(props) {
  const slot_id = props.state.slotEdit._id;
  const setState = (v) => props.setState(v);
  setState({ slotLoadingAdd: true, slotErrorAdd: null });
  var clearForm = async () => {
    await aHomeReload(props);
    setState({ slotEdit: null });
  };
  var setError = (v) => setState({ slotErrorAdd: v });
  if (window.confirm("Confirm Delete"))
    await api_init_delete("slot?slot_id=" + slot_id, clearForm, setError);
  setState({ slotLoadingAdd: false, slotPage: 0 });
}

export async function aAddSlotSlot(props) {
  var slot = document.getElementById("slot_slot").value;
  const slotEdit = props.state.slotEdit;
  if (slotEdit.slots == null) slotEdit.slots = [];
  slotEdit.slots.push(slot);
  const setState = (v) => props.setState(v);
  setState({ slotEdit });
}

export async function aRemoveSlotSlot(props, k) {
  const slotEdit = props.state.slotEdit;
  slotEdit.slots.splice(k, 1);
  const setState = (v) => props.setState(v);
  setState({ slotEdit });
}

export async function aGetHomeSlots_t(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("slots?type=t", setdata, seterror);
  aSetHomeSlots_t(props, error, data);
}

export function aSetHomeSlots_t(props, error, data) {
  var dataT = [];
  for (let i = 0; i < data.length; i++)
    dataT.push([
      [data[i].truf_name, data[i].truf_id],
      [data[i].ground, data[i].price / 100],
      [data[i].s_time + " - " + data[i].e_time, data[i].status],
    ]);
  props.setState({ slotsTeam: data, slotsTeamT: dataT, error });
}

export async function aGetHomeSlots_s(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("slots?type=s", setdata, seterror);
  aSetHomeSlots_s(props, error, data);
}

export function aSetHomeSlots_s(props, error, data) {
  var dataT = [];
  for (let i = 0; i < data.length; i++)
    dataT.push([
      [data[i].truf_name, data[i].truf_id],
      [data[i].ground, data[i].price / 100],
      [data[i].s_time + " - " + data[i].e_time, data[i].status],
    ]);
  props.setState({ slotsSetes: data, slotsSetesT: dataT, error });
}
