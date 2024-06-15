const MenuSvg = ({ openMenu }) => {
  return (
    <svg
      className="overflow-visible"
      width="25"
      height="15"
      viewBox="0 0 25 15">
      <rect
        className="transition-all origin-center"
        y={openMenu ? "6" : "0"}
        width="25"
        height="3"
        rx="1"
        fill="color-3"
        transform={`rotate(${openMenu ? "45" : "0"})`}
      />
      <rect
        className="transition-all origin-center"
        y={openMenu ? "6" : "12"}
        width="25"
        height="3"
        rx="1"
        fill="color-3"
        transform={`rotate(${openMenu ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
