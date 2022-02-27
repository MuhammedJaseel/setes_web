import React from "react";
import { AlertBox, AlertBoxBody1 } from "../widget/alertBox";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";
import { DropDown1, Textbox1 } from "../widget/textbox";
import { aAddCtaker, aBlockCtaker } from "../method/a_ctaker";
import { aDeleteCtaker, aUpdateCtaker } from "../method/a_ctaker";
import { adminTypes } from "../module/static_data";

export default function ACtaker({ props }) {
  const { ctaker, ctakers, ctakersT } = props.state;
  const { sPage, sLoading, sError } = props.state;
  const setState = (v) => props.setState(v);
  const setEdit = (v) =>
    setState({ ctaker: ctaker === null ? ctakers[v] : null });
  const titles = [
    { title: "Caretakers", count: ctakers.length },
    { title: "Add Caretaker", count: "+" },
  ];

  const editBody = (
    <AlertBoxBody1
      onclose={setEdit}
      title="Update Caretaker"
      body={
        ctaker != null ? (
          <div className="hm1_baf1">
            <div className="hm1_baf1_formbody">
              <form
                id="truf_edit_form"
                onSubmit={(e) => aUpdateCtaker(e, props)}
              >
                <div className="hm1_baf1_a">
                  <div className="hm1_baf1_ab">Details</div>
                  <div className="hm1_baf1_ac">
                    <DropDown1
                      tit="Caretaker Type"
                      id="type"
                      dv={ctaker.type}
                      data={adminTypes}
                    />
                    <Textbox1 tit="Name" id="user_name" dv={ctaker.user_name} />
                  </div>
                </div>
                <div className="cm1_error center">{sError}</div>
                <div className="center">
                  <button
                    style={{ background: sLoading ? "gray" : "" }}
                    disabled={sLoading}
                    className="hm1_add_btl2"
                    onClick={() => aBlockCtaker(props)}
                  >
                    Block Caretaker
                  </button>
                  <button
                    style={{ background: sLoading ? "gray" : "" }}
                    disabled={sLoading}
                    className="hm1_add_btl2"
                    onClick={() => aDeleteCtaker(props)}
                  >
                    Remove Caretaker
                  </button>
                  <button
                    style={{ background: sLoading ? "gray" : "" }}
                    disabled={sLoading}
                    type="submit"
                    className="hm1_add_btl2"
                  >
                    Update Caretaker
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null
      }
    />
  );

  return (
    <React.StrictMode>
      <div className="cm1_page_title">Settings</div>
      <BodyTopbar titles={titles} onclick={(v) => setState({ sPage: v })} />
      {sPage === 0 ? (
        <MyTable
          nosearch
          nofilter
          title="Caretaker"
          titles={[
            { name: "Username/Type", cl: "tr6" },
            { name: "Added/Status", cl: "tr4" },
          ]}
          onclick={setEdit}
          items={ctakersT}
        />
      ) : (
        <div className="hm1_baf1">
          <div className="cm1_tb_top">Create Caretaker</div>
          <div className="hm1_baf1_formbody">
            <form id="ctaker_add_form" onSubmit={(e) => aAddCtaker(e, props)}>
              <div className="hm1_baf1_a">
                <div className="hm1_baf1_ab">Details</div>
                <div className="hm1_baf1_ac">
                  <DropDown1 tit="Caretaker Type" id="type" data={adminTypes} />
                  <Textbox1 tit="Name" id="user_name" ph="User Name" />
                  <Textbox1 tit="Name" id="password" ph="Password" />
                </div>
              </div>
              <div className="cm1_error center">{sError}</div>
              <div className="center">
                <button
                  style={{ background: sLoading ? "gray" : "" }}
                  disabled={sLoading}
                  type="submit"
                  className="hm1_add_btl2"
                >
                  +Add Caretaker
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <AlertBox show={ctaker !== null} body={editBody} />
    </React.StrictMode>
  );
}
