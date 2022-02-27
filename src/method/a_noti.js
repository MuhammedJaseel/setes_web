import { api_init_get } from "../module/a_apiinit";

export async function aGetHomeNoti(props) {
  var error = null;
  var data;
  const setdata = (v) => (data = v);
  const seterror = (v) => (error = v);
  await api_init_get("notis", setdata, seterror);
  aSetHomeNoti(props, error, data);
}

export function aSetHomeNoti(props, error, notis) {
  var notisT = { all: [], new: [] };
  for (let i = 0; i < notis.all.length; i++)
    notisT.all.push([
      [notis.all[i].title, notis.all[i].desc],
      [notis.all[i].created, notis.all[i].email],
      [notis.all[i].type, notis.all[i].status],
    ]);
  for (let i = 0; i < notis.new.length; i++)
    notisT.new.push([
      [notis.new[i].title, notis.new[i].desc],
      [notis.new[i].created, notis.new[i].email],
      [notis.new[i].type, notis.new[i].status],
    ]);
  props.setState({ notis, notisT, error });
}
