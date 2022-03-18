import React, { Component } from "react";

import SideBar from "../widget/sidebar";
import { Loading } from "../widget/warnings";
import { adminLogOut } from "../method/a_login";
import { aGetHome, aHomeReload, onsocketMsg } from "../method/a_home";

import logoutIcon from "../asset/logout_icon.png";
import maxIcon from "../asset/maximize_icon.png";
import refreshIcon from "../asset/setting_icon.png";
import profile from "../asset/profile.png";
import bellIcon from "../asset/bell_icon.png";
import alertedBell from "../asset/alerted_bell.png";
import notiIcon from "../asset/notification_icon.png";
import eventIcon from "../asset/events.png";
import trufIcon from "../asset/store.png";
import slotIcon from "../asset/slot-machine.png";
import bookingIcon from "../asset/booking.png";
import membersIcon from "../asset/man.png";
import settingsIcon from "../asset/gear_icon.png";
import caretakerIcon from "../asset/bidding_icon.png";
import matchIcon from "../asset/option.png";
import assetIcon from "../asset/asset.png";

import AMembers from "../sub_screen/a_members";
import AEvents from "../sub_screen/a_events";
import ANotifications from "../sub_screen/a_notifications";
import ATruf from "../sub_screen/a_truf";
import Aslot from "../sub_screen/a_slot";
import AMatch from "../sub_screen/a_matchs";
import ABooking from "../sub_screen/a_bookings";
import ASettings from "../sub_screen/a_settings";
import ACtaker from "../sub_screen/a_ctaker";
import AAssets from "../sub_screen/a_asset";

import { w3cwebsocket as W3CWebSocket } from "websocket";
import { wsUrl } from "../module/a_apiinit";

export default class AdminHomePage extends Component {
  constructor() {
    super();
    this.state = {
      fullbody: false,
      page: 0,
      sPage: 0,
      loading: 0,
      sLoading: 0,
      error: null,
      sError: null,

      pushNoti: 0,

      assets: {},
      zones: null,

      noti: null,
      notis: {},
      notisT: {},

      member: null,
      members: {},
      membersT: {},

      events: [],
      eventsT: [],
      eventPage: 0,
      eventLoadingAdd: false,
      eventErrorAdd: null,
      eventEdit: null,

      trufs: [],
      trufsT: [],
      trufPage: 0,
      trufLoadingAdd: false,
      trufErrorAdd: null,
      trufEdit: null,

      slot: null,
      slots: [],
      slotsT: [],
      slotLoadingAdd: false,
      slotErrorAdd: null,
      slotEdit: null,

      match: null,
      matchs: [],
      matchsT: [],

      ctaker: null,
      ctakers: [],
      ctakersT: [],

      admin: null,
      admins: [],
      adminsT: [],

      booking: null,
      bookings: [],
      bookingsT: [],
    };
  }

  connectSocket() {
    var client = new W3CWebSocket(wsUrl + sessionStorage.getItem("userId"));
    client.onopen = () => {};
    client.onmessage = (m) => onsocketMsg(m, this);
    client.onclose = () => setTimeout(() => this.connectSocket(), 10000);
  }

  componentDidMount() {
    this.connectSocket();
    aGetHome(this);
  }

  render() {
    const { loading, fullbody, pushNoti, page } = this.state;
    const setState = (v) => this.setState(v);
    const pages = [
      {
        icon: notiIcon,
        title: "Notifications",
        page: <ANotifications props={this} />,
      },
      {
        icon: membersIcon,
        title: "Members",
        page: <AMembers props={this} />,
      },
      {
        icon: eventIcon,
        title: "Events",
        page: <AEvents props={this} />,
      },
      {
        icon: trufIcon,
        title: "Truf",
        page: <ATruf props={this} />,
      },
      {
        icon: slotIcon,
        title: "All Slots",
        page: <Aslot props={this} />,
      },
      {
        icon: matchIcon,
        title: "Match",
        page: <AMatch props={this} />,
      },
      {
        icon: bookingIcon,
        title: "Bookings",
        page: <ABooking props={this} />,
      },
      {
        icon: caretakerIcon,
        title: "Care Taker",
        page: <ACtaker props={this} />,
      },
      {
        icon: assetIcon,
        title: "Assets",
        page: <AAssets props={this} />,
      },
      {
        icon: settingsIcon,
        title: "Setttings",
        page: <ASettings props={this} />,
      },
    ];

    return (
      <div className="hm1_screen">
        <div className="hm1_top">
          <div className="hm1_top_a">
            <img alt="No Img" src={profile} width="60" />
            <div className="hm1_top_ab">
              Admin
              {/* {sessionStorage.getItem("userName")} */}
            </div>
            <div className="hm1_top_ac">
              <div
                className="hm1_top_aca"
                onClick={() => setState({ page: 0 })}
              >
                {pushNoti === 0 ? (
                  <img alt="No Img" src={bellIcon} width="16" />
                ) : (
                  <img alt="No Img" src={alertedBell} width="20" />
                )}
                &nbsp; Notification
              </div>
              <div className="hm1_top_acb" onClick={() => aHomeReload(this)}>
                <img alt="No Img" src={refreshIcon} width="16" />
                &nbsp;&nbsp;Refresh
              </div>
            </div>
          </div>
          <div className="hm1_top_b" onClick={adminLogOut}>
            <img alt="No Img" src={logoutIcon} width="20" />
            &nbsp;&nbsp;LogOut
          </div>
        </div>
        <div className="hm1_bottom">
          <SideBar props={this} pages={pages} />
        </div>
        <div className="hm1_body" style={fullbody ? { top: 20, left: 20 } : {}}>
          {loading < 100 ? <Loading value={loading} /> : pages[page].page}
          <div
            className="hm1_max_button"
            onClick={() => this.setState({ fullbody: !fullbody })}
          >
            <img alt="No Img" src={maxIcon} width="20" />
          </div>
        </div>
      </div>
    );
  }
}
