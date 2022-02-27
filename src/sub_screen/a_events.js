import React from "react";
import { AlertBox, AlertBoxBody1 } from "../widget/alertBox";
import BodyTopbar from "../widget/body_topbar";
import MyTable from "../widget/table";
import { Textbox1, Textbox2, Textbox4 } from "../widget/textbox";
import { aDeleteEvent, aPostEvent, aPutEvent } from "../method/a_event";
import { setEventImg } from "../module/a_apiinit";

export default function AEvents({ props }) {
  const { events, eventsT, eventEdit } = props.state;
  const { eventPage, eventLoadingAdd, eventErrorAdd } = props.state;
  const setState = (v) => props.setState(v);
  const setEdit = (v) =>
    setState({ eventEdit: eventEdit === null ? events[v] : null });
  const titles = [
    { title: "All events", count: "" },
    { title: "Add Events", count: "+" },
  ];

  const editBody = (
    <AlertBoxBody1
      onclose={setEdit}
      title="Update Event"
      body={
        eventEdit != null ? (
          <div className="hm1_baf1">
            <div className="hm1_baf1_formbody">
              <form id="event_edit_form" onSubmit={(e) => aPutEvent(e, props)}>
                <div className="hm1_baf1_a">
                  <div className="hm1_baf1_ab">Details</div>
                  <div className="hm1_baf1_ac">
                    <Textbox1 tit="Title" id="title" dv={eventEdit.title} />
                    <Textbox1
                      tit="Sub Title"
                      id="sub_title"
                      dv={eventEdit.sub_title}
                    />
                  </div>
                  <div className="hm1_baf1_ac">
                    <Textbox2 tit="Date" id="date" dv={eventEdit.date} />
                    <Textbox1
                      tit="Location"
                      id="gpsloc"
                      dv={eventEdit.gpsloc}
                    />
                    <Textbox4 tit="Choose a photo" id="img" />
                  </div>
                  <textarea
                    placeholder="Disctiption"
                    className="hm1_input_tab"
                    id="desc"
                    defaultValue={eventEdit.desc}
                    rows={3}
                  />
                  <img
                    alt="Event"
                    className="hm1_baf1_b"
                    src={setEventImg(eventEdit.img)}
                  />
                </div>
                <div className="cm1_error center">{eventErrorAdd}</div>
                <div className="center">
                  <button
                    style={{ background: eventLoadingAdd ? "gray" : "" }}
                    disabled={eventLoadingAdd}
                    className="hm1_add_btl2"
                    onClick={() => aDeleteEvent(props)}
                  >
                    Delete Event
                  </button>
                  <button
                    style={{ background: eventLoadingAdd ? "gray" : "" }}
                    disabled={eventLoadingAdd}
                    type="submit"
                    className="hm1_add_btl2"
                  >
                    Update Event
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
      <div className="cm1_page_title">Events</div>
      <BodyTopbar titles={titles} onclick={(v) => setState({ eventPage: v })} />
      {eventPage === 0 ? (
        <MyTable
          nosearch
          nofilter
          title="All Events"
          titles={[
            { name: "Title", cl: "tr5" },
            { name: "Date", cl: "tr4" },
          ]}
          onclick={setEdit}
          items={eventsT}
        />
      ) : (
        <div className="hm1_baf1">
          <div className="cm1_tb_top">Create Event</div>
          <div className="hm1_baf1_formbody">
            <form id="bid_add_form" onSubmit={(e) => aPostEvent(e, props)}>
              <div className="hm1_baf1_a">
                <div className="hm1_baf1_ab">Details</div>
                <div className="hm1_baf1_ac">
                  <Textbox1 tit="Title" id="title" ph="Event Title" />
                  <Textbox1
                    tit="Sub Title"
                    id="sub_title"
                    ph="Event Sub Title"
                  />
                </div>
                <div className="hm1_baf1_ac">
                  <Textbox2 tit="Starting Date" id="date" />
                  <Textbox1 tit="Location" id="gpsloc" ph="0.1221,23.34345" />
                  <Textbox4 tit="Choose a photo" id="img" />
                </div>
                <textarea
                  placeholder="Disctiption"
                  className="hm1_input_tab"
                  id="desc"
                  rows={3}
                />
              </div>
              <div className="cm1_error center">{eventErrorAdd}</div>
              <div className="center">
                <button
                  style={{ background: eventLoadingAdd ? "gray" : "" }}
                  disabled={eventLoadingAdd}
                  type="submit"
                  className="hm1_add_btl2"
                >
                  +Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <AlertBox show={eventEdit !== null} body={editBody} />
    </React.StrictMode>
  );
}
