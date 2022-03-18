import React from "react";
import { BookingPopup } from "../widget/a_bookingPopup";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";

export default function ABooking({ props }) {
  const { bookings, bookingsT, booking } = props.state;
  const setState = (v) => props.setState(v);

  const titles = [{ title: "Setes Bookings", count: "" }];

  return (
    <React.StrictMode>
      <div className="cm1_page_title">Trufs</div>
      <BodyTopbar titles={titles} onclick={(v) => setState({ spage: v })} />
      <MyTable
        nosearch
        nofilter
        title="Setes Bookings"
        titles={[
          { name: "Title", cl: "tr5" },
          { name: "Date", cl: "tr4" },
        ]}
        onclick={(v) => setState({ booking: bookings[v] })}
        items={bookingsT}
      />
      {booking !== null ? <BookingPopup props={props} /> : null}
    </React.StrictMode>
  );
}
