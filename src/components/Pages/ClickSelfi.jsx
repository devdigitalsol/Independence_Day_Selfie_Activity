import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import AcidityText from "../../assets/images/AcidityText.png";
import TrioCircle from "../../assets/images/TrioCircle.png";
import Camera from "../../assets/images/Camera.png";
import { useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer";
import MyScratchCard from "../Layout/Scratch";

const ClickSelfi = () => {
  const navigate = useNavigate();

  const handleCameraClick = () => {
    navigate("/camera_open");
  };

  return (
    <div className=" w-[100%] h-[100vh] backImage">
      <Header />
      <div className="center-content-flex ">
        <img src={AcidityText} alt="" className=" absolute" />
        <div className=" absolute acidity-text-div center-content-tr   ">
          <img src={Camera} alt="" className="absolute  center-content-tr" />
          <img
            src={TrioCircle}
            alt=""
            className="absolute  center-content-tr"
            onClick={handleCameraClick}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ClickSelfi;
