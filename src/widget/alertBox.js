import React from "react";

export function AlertBox({ show, body }) {
  return (
    <div className="cm1_abox_a" style={show ? { visibility: "visible" } : {}}>
      {body}
    </div>
  );
}

export function AlertBoxBody1({ title, body, onclose }) {
  return (
    <div className="cm1_abox_b">
      <div className="cm1_abox_c">
        <div>{title}</div>
        <div className="cm1_abox_d" onClick={onclose}>
          X
        </div>
      </div>
      {body}
    </div>
  );
}
