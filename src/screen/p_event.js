import React, { Component } from "react";
import "../style/pep2.css";
import calenderIcon from "../asset/eventgray.png";
import timeIcon from "../asset/timer.png";
import backIcon from "../asset/left-arrow.png";
import likeIcon from "../asset/like.png";

export default class PublicEventPage extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className="pep2_a">
          <img
            className="pep2_b"
            alt="Err"
            src="https://media.istockphoto.com/photos/blurred-defocused-background-of-public-event-exhibition-hall-business-picture-id857615704?b=1&k=20&m=857615704&s=170667a&w=0&h=t5PDyVE89sAGMAEnG2iLLXZP5oaW22nFmcKEhMoCk58="
          />
        </div>
        <div className="pep2_c">
          <div className="pep2_d">
            <div className="pep2_e">Yoga masterclass</div>
            <div className="pep2_f">
              <img alt="Err" src={calenderIcon} className="pep2_g" />
              <div className="pep2_h">Friday June 27</div>
              <img alt="Err" src={timeIcon} className="pep2_i" />
              <div className="pep2_j">20:00</div>
            </div>
            <div className="pep2_k">
              <div className="pep2_l">16 Intrestes</div>
              <div className="pep2_m">
                {[1, 1, 1].map((ur, k) => (
                  <img
                    src="https://i.stack.imgur.com/lzWhZ.jpg?s=64&g=1"
                    key={k}
                    className="pep2_n"
                  />
                ))}
              </div>
            </div>
            <div className="pep2_o">Description</div>
            <div className="pep2_p">
              In mathematics, an isomorphism is a structure-preserving mapping
              between two structures of the same type that can be reversed by an
              inverse mapping. Two mathematical structures are isomorphic if an
              isomorphism exists between them.
            </div>
            <div className="pep2_o">Location</div>
            <div className="pep2_q">MAp</div>
          </div>
        </div>
        <img alt="Err" src={backIcon} className="pep2_r" />
        <div className="pep2_s">
          <div className="pep2_t">
            <img alt="Err" src={likeIcon} className="pep2_u" />
            <div className="pep2_v">Show Intrest</div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
