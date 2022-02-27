import React from "react";
import { AlertBox, AlertBoxBody1 } from "../widget/alertBox";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";
import { Textbox1, Textbox4 } from "../widget/textbox";
import { aDeleteTruf, aPostTruf } from "../method/a_truf";
import { aPutTruf } from "../method/a_truf";
import { setTrufImg } from "../module/a_apiinit";

export default function ATruf({ props }) {
  const { trufs, trufsT, trufEdit, assets, zones } = props.state;
  const { trufPage, trufLoadingAdd, trufErrorAdd } = props.state;
  const setState = (v) => props.setState(v);
  const setEdit = (v) =>
    setState({ trufEdit: trufEdit === null ? trufs[v] : null });
  const titles = [
    { title: "All Truf", count: "" },
    { title: "Add Truf", count: "+" },
  ];
  // setState({ zones: null });
  const editBody = (
    <AlertBoxBody1
      onclose={setEdit}
      title="Update Truf"
      body={
        trufEdit != null ? (
          <div className="hm1_baf1">
            <div className="hm1_baf1_formbody">
              <form id="truf_edit_form" onSubmit={(e) => aPutTruf(e, props)}>
                <div className="hm1_baf1_a">
                  <div className="hm1_baf1_ab">Details</div>
                  <div className="hm1_baf1_ac">
                    <Textbox1 tit="Name" id="name" dv={trufEdit.name} />
                    <Textbox1
                      tit="Location"
                      id="location"
                      dv={trufEdit.location}
                    />
                    <Textbox1 tit="Latitude" id="lat" dv={trufEdit.lat} />
                    <Textbox1 tit="Longitud" id="lon" dv={trufEdit.lon} />
                  </div>
                  <div className="hm1_baf1_ac">
                    {/* <div className="cm1_tb1_a">
                      <div>District</div>
                      <select
                        onChange={(e) => setState({ zones: e.target.value })}
                        className="cm1_tb1_ab"
                        id="district"
                      >
                        {assets.locations[0].zone.map((d, k) => (
                          <option key={k} value={k}>
                            {d.code} - {d.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    {zones != null ? (
                      <div className="cm1_tb1_a">
                        <div>Zone</div>
                        <select className="cm1_tb1_ab" type="text" id="zone">
                          {assets.locations[0].zone[zones].zone.map((d, k) => (
                            <option key={k} value={k}>
                              {d.code} - {d.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : null} */}
                  </div>
                  <textarea
                    placeholder="Disctiption"
                    className="hm1_input_tab"
                    defaultValue={trufEdit.desc}
                    id="desc"
                    rows={3}
                  />
                  <div className="hm1_baf1_ac">
                    <Textbox4 tit="Choose a photo 1" id="img1" />
                    <Textbox4 tit="Choose a photo 2" id="img2" />
                    <Textbox4 tit="Choose a photo 3" id="img3" />
                  </div>
                  {trufEdit.img.map((img, k) => (
                    <img
                      alt="Truf"
                      key={k}
                      className="hm1_baf1_c"
                      src={setTrufImg(`${trufEdit._id}/${img}`)}
                    />
                  ))}
                </div>
                <div className="cm1_error center">{trufErrorAdd}</div>
                <div className="center">
                  <button
                    style={{ background: trufLoadingAdd ? "gray" : "" }}
                    disabled={trufLoadingAdd}
                    className="hm1_add_btl2"
                    onClick={() => aDeleteTruf(props)}
                  >
                    Delete Truf
                  </button>
                  <button
                    style={{ background: trufLoadingAdd ? "gray" : "" }}
                    disabled={trufLoadingAdd}
                    type="submit"
                    className="hm1_add_btl2"
                  >
                    Update Truf
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
      <div className="cm1_page_title">Trufs</div>
      <BodyTopbar titles={titles} onclick={(v) => setState({ trufPage: v })} />
      {trufPage === 0 ? (
        <MyTable
          nosearch
          nofilter
          title="All Trufs"
          titles={[
            { name: "Title", cl: "tr5" },
            { name: "Date", cl: "tr4" },
          ]}
          onclick={setEdit}
          items={trufsT}
        />
      ) : (
        <div className="hm1_baf1">
          <div className="cm1_tb_top">Create Truf</div>
          <div className="hm1_baf1_formbody">
            <form id="truf_add_form" onSubmit={(e) => aPostTruf(e, props)}>
              <div className="hm1_baf1_a">
                <div className="hm1_baf1_ab">Details</div>
                <div className="hm1_baf1_ac">
                  <Textbox1 tit="Name" id="name" ph="Truf Name" />
                  <Textbox1 tit="Create Id" id="id" ph="GHTF879" />
                  <Textbox1 tit="Latitude" id="lat" ph="1.0003434" />
                  <Textbox1 tit="Longitud" id="lon" ph="1.0034343" />
                </div>
                <div className="hm1_baf1_ac">
                  <Textbox1
                    tit="Location"
                    id="location"
                    ph="Town, area or block"
                  />
                  <div className="cm1_tb1_a">
                    <div>District</div>
                    <select
                      onChange={(e) => setState({ zones: e.target.value })}
                      className="cm1_tb1_ab"
                      id="district"
                    >
                      {assets.locations[0].zone.map((d, k) => (
                        <option key={k} value={k}>
                          {d.code} - {d.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  {zones != null ? (
                    <div className="cm1_tb1_a">
                      <div>Zone</div>
                      <select className="cm1_tb1_ab" type="text" id="zone">
                        {assets.locations[0].zone[zones].zone.map((d, k) => (
                          <option key={k} value={k}>
                            {d.code} - {d.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : null}
                </div>
                <div className="hm1_baf1_ac">
                  <Textbox4 tit="Choose a photo" id="img1" />
                  <Textbox4 tit="Choose a photo" id="img2" />
                  <Textbox4 tit="Choose a photo" id="img3" />
                </div>
                <textarea
                  placeholder="Disctiption"
                  className="hm1_input_tab"
                  id="desc"
                  rows={3}
                />
              </div>
              <div className="cm1_error center">{trufErrorAdd}</div>
              <div className="center">
                <button
                  style={{ background: trufLoadingAdd ? "gray" : "" }}
                  disabled={trufLoadingAdd}
                  type="submit"
                  className="hm1_add_btl2"
                >
                  +Create Truf
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <AlertBox show={trufEdit !== null} body={editBody} />
    </React.StrictMode>
  );
}
