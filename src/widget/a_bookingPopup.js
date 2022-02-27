import "../style/hm3.css";

export function BookingPopup({ props }) {
  const { booking } = props.state;
  const close = () => props.setState({ booking: null });
  console.log(booking);
  return (
    <div className="hm3_a">
      <div className="hm3_b">
        <div className="hm3_c">
          <div className="hm3_d">{booking.date}</div>
          <div className="hm3_p">Cancel Booking</div>
          <div className="hm3_e" onClick={close}>
            X
          </div>
        </div>
        <div className="hm3_f">
          <div className="hm3_j">Booking Details</div>
          <div className="hm3_g">
            <div className="hm3_h">Type</div>
            <div className="hm3_i">
              {booking.type === "s" ? "Setes booking" : "Team booking"}
            </div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Booking Date</div>
            <div className="hm3_i">{booking.date}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Totel Bookings</div>
            <div className="hm3_i">{booking.authers.length}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Booking Status</div>
            <div className="hm3_i">{booking.status}</div>
          </div>
          <div className="hm3_j">Plyers Details</div>
          {booking.authers.map((aut) => (
            <div className="hm3_g">
              <div className="hm3_h">{aut.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
