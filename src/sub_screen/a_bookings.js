import React from "react";
import { BookingPopup } from "../widget/a_bookingPopup";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";

export default function ABooking({ props }) {
  const { sbookingsT, tbookingsT, booking, spage } = props.state;
  const { sbookings, tbookings } = props.state;
  const setState = (v) => props.setState(v);

  const titles = [
    { title: "Setes Bookings", count: "" },
    { title: "Team Bookings", count: "" },
  ];

  return (
    <React.StrictMode>
      <div className="cm1_page_title">Trufs</div>
      <BodyTopbar titles={titles} onclick={(v) => setState({ spage: v })} />
      {spage === 0 ? (
        <MyTable
          nosearch
          nofilter
          title="Setes Bookings"
          titles={[
            { name: "Title", cl: "tr5" },
            { name: "Date", cl: "tr4" },
          ]}
          onclick={(v) => setState({ booking: sbookings[v] })}
          items={sbookingsT}
        />
      ) : (
        <MyTable
          nosearch
          nofilter
          title="Team Bookings"
          titles={[
            { name: "Title", cl: "tr5" },
            { name: "Date", cl: "tr4" },
          ]}
          onclick={(v) => setState({ booking: tbookings[v] })}
          items={tbookingsT}
        />
      )}
      {booking !== null ? <BookingPopup props={props} /> : null}
    </React.StrictMode>
  );
}
