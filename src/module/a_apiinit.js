import axios from "axios";

export const wsUrl = "wss://setes.in:8000/admins/";
var base = "https://setes.in:8000/";
const baseapi = base + "admin/";

export async function api_init_get(api, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_id: sessionStorage.getItem("userId"),
  };
  await axios
    .get(baseapi + api, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      console.log(err.response.status);
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location = "admin/login";
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}

export async function api_init_post(api, body, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_id: sessionStorage.getItem("userId"),
  };
  await axios
    .post(baseapi + api, body, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      console.log(err.toJSON());
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location = "admin/login";
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}

export async function api_init_put(api, body, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_id: sessionStorage.getItem("userId"),
  };
  await axios
    .put(baseapi + api, body, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location = "admin/login";
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}

export async function api_init_delete(api, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_id: sessionStorage.getItem("userId"),
  };
  await axios
    .delete(baseapi + api, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location = "admin/login";
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}

export const setEventImg = (v) => base + "asset/events/" + v;
export const setTrufImg = (v) => base + "asset/trufs/" + v;
export const setUserImg = (v, d) => base + "asset/members/" + v + "/" + d;
