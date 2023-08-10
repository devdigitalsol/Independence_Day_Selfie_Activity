import LOGO1 from "../../assets/images/Logo1.png";

const Logo1 = () => {
  return (
    <img
      src={LOGO1}
      alt="logo1"
      className="absolute"
      style={{
        top: "10px",
        left: "10px",
        width: "100%",
        height: "auto",
        maxWidth: "65px",
        zIndex: 100,
        pointerEvents: "none",
      }}
    />
  );
};
export default Logo1;
