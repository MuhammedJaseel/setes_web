import React from "react";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";
import { DropDown3, Textbox1 } from "../widget/textbox";
import { DropDown2A, DropDown2B } from "../widget/textbox";
import { aPostSlot } from "../method/a_slot";
import { trufTypes } from "../module/static_data";
import { SlotPopup } from "../widget/a_slotPopup";

export default function Aslot({ props }) {
  const { slotsSetesT, slotsTeamT, slotsSetes, slotsTeam, slot } = props.state;
  const { sPage, slotLoadingAdd, slotErrorAdd, trufs } = props.state;
  const { slotTypeforAdd, ctakers } = props.state;
  const setState = (v) => props.setState(v);

  const titles = [
    { title: "Setes Slot", count: "" },
    { title: "Team Slot", count: "" },
    { title: "Add Slot", count: "+" },
  ];

  return (
    <React.StrictMode>
      <div className="cm1_page_title">Slots</div>
      <BodyTopbar titles={titles} onclick={(v) => setState({ sPage: v })} />
      {sPage === 0 ? (
        <MyTable
          nosearch
          nofilter
          title="Setes Slot"
          titles={[
            { name: "Truf Name/Id", cl: "tr4" },
            { name: "Ground/Price", cl: "tr3" },
            { name: "Time/Status", cl: "tr2" },
          ]}
          onclick={(v) => setState({ slot: slotsSetes[v] })}
          items={slotsSetesT}
        />
      ) : null}
      {sPage === 1 ? (
        <MyTable
          nosearch
          nofilter
          title="Team Slot"
          titles={[
            { name: "Truf Name/Id", cl: "tr4" },
            { name: "Ground/Price", cl: "tr3" },
            { name: "Time/Status", cl: "tr2" },
          ]}
          onclick={(v) => setState({ slot: slotsTeam[v] })}
          items={slotsTeamT}
        />
      ) : null}
      {sPage === 2 ? (
        <div className="hm1_baf1">
          <div className="cm1_tb_top">Create slot</div>
          <div className="hm1_baf1_formbody">
            <form id="slot_add_form" onSubmit={(e) => aPostSlot(e, props)}>
              <div className="hm1_baf1_a">
                <div className="hm1_baf1_ab">Details</div>
                <div className="hm1_baf1_ac">
                  <DropDown2A tit="Truf" id="truf" data={trufs} />
                  <Textbox1 tit="Start Time" id="s_time" type="time" />
                  <Textbox1 tit="End Time" id="e_time" type="time" />
                  <DropDown3 tit="Ground" id="ground" data={trufTypes} />
                </div>
                <div className="hm1_baf1_ac">
                  <input
                    type="checkbox"
                    checked={slotTypeforAdd === "s"}
                    onChange={(v) => {
                      if (slotTypeforAdd === "s")
                        setState({ slotTypeforAdd: null });
                      else setState({ slotTypeforAdd: "s" });
                    }}
                  />
                  <div className="cm1_tb1_b">Setes Slot</div>
                  <input
                    type="checkbox"
                    checked={slotTypeforAdd === "t"}
                    onChange={(v) => {
                      if (slotTypeforAdd === "t")
                        setState({ slotTypeforAdd: null });
                      else setState({ slotTypeforAdd: "t" });
                    }}
                  />
                  <div className="cm1_tb1_b">Team Slot</div>
                </div>
                {slotTypeforAdd === "s" ? (
                  <div className="hm1_baf1_ac">
                    <Textbox1 tit="Amount(Per/Head)" id="price" ph="150/-" />
                    <DropDown2B tit="Care Taker" id="ctaker" data={ctakers} />
                  </div>
                ) : null}
                {slotTypeforAdd === "t" ? (
                  <Textbox1
                    tit="Amount(One Truf)"
                    id="price"
                    ph="2000/-"
                    type="number"
                  />
                ) : null}
              </div>
              <div className="cm1_error center">{slotErrorAdd}</div>
              <div className="center">
                <button
                  style={{ background: slotLoadingAdd ? "gray" : "" }}
                  disabled={slotLoadingAdd}
                  type="submit"
                  className="hm1_add_btl2"
                >
                  +Create slot
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      {slot !== null ? <SlotPopup props={props} /> : null}
    </React.StrictMode>
  );
}
