import axios from "axios";

// var base = "https://apisetes.herokuapp.com/";
base = "http://localhost:3010/";
const baseapi = base + "admin/";

export async function api_init_get(api, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_name: sessionStorage.getItem("userName"),
  };
  await axios
    .get(baseapi + api, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location.replace("login");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}

export async function api_init_post(api, body, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_name: sessionStorage.getItem("userName"),
  };
  await axios
    .post(baseapi + api, body, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      console.log(err.toJSON());
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location.replace("login");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}

export async function api_init_put(api, body, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_name: sessionStorage.getItem("userName"),
  };
  await axios
    .put(baseapi + api, body, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location.replace("login");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}

export async function api_init_delete(api, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_name: sessionStorage.getItem("userName"),
  };
  await axios
    .delete(baseapi + api, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location.replace("login");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}

export const setEventImg = (v) => base + "asset/events/" + v;
export const setTrufImg = (v) => base + "asset/trufs/" + v;
export const setUserImg = (v, d) => base + "asset/members/" + v + "/" + d;
