import React, { Component } from "react";
import "../style/p_hm1.css";
import setesLogo from "../asset/setes.png";
import setesApp from "../asset/setes_app.png";
import playstore from "../asset/playstore.png";
import appstore from "../asset/appstore.png";

export default class PublicHomePage extends Component {
  render() {
    return (
      <div className="p_hm1_a">
        <div className="p_hm1_b">
          <div className="p_hm1_c">Get App</div>
          <div className="p_hm1_c">About Us</div>
          <div className="p_hm1_c">Contact Us</div>
          <div className="p_hm1_c">Login</div>
        </div>
        <div className="p_hm1_d">
          <div className="p_hm1_e">
            <img className="p_hm1_f" src={setesLogo} />
            <div className="p_hm1_g">
              Sport pertains to any form of competitive physical activity or
              game that aims to use, maintain or improve physical ability and
              skills while providing enjoyment to participants and, in some
              cases, entertainment to spectators. Sports can, through casual or
              organized participation, improve one's physical health.
            </div>
          </div>
          <div className="p_hm1_h">
            <div className="p_hm1_i">Get App</div>
            <img className="p_hm1_j" src={setesApp} />
            <div className="p_hm1_k">
              <img className="p_hm1_l" src={playstore} />
              <img className="p_hm1_l" src={appstore} />
            </div>
          </div>
        </div>
        <div className="p_hm1_m"></div>
      </div>
    );
  }
}
