function SideBar({ props, pages }) {
  const setState = (v) => props.setState(v);
  const state = props.state;
  return (
    <div className="hm1_sb1_a">
      {pages.map((p, k) => (
        <div
          key={k}
          className="hm1_sb1_ab"
          style={
            k === state.page
              ? {
                  background: "rgb(193, 233, 255)",
                  borderLeft: "4px solid #0075BA",
                }
              : {}
          }
          onClick={() => setState({ page: k, sPage: 0 })}
        >
          <img alt="No Img" className="hm1_sb1_abs" src={p.icon} />
          {p.title}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
