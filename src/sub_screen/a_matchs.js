import React from "react";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";

export default function AMatch({ props }) {
  const { sPage, matchs, matchsT } = props.state;
  const setState = (v) => props.setState(v);
  const titles = [
    { title: "Live Match", count: "" },
    { title: "All Match", count: "" },
    { title: "Fulltime Match", count: "" },
    { title: "Booked Match", count: "" },
  ];

  return (
    <React.StrictMode>
      <div className="cm1_page_title">Matchs</div>
      <BodyTopbar titles={titles} onclick={(v) => setState({ sPage: v })} />
      {sPage === 0 ? (
        <MyTable
          nosearch
          nofilter
          title="Live Match"
          titles={[
            { name: "Date/type", cl: "tr5" },
            { name: "Booking Count/Status", cl: "tr4" },
          ]}
          onclick={(v) => props.setState({ match: matchs.live[v] })}
          items={matchsT.live}
        />
      ) : null}
      {sPage === 1 ? (
        <MyTable
          nosearch
          nofilter
          title="All Match"
          titles={[
            { name: "Date/type", cl: "tr5" },
            { name: "Booking Count/Status", cl: "tr4" },
          ]}
          onclick={(v) => props.setState({ match: matchs.all[v] })}
          items={matchsT.all}
        />
      ) : null}
      {sPage === 2 ? (
        <MyTable
          nosearch
          nofilter
          title="Fulltime Match"
          titles={[
            { name: "Date/type", cl: "tr5" },
            { name: "Booking Count/Status", cl: "tr4" },
          ]}
          onclick={(v) => props.setState({ match: matchs.expired[v] })}
          items={matchsT.expired}
        />
      ) : null}
      {sPage === 3 ? (
        <MyTable
          nosearch
          nofilter
          title="Booked Match"
          titles={[
            { name: "Date/type", cl: "tr5" },
            { name: "Booking Count/Status", cl: "tr4" },
          ]}
          onclick={(v) => props.setState({ match: matchs.upcoming[v] })}
          items={matchsT.upcoming}
        />
      ) : null}
    </React.StrictMode>
  );
}
