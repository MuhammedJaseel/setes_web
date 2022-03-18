import addNotification from "react-push-notification";
import { api_init_get } from "../module/a_apiinit";
import { aGetHomeBookings, aSetHomeBookings } from "./a_booking";
import { aGetHomeCtakers, aSetHomeCtakers } from "./a_ctaker";
import { aGetHomeEvent, aSetHomeEvent } from "./a_event";
import { aGetHomeMatch, aSetHomeMatch } from "./a_match";
import { aGetHomeMember, aSetHomeMember } from "./a_memeber";
import { aGetHomeNoti, aSetHomeNoti } from "./a_noti";
import { aGetHomeAdmins, aSetHomeAdmins } from "./a_settings";
import { aGetHomeSlots, aSetHomeSlots } from "./a_slot";
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
      await aGetHomeSlots(props);
      break;
    case 5:
      await aGetHomeMatch(props);
      break;
    case 6:
      await aGetHomeBookings(props);
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
  if (error === null) {
    aSetHomeNoti(props, error, data.notis);
    aSetHomeMember(props, error, data.members);
    aSetHomeEvent(props, error, data.events);
    aSetHomeTrufs(props, error, data.trufs);
    aSetHomeSlots(props, error, data.slots);
    aSetHomeMatch(props, error, data.matchs);
    aSetHomeBookings(props, error, data.bookings);
    aSetHomeCtakers(props, error, data.ctakers);
    aSetHomeAdmins(props, error, data.admins);
    setState({ assets: data.assets });
  } else setState({ error });
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

export function onsocketMsg(message, props) {
  var msgs = message.data.split("|");
  for (let i = 0; i < msgs.length; i++) {
    if (msgs[i] === "noti") {
      aGetHomeNoti(props);
      addNotification({
        title: "You have a new notification",
        subtitle: "You have a new notification",
        message: "You have a new notification",
        theme: "darkblue",
        native: true,
      });
    }
    if (msgs[i] === "users") aGetHomeMember(props);
    if (msgs[i] === "events") aGetHomeEvent(props);
    if (msgs[i] === "trufs") aGetHomeTrufs(props);
    // if (msgs[i] === "slots") aHomeReload(4);
    if (msgs[i] === "matchs") aGetHomeMatch(props);
    // if (msgs[i] === "bookings") aHomeReload(6);
  }
}
