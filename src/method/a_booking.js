import { api_init_get } from "../module/a_apiinit";

export async function aGetHomeBookings_t(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("bookings?type=t", setdata, seterror);
  aSetHomeBookings_t(props, error, data);
}

export function aSetHomeBookings_t(props, error, data) {
  var dataT = [];
  for (let i = 0; i < data.length; i++)
    dataT.push([
      [data[i].date, data[i].type],
      [data[i].created, data[i].status],
    ]);
  props.setState({ tbookings: data, tbookingsT: dataT, error });
}

export async function aGetHomeBookings_s(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("bookings?type=s", setdata, seterror);
  aSetHomeBookings_s(props, error, data);
}

export function aSetHomeBookings_s(props, error, data) {
  var dataT = [];
  for (let i = 0; i < data.length; i++)
    dataT.push([
      [data[i].date, data[i].type],
      [data[i].created, data[i].status],
    ]);
  props.setState({ sbookings: data, sbookingsT: dataT, error });
}
