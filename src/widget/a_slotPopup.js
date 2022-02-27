import "../style/hm3.css";

export function SlotPopup({ props }) {
  const { slot } = props.state;
  const close = () => props.setState({ slot: null });

  return (
    <div className="hm3_a">
      <div className="hm3_b">
        <div className="hm3_c">
          <div className="hm3_d">{slot.truf_name}</div>
          <div className="hm3_p">Deactivate Slot</div>
          <div className="hm3_p">Delete Slot</div>
          <div className="hm3_p">Change Caretaker</div>
          <div className="hm3_e" onClick={close}>
            X
          </div>
        </div>
        <div className="hm3_f">
          <div className="hm3_j">Slot Details</div>
          <div className="hm3_g">
            <div className="hm3_h">Type</div>
            <div className="hm3_i">
              {slot.type === "s" ? "Setes Slot" : "Team Slot"}
            </div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Truf Name</div>
            <div className="hm3_i">{slot.truf_name}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Truf ID</div>
            <div className="hm3_i">{slot.truf_id}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Ground</div>
            <div className="hm3_i">{slot.ground}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Price</div>
            <div className="hm3_i">{slot.price / 100}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Status</div>
            <div className="hm3_i">
              {slot.status == "0" ? "Opened" : "Closed"}
            </div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Timeing</div>
            <div className="hm3_i">
              {slot.s_time} - {slot.e_time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
