import { api_init_get } from "../module/a_apiinit";

export async function aGetHomeMatch(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("matchs", setdata, seterror);
  aSetHomeMatch(props, error, data);
}
export function aSetHomeMatch(props, error, matchs) {
  const setType = (v) => (v.type == "s" ? "Setes" : "Team");
  var matchsT = { all: [], expired: [], live: [], upcoming: [] };
  for (let i = 0; i < matchs.all.length; i++)
    matchsT.all.push([
      [matchs.all[i].date, setType(matchs.all[i])],
      [matchs.all[i].authers.length, matchs.all[i].status],
    ]);
  for (let i = 0; i < matchs.live.length; i++)
    matchsT.live.push([
      [matchs.live[i].date, setType(matchs.live[i])],
      [matchs.live[i].authers.length, matchs.live[i].status],
    ]);
  for (let i = 0; i < matchs.upcoming.length; i++)
    matchsT.upcoming.push([
      [matchs.upcoming[i].date, setType(matchs.upcoming[i])],
      [matchs.upcoming[i].authers.length, matchs.upcoming[i].status],
    ]);
  for (let i = 0; i < matchs.expired.length; i++)
    matchsT.expired.push([
      [matchs.expired[i].date, setType(matchs.expired[i])],
      [matchs.expired[i].authers.length, matchs.expired[i].status],
    ]);

  props.setState({ matchs, matchsT, error });
}
