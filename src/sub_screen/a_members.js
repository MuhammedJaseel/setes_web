import React from "react";
import { AlertBoxBody1 } from "../widget/alertBox";
import { MemebrDetailsPopup } from "../widget/a_memberPopup";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";

export default function AMembers({ props }) {
  const { sPage, membersT, members, member } = props.state;
  const titles = [
    { title: "All Members", count: "" },
    { title: "Prime Members", count: "" },
    { title: "Non Prime members", count: "" },
    { title: "Blocked Members", count: "" },
  ];
  return (
    <React.StrictMode>
      <div className="cm1_page_title">Members</div>
      <BodyTopbar
        titles={titles}
        onclick={(v) => props.setState({ sPage: v })}
      />
      {sPage === 0 ? (
        <MyTable
          nosearch
          nofilter
          title="All Members"
          titles={[
            { name: "Id/Name", cl: "tr4" },
            { name: "Phone/Email", cl: "tr3" },
            { name: "Status", cl: "tr2" },
          ]}
          onclick={(v) => props.setState({ member: members.all[v] })}
          items={membersT.all}
        />
      ) : null}
      {sPage === 1 ? (
        <MyTable
          fBody={""}
          nosearch
          nofilter
          title="Prime Members"
          titles={[
            { name: "Title", cl: "tr5" },
            { name: "Date", cl: "tr4" },
          ]}
          onclick={() => {}}
          onclick={(v) => props.setState({ member: members.prime[v] })}
          items={membersT.prime}
        />
      ) : null}
      {sPage === 2 ? (
        <MyTable
          fBody={""}
          nosearch
          nofilter
          title="Guest Members"
          titles={[
            { name: "Title", cl: "tr5" },
            { name: "Date", cl: "tr4" },
          ]}
          onclick={(v) => props.setState({ member: members.guest[v] })}
          items={membersT.guest}
        />
      ) : null}
      {sPage === 3 ? (
        <MyTable
          fBody={""}
          nosearch
          nofilter
          title="Blocked Members"
          titles={[
            { name: "Title", cl: "tr5" },
            { name: "Date", cl: "tr4" },
          ]}
          onclick={(v) => props.setState({ member: members.blocked[v] })}
          items={membersT.blocked}
        />
      ) : null}
      {member !== null ? <MemebrDetailsPopup props={props} /> : null}
    </React.StrictMode>
  );
}
