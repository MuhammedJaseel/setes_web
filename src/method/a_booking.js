import { api_init_get } from "../module/a_apiinit";

export async function aGetHomeBookings(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("bookings", setdata, seterror);
  aSetHomeBookings(props, error, data);
}

export function aSetHomeBookings(props, error, data) {
  var dataT = [];
  for (let i = 0; i < data.length; i++)
    dataT.push([
      [data[i].date, data[i].type],
      [data[i].created, data[i].status],
    ]);
  props.setState({ bookings: data, bookingsT: dataT, error });
}
