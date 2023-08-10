import LOGO2 from "../../assets/images/Logo2.png";

const Logo2 = () => {
  return (
    <img
      src={LOGO2}
      alt="logo1"
      className="absolute"
      style={{
        bottom: "40px",
        right: "10px",
        width: "100%",
        height: "auto",
        maxWidth: "100px",
        zIndex: 100,
        pointerEvents: "none",
      }}
    />
  );
};
export default Logo2;
