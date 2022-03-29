import React from "react";
import { aPostAlert } from "../method/a_alert";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";
import { Textbox1 } from "../widget/textbox";

export default function AAlert({ props }) {
  const titles = [
    { title: "All Alerts", count: "" },
    { title: "Make Alert to Public", count: "+" },
    { title: "Make Alert to Caretaker", count: "+" },
  ];

  const { sPage, sError, sLoading } = props.state;

  return (
    <React.StrictMode>
      <div className="cm1_page_title">Alerts</div>
      <BodyTopbar
        titles={titles}
        onclick={(v) => props.setState({ sPage: v })}
      />
      {sPage === 0 ? (
        <MyTable
          nosearch
          nofilter
          title="All Alerts"
          titles={[
            { name: "Title", cl: "tr5" },
            { name: "Date", cl: "tr4" },
          ]}
          onclick={() => {}}
          items={[]}
        />
      ) : null}
      {sPage === 1 || sPage === 2 ? (
        <div className="hm1_baf1">
          <div className="cm1_tb_top">
            Make Alert to {sPage === 1 ? "Public" : "Caretaker"}
          </div>
          <div className="hm1_baf1_formbody">
            <form
              id="alert_add_form"
              onSubmit={(e) => aPostAlert(e, sPage, props)}
            >
              <div className="hm1_baf1_a">
                <div className="hm1_baf1_ab">Details</div>
                <Textbox1 tit="Title" id="title" ph="Event Title" />
                <textarea
                  required
                  placeholder="Topic"
                  className="hm1_input_tab"
                  id="desc"
                  rows={3}
                />
              </div>
              <div className="cm1_error center">{sError}</div>
              <div className="center">
                <button
                  style={{ background: sLoading ? "gray" : "" }}
                  disabled={sLoading}
                  type="submit"
                  className="hm1_add_btl2"
                >
                  Brodcast
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </React.StrictMode>
  );
}
