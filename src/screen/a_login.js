import React, { Component } from "react";
import "../style/li1.css";
import applogo from "../asset/setes.png";
import { adminLogin } from "../method/a_login";

export default class AdmimLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      error: null,
    };
  }

  render() {
    const { loading, error } = this.state;
    return (
      <React.StrictMode>
        <div className="li1_a"></div>
        <div className="li1_b">
          <div className="li1_ba">
            <div className="li1_baa">
              <img alt="fgh" width="100" src={applogo} />
              {/* <div className="li1_baaa">LOGO</div> */}
              <div className="li1_baab">Log in to your account</div>
              <form onSubmit={(e) => adminLogin(e, this)}>
                <input
                  required
                  id="id"
                  className="li1_baac"
                  placeholder="Username"
                />
                <input
                  required
                  id="pass"
                  className="li1_baac"
                  type="password"
                  placeholder="Password"
                />
                <div className="cm1_error center">{error}</div>
                <button
                  style={{ background: loading ? "gray" : "" }}
                  disabled={loading}
                  type="submit"
                  className="li1_baad"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
          {/* <div className="li1_bb">Can't log in?</div> */}
          <div className="li1_bc"></div>
        </div>
      </React.StrictMode>
    );
  }
}
