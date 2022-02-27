import React, { useState } from "react";
import filterIcon from "../asset/filter_icon.png";

function MyTable({
  title,
  titles,
  items,
  onclick,
  fBody,
  search,
  nofilter,
  nosearch,
  searchph,
}) {
  const [show, setshow] = useState(false);
  return (
    <div className="cm1_tb">
      <div className="cm1_tb_pp" style={{ display: show ? "flex" : "none" }}>
        <div className="cm1_tb_ppbd">
          <div className="cm1_mb1_aa">
            Filter
            <div style={{ cursor: "pointer" }} onClick={() => setshow(false)}>
              X
            </div>
          </div>
          {fBody}
        </div>
      </div>
      <div className="cm1_tb_top">
        {title}
        {nosearch ? null : (
          <input
            onChange={search}
            className="cm1_tb_top_sr"
            placeholder={searchph}
          />
        )}
        {nofilter ? null : (
          <div onClick={() => setshow(true)} className="cm1_tb_top_fl">
            <img alt="No Img" src={filterIcon} width="14" />
            Filter
          </div>
        )}
      </div>
      <div className="cm1_tb_head">
        <div className="tr_5">No</div>
        {titles.map((t, k) => (
          <div key={k} className={t.cl}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="cm1_tb_body">
        {items.length === 0 ? (
          <div className="cm1_tb_a">No data</div>
        ) : (
          items.map((item, k) => (
            <div key={k} className="cm1_tb_rw" onClick={() => onclick(k)}>
              <div className="tr_5">{k + 1}</div>
              {item.map((t, tk) => (
                <div key={tk} className={titles[tk].cl}>
                  {t[0]}
                  <div
                    style={{ color: "#ccc", maxHeight: 45, overflow: "hidden" }}
                  >
                    {t.length === 2 ? t[1] : ""}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyTable;
