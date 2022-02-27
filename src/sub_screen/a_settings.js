import React from "react";
import { AlertBox, AlertBoxBody1 } from "../widget/alertBox";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";
import { DropDown1, Textbox1 } from "../widget/textbox";
import { aAddAdmin, aBlockAdmin } from "../method/a_settings";
import { aDeleteAdmin, aUpdateAdmin } from "../method/a_settings";
import { adminTypes } from "../module/static_data";

export default function ASettings({ props }) {
  const { admin, admins, adminsT } = props.state;
  const { sPage, sLoading, sError } = props.state;
  const setState = (v) => props.setState(v);
  const setEdit = (v) => setState({ admin: admin === null ? admins[v] : null });
  const titles = [
    { title: "Admins", count: admins.length },
    { title: "Add Admin", count: "+" },
  ];

  const editBody = (
    <AlertBoxBody1
      onclose={setEdit}
      title="Update Truf"
      body={
        admin != null ? (
          <div className="hm1_baf1">
            <div className="hm1_baf1_formbody">
              <form
                id="truf_edit_form"
                onSubmit={(e) => aUpdateAdmin(e, props)}
              >
                <div className="hm1_baf1_a">
                  <div className="hm1_baf1_ab">Details</div>
                  <div className="hm1_baf1_ac">
                    <DropDown1
                      tit="Admin Type"
                      id="type"
                      dv={admin.type}
                      data={adminTypes}
                    />
                    <Textbox1 tit="Name" id="user_name" dv={admin.user_name} />
                  </div>
                </div>
                <div className="cm1_error center">{sError}</div>
                <div className="center">
                  <button
                    style={{ background: sLoading ? "gray" : "" }}
                    disabled={sLoading}
                    className="hm1_add_btl2"
                    onClick={() => aBlockAdmin(props)}
                  >
                    Block Admin
                  </button>
                  <button
                    style={{ background: sLoading ? "gray" : "" }}
                    disabled={sLoading}
                    className="hm1_add_btl2"
                    onClick={() => aDeleteAdmin(props)}
                  >
                    Remove Admin
                  </button>
                  <button
                    style={{ background: sLoading ? "gray" : "" }}
                    disabled={sLoading}
                    type="submit"
                    className="hm1_add_btl2"
                  >
                    Update Admin
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
          title="Admins"
          titles={[
            { name: "Username/Type", cl: "tr6" },
            { name: "Added/Status", cl: "tr4" },
          ]}
          onclick={setEdit}
          items={adminsT}
        />
      ) : (
        <div className="hm1_baf1">
          <div className="cm1_tb_top">Create Admin</div>
          <div className="hm1_baf1_formbody">
            <form id="admin_add_form" onSubmit={(e) => aAddAdmin(e, props)}>
              <div className="hm1_baf1_a">
                <div className="hm1_baf1_ab">Details</div>
                <div className="hm1_baf1_ac">
                  <DropDown1 tit="Admin Type" id="type" data={adminTypes} />
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
                  +Add Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <AlertBox show={admin !== null} body={editBody} />
    </React.StrictMode>
  );
}
