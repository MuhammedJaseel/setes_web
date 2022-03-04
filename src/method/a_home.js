import { api_init_get } from "../module/a_apiinit";
import { aGetHomeBookings_s, aGetHomeBookings_t } from "./a_booking";
import { aSetHomeBookings_s, aSetHomeBookings_t } from "./a_booking";
import { aGetHomeCtakers, aSetHomeCtakers } from "./a_ctaker";
import { aGetHomeEvent, aSetHomeEvent } from "./a_event";
import { aGetHomeMatch, aSetHomeMatch } from "./a_match";
import { aGetHomeMember, aSetHomeMember } from "./a_memeber";
import { aGetHomeNoti, aSetHomeNoti } from "./a_noti";
import { aGetHomeAdmins, aSetHomeAdmins } from "./a_settings";
import { aGetHomeSlots_s, aGetHomeSlots_t } from "./a_slot";
import { aSetHomeSlots_s, aSetHomeSlots_t } from "./a_slot";
import { aGetHomeTrufs, aSetHomeTrufs } from "./a_truf";

export async function aHomeReload(props) {
  props.setState({ loading: 50 });
  switch (props.state.page) {
    case 0:
      await aGetHomeNoti(props);
      break;
    case 1:
      await aGetHomeMember(props);
      break;
    case 2:
      await aGetHomeEvent(props);
      break;
    case 3:
      await aGetHomeTrufs(props);
      break;
    case 4:
      await aGetHomeSlots_t(props);
      await aGetHomeSlots_s(props);
      break;
    case 5:
      await aGetHomeMatch(props);
      break;
    case 6:
      await aGetHomeBookings_t(props);
      await aGetHomeBookings_s(props);
      break;
    case 7:
      await aGetHomeCtakers(props);
      break;
    case 8:
      await aGetHomeAdmins(props);
      break;
    default:
      aGetHome();
  }
  props.setState({ loading: 100 });
}

export async function aGetHome(props) {
  const setState = (v) => props.setState(v);
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("home", setdata, seterror);
  aSetHomeNoti(props, error, data.notis);
  aSetHomeMember(props, error, data.members);
  aSetHomeEvent(props, error, data.events);
  aSetHomeTrufs(props, error, data.trufs);
  aSetHomeSlots_t(props, error, data.slots.team);
  aSetHomeSlots_s(props, error, data.slots.setes);
  aSetHomeMatch(props, error, data.matchs);
  aSetHomeBookings_t(props, error, data.bookings.team);
  aSetHomeBookings_s(props, error, data.bookings.setes);
  aSetHomeCtakers(props, error, data.ctakers);
  aSetHomeAdmins(props, error, data.admins);
  setState({ assets: data.assets });
  setState({ loading: 100 });
}

// TODO:
export async function aGetHomeAssets(props) {
  const setState = (v) => props.setState(v);
  var data;
  var setdata = (v) => (data = v);
  await api_init_get("assets", setdata, () => {});
  setState({ assets: data });
}
