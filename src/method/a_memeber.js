import { api_init_get } from "../module/a_apiinit";

export async function aGetHomeMember(props) {
  var error = null;
  var data;
  var setdata = (v) => (data = v);
  var seterror = (v) => (error = v);
  await api_init_get("members", setdata, seterror);
  aSetHomeMember(props, error, data);
}
export function aSetHomeMember(props, error, members) {
  var membersT = { all: [], prime: [], guest: [], blocked: [] };
  for (let i = 0; i < members.all.length; i++)
    membersT.all.push([
      [members.all[i].id, members.all[i].name],
      [members.all[i].phone, members.all[i].email],
      [members.all[i].prime ? "Prime" : "Not Prime"],
    ]);
  for (let i = 0; i < members.prime.length; i++)
    membersT.prime.push([
      [members.prime[i].id, members.prime[i].name],
      [members.prime[i].phone, members.prime[i].email],
      [members.prime[i].prime ? "Prime" : "Not Prime"],
    ]);
  for (let i = 0; i < members.guest.length; i++)
    membersT.guest.push([
      [members.guest[i].id, members.guest[i].name],
      [members.guest[i].phone, members.guest[i].email],
      [members.guest[i].prime ? "Prime" : "Not Prime"],
    ]);
  for (let i = 0; i < members.blocked.length; i++)
    membersT.blocked.push([
      [members.blocked[i].id, members.blocked[i].name],
      [members.blocked[i].phone, members.blocked[i].email],
      [members.blocked[i].prime ? "Prime" : "Not Prime"],
    ]);

  props.setState({ members, membersT, error });
}
