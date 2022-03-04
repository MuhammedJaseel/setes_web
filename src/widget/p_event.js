import React from "react";
import calenderIcon from "../asset/eventgray.png";
import timeIcon from "../asset/timer.png";

export default function PublicEachEvent({ e }) {
  return (
    <div className="pep1_a_a" onClick={() => (window.location = "/event")}>
      <div className="pep1_a_b">Yoga masterclass</div>
      <div className="pep1_a_c">
        <img alt="img_err" src={calenderIcon} className="pep1_a_d" />
        <div className="pep1_a_e">Friday June 27</div>
        <img alt="img_err" src={timeIcon} className="pep1_a_f" />
        <div className="pep1_a_g">20:00</div>
      </div>
      <img alt="img_err"
        className="pep1_a_h"
        src="https://media.istockphoto.com/photos/blurred-defocused-background-of-public-event-exhibition-hall-business-picture-id857615704?b=1&k=20&m=857615704&s=170667a&w=0&h=t5PDyVE89sAGMAEnG2iLLXZP5oaW22nFmcKEhMoCk58="
      />
    </div>
  );
}
