import React from "react";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";

export default function ANotifications({ props }) {
  const { sPage, noti, notis, notisT } = props.state;
  const titles = [
    { title: "New Notifications", count: "" },
    { title: "All Notifications", count: "" },
  ];
  return (
    <React.StrictMode>
      <div className="cm1_page_title">Notifications</div>
      <BodyTopbar
        titles={titles}
        onclick={(v) => props.setState({ sPage: v })}
      />
      {sPage === 0 ? (
        <MyTable
          nosearch
          nofilter
          title="New Notifications"
          titles={[
            { name: "Title", cl: "tr4" },
            { name: "Time", cl: "tr3" },
            { name: "Status", cl: "tr2" },
          ]}
          onclick={(v) => props.setState({ noti: notis.new[v] })}
          items={notisT.new}
        />
      ) : null}
      {sPage === 1 ? (
        <MyTable
          nosearch
          nofilter
          title="All Notifications"
          titles={[
            { name: "Title", cl: "tr4" },
            { name: "Time", cl: "tr3" },
            { name: "Status", cl: "tr2" },
          ]}
          onclick={(v) => props.setState({ noti: notis.all[v] })}
          items={notisT.all}
        />
      ) : null}
    </React.StrictMode>
  );
}
