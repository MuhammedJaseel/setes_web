import React, { Component } from "react";
import PublicEachEvent from "../widget/p_event";
import "../style/pep1.css";
import eventIcon from "../asset/event.png";

export default class PublicEventsPage extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className="pep1_a">
          <div className="pep1_b">
            <img
              alt="Err"
              className="pep1_c"
              src="https://t3.ftcdn.net/jpg/01/76/22/16/360_F_176221607_xWqfCnKAc4bshP1hcsSuJfqkZAYbFT12.webp"
            />
          </div>
        </div>
        <div className="pep1_f">
          <div className="pep1_g">
            <div className="pep1_h">
              <div className="pep1_i">
                <div>
                  <div className="pep1_j">My Events</div>
                  <div className="pep1_k">Perinthalmanna Malappuram</div>
                </div>
                <img alt="Err" className="pep1_l" src={eventIcon} />
              </div>
              {[1, 1, 1, 1, 1].map((e) => (
                <PublicEachEvent e={e} />
              ))}
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
