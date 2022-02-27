import {
  api_init_delete,
  api_init_get,
  api_init_post,
  api_init_put,
} from "../module/a_apiinit";

export async function aPostEvent(e, props) {
  const setState = (v) => props.setState(v);
  e.preventDefault();
  var data = e.target;
  setState({ eventLoadingAdd: true, eventErrorAdd: null });
  const formData = new FormData();
  if (data.img.files[0] != null)
    formData.append("img", data.img.files[0], data.img.files[0].name);
  else setState({ eventErrorAdd: "Select Image" });
  var body = {
    title: data.title.value,
    sub_title: data.sub_title.value,
    desc: data.desc.value,
    date: data.date.value,
    gpsloc: data.gpsloc.value,
  };
  formData.append("body", JSON.stringify(body));
  var clearForm = () => document.getElementById("bid_add_form").reset();
  var setError = (v) => setState({ eventErrorAdd: v });
  await api_init_post("event", formData, clearForm, setError);
  setState({ eventLoadingAdd: false, eventPage: 0 });
  return 0;
}

export async function aPutEvent(e, props) {
  const event_id = props.state.eventEdit._id;
  const setState = (v) => props.setState(v);
  e.preventDefault();
  var data = e.target;
  setState({ eventLoadingAdd: true, eventErrorAdd: null });
  const formData = new FormData();
  if (data.img.files[0] != null)
    formData.append("img", data.img.files[0], data.img.files[0].name);
  var body = {
    title: data.title.value,
    sub_title: data.sub_title.value,
    desc: data.desc.value,
    date: data.date.value,
    gpsloc: data.gpsloc.value,
  };
  formData.append("body", JSON.stringify(body));
  var clearForm = () => {};
  var setError = (v) => setState({ eventErrorAdd: v });
  await api_init_put(
    "event?event_id=" + event_id,
    formData,
    clearForm,
    setError
  );
  setState({ eventLoadingAdd: false, eventPage: 0 });
  return 0;
}

export async function aDeleteEvent(props) {
  const event_id = props.state.eventEdit._id;
  const setState = (v) => props.setState(v);
  setState({ eventLoadingAdd: true, eventErrorAdd: null });
  var clearForm = () => setState({ eventEdit: null });
  var setError = (v) => setState({ eventErrorAdd: v });
  if (window.confirm("Confirm Delete"))
    await api_init_delete("event?event_id=" + event_id, clearForm, setError);
  setState({ eventLoadingAdd: false, eventPage: 0 });
}

export async function aGetHomeEvent(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("events", setdata, seterror);
  aSetHomeEvent(props, error, data);
}

export function aSetHomeEvent(props, error, data) {
  var dataT = [];
  for (let i = 0; i < data.length; i++)
    dataT.push([
      [data[i].title, data[i].sub_title],
      [data[i].date, data[i].desc],
    ]);
  props.setState({ events: data, eventsT: dataT, error });
}
