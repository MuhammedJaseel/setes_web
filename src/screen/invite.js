import axios from "axios";
import React, { Component } from "react";
import { base } from "../module/a_apiinit";

export default class InviteScreen extends Component {
  componentDidMount() {
    const id = window.location.pathname.split("/")[2] ?? "";

    axios
      .get("https://ipapi.co/json")
      .then((res) => {
        console.log(res.data.ip);
        axios
          .post(base + "invite", { ip: res.data.ip, id })
          .then((res) => {
            window.location = res.data;
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  render() {
    return <div></div>;
  }
}
