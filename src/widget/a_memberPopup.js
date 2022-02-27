import { useState } from "react";
import { setUserImg } from "../module/a_apiinit";
import "../style/hm3.css";

export function MemebrDetailsPopup({ props }) {
  const { member } = props.state;
  const close = () => props.setState({ member: null });
  const [page, setPage] = useState(0);
  
  return (
    <div className="hm3_a">
      <div className="hm3_b">
        <div className="hm3_c">
          <div className="hm3_d">{member.name}</div>
          <div className="hm3_p">Block User</div>
          <div className="hm3_e" onClick={close}>
            X
          </div>
        </div>
        <div className="hm3_f">
          {member.img !== null ? (
            <div className="hm3_k">
              <img className="hm3_l" src={setUserImg(member.id, member.img)} />
            </div>
          ) : null}
          <div className="hm3_j">Personal Details</div>
          <div className="hm3_g">
            <div className="hm3_h">ID</div>
            <div className="hm3_i">{member.id}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Name</div>
            <div className="hm3_i">{member.name}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Phone</div>
            <div className="hm3_i">{member.phone}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Email</div>
            <div className="hm3_i">{member.email}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Joined</div>
            <div className="hm3_i">{member.created.split(".")[0]}</div>
          </div>
          <div className="hm3_j">Career Details</div>
          <div className="hm3_g">
            <div className="hm3_h">Goals</div>
            <div className="hm3_i">{member.my_goal ?? "0"}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Assistant</div>
            <div className="hm3_i">{member.my_assistant ?? "0"}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Free Kick</div>
            <div className="hm3_i">{member.my_free_kick ?? "0"}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Penalty Goal</div>
            <div className="hm3_i">{member.my_penalty_goal ?? "0"}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Interception</div>
            <div className="hm3_i">{member.my_interception ?? "0"}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Save</div>
            <div className="hm3_i">{member.my_save ?? "0"}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Clean Sheet</div>
            <div className="hm3_i">{member.my_clean_sheet ?? "0"}</div>
          </div>
          <div className="hm3_g">
            <div className="hm3_h">Penalty Save</div>
            <div className="hm3_i">{member.my_penalty_save ?? "0"}</div>
          </div>
          <div className="hm3_j">Prime Details</div>
          <div className="hm3_g">
            <div className="hm3_h">Prime</div>
            <div className="hm3_i">{member.prime ? "Yes" : "No"}</div>
          </div>
          <div className="hm3_m">
            <div className="hm3_n" onClick={() => setPage(0)}>
              Bookings
            </div>
            <div className="hm3_n" onClick={() => setPage(1)}>
              Prime details
            </div>
            <div className="hm3_n" onClick={() => setPage(2)}>
              Payments
            </div>
          </div>
          {page == 0 ? <div className="hm3_o">Bookings</div> : null}
          {page == 1 ? <div className="hm3_o">Prime details</div> : null}
          {page == 2 ? <div className="hm3_o">Payments</div> : null}
        </div>
      </div>
    </div>
  );
}
