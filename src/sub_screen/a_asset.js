import React from "react";
import BodyTopbar from "../widget/body_topbar";

export default function AAssets({ props }) {
  const titles = [
    { title: "Setes Details", count: "" },
    { title: "Users Details", count: "" },
    { title: "Truf Zons", count: "" },
  ];

  return (
    <React.StrictMode>
      <div className="cm1_page_title">Assets</div>
      <BodyTopbar
        titles={titles}
        onclick={(v) => props.setState({ sPage: v })}
      />
      <AAssetsBody props={props} />
    </React.StrictMode>
  );
}

function AAssetsBody({ props }) {
  const { sPage, assets } = props.state;
  const contact = assets.contact;
  if (sPage === 0)
    return (
      <div className="hm2_aAs_a">
        <div className="hm2_aAs_b">
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="Phone" />
            <input className="hm2_aAs_c" defaultValue={contact?.phone1} />
            <button className="hm2_aAs_e">Update</button>
          </div>
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="Ph:(Pub)" />
            <input className="hm2_aAs_c" defaultValue={contact?.phone2} />
            <button className="hm2_aAs_e">Update</button>
          </div>
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="Ph:(Pub)" />
            <input className="hm2_aAs_c" defaultValue={contact?.phone2} />
            <button className="hm2_aAs_e">Update</button>
          </div>
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="Email" />
            <input className="hm2_aAs_c" defaultValue={contact?.phone2} />
            <button className="hm2_aAs_e">Update</button>
          </div>
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="Email:(Pub)" />
            <input className="hm2_aAs_c" defaultValue={contact?.phone2} />
            <button className="hm2_aAs_e">Update</button>
          </div>
        </div>

        <div className="hm2_aAs_b">
          <div className="hm2_aAs_d">
            <input
              className="hm2_aAs_c"
              disabled
              defaultValue="Prime Membership Annual Charge"
            />
            <input className="hm2_aAs_c" defaultValue={assets.price_yr / 100} />
            <button className="hm2_aAs_e">Update Annual Charge</button>
          </div>
          <div className="hm2_aAs_d">
            <input
              className="hm2_aAs_c"
              disabled
              defaultValue="Prime Membership Monthly Charge"
            />
            <input className="hm2_aAs_c" defaultValue={assets.price_pm / 100} />
            <button className="hm2_aAs_e">Update Monthly Charge</button>
          </div>
        </div>
      </div>
    );
  if (sPage === 1)
    return (
      <div className="hm2_aAs_a">
        <div className="hm2_aAs_b">
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="Blood Groups" />
            <button className="hm2_aAs_e">+ Add</button>
          </div>
          <div className="hm2_aAs_b">
            {assets.blood_groups.map((it, k) => (
              <input key={k} className="hm2_aAs_c" defaultValue={it} />
            ))}
          </div>
        </div>
        <div className="hm2_aAs_b">
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="Boot Sizes" />
            <button className="hm2_aAs_e">+ Add</button>
          </div>
          <div className="hm2_aAs_b">
            {assets.boot_sizes.map((it, k) => (
              <input key={k} className="hm2_aAs_c" defaultValue={it} />
            ))}
          </div>
        </div>
        <div className="hm2_aAs_b">
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="TShirt Sizes" />
            <button className="hm2_aAs_e">+ Add</button>
          </div>
          <div className="hm2_aAs_b">
            {assets.tshirt_sizes.map((it, k) => (
              <input key={k} className="hm2_aAs_c" defaultValue={it} />
            ))}
          </div>
        </div>
        <div className="hm2_aAs_b">
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="Positions" />
            <button className="hm2_aAs_e">+ Add</button>
          </div>
          <div className="hm2_aAs_b">
            {assets.positions.map((it, k) => (
              <input key={k} className="hm2_aAs_c" defaultValue={it} />
            ))}
          </div>
        </div>
        <div className="hm2_aAs_b">
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="Strong Foots" />
            <button className="hm2_aAs_e">+ Add</button>
          </div>
          <div className="hm2_aAs_b">
            {assets.strong_foots.map((it, k) => (
              <input key={k} className="hm2_aAs_c" defaultValue={it} />
            ))}
          </div>
        </div>
      </div>
    );
  if (sPage === 2)
    return (
      <div className="hm2_aAs_a">
        <div className="hm2_aAs_b">
          <div className="hm2_aAs_d">
            <input className="hm2_aAs_c" disabled defaultValue="India" />
            <button className="hm2_aAs_e">+ Add State</button>
          </div>
          <div className="hm2_aAs_b">
            {assets.locations.map((z, k) => (
              <React.StrictMode key={k}>
                <div className="hm2_aAs_d">
                  <input className="hm2_aAs_f" defaultValue={z.code} />
                  <input className="hm2_aAs_c" defaultValue={z.title} />
                  <button className="hm2_aAs_e">
                    + Add District inside {z.title}
                  </button>
                </div>

                <div className="hm2_aAs_b">
                  {z.zone.map((z1, k1) => (
                    <React.StrictMode key={k1}>
                      <div className="hm2_aAs_d">
                        <input className="hm2_aAs_f" defaultValue={z1.code} />
                        <input className="hm2_aAs_c" defaultValue={z1.title} />
                        <button className="hm2_aAs_e">
                          + Add Zone inside {z1.title}
                        </button>
                      </div>
                      <div className="hm2_aAs_b">
                        {z1.zone.map((z2, k2) => (
                          <div key={k2}>
                            <input
                              className="hm2_aAs_f"
                              defaultValue={z2.code}
                            />
                            <input
                              key={k}
                              className="hm2_aAs_c"
                              defaultValue={z2.title}
                            />
                          </div>
                        ))}
                      </div>
                    </React.StrictMode>
                  ))}
                </div>
              </React.StrictMode>
            ))}
          </div>
        </div>
      </div>
    );
}
