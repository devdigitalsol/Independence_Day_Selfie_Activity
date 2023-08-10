import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import AcidityText from "../../assets/images/AcidityText.png";
import TrioCircle from "../../assets/images/TrioCircle.png";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../Layout/Footer";

const Selfie_Preview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imageConverted = location.state;

  const handleClick = () => {
    navigate("/template", { state: imageConverted });
  };

  return (
    <div className=" w-[100%] h-[100vh] backImage">
      <Header />

      {/* <img src={AcidityText} alt="" className=" absolute" />
      <img src={AcidityText} alt="" className=" absolute" /> */}
      <div
        style={{
          position: "absolute",
          backgroundImage: `url(${AcidityText})`,
          height: "100%",
          width: "100%",
          zIndex: "0",
          backgroundSize: "100% auto",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
        }}
      >
        <img
          src={imageConverted}
          alt=""
          className="absolute  center-content-tr"
          style={{
            position: "absolute",
            top: "50%",
            width: "50%",
            height: "233px",
            width: "233px",
            borderRadius: "50%",
            left: "50%",
          }}
        />
        <img src={TrioCircle} alt="" className="zIndex:677" />

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            marginTop: "200px",
          }}
        >
          <button
            className="btn bg-[#007DC4] text-white  rounded-lg "
            style={{ padding: "10px 50px" }}
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Selfie_Preview;
