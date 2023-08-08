import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import AcidityText from "../../assets/images/AcidityText.png";
import TrioCircle from "../../assets/images/TrioCircle.png";
import Camera from "../../assets/images/Camera.png";
import { useNavigate } from "react-router-dom";

const ClickSelfi = () => {
  const navigate = useNavigate();

  const handleCameraClick = () => {
    navigate("/camera_open");
  };

  return (
    <div className=" w-[100%] h-[100vh] backImage">
      <div className="h-[8vh]">
        <Header />
      </div>
      <div className="h-[72vh] flex justify-center items-center  ">
        <div className="h-[100%] w-[100%] xl:w-[40%]  relative   ">
          <img src={AcidityText} alt="" className="h-[100%] absolute" />
          <div className=" absolute acidity-text-div center-content-tr   ">
            <img
              src={Camera}
              alt=""
              className="absolute h-[50%] w-[40%] center-content-tr"
            />
            <img
              src={TrioCircle}
              alt=""
              className="absolute h-[100%] w-[80%] center-content-tr"
              onClick={handleCameraClick}
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="h-[20vh] ">
        <img src={FooterImg} alt="" className="h-[20vh]" />
      </div>
    </div>
  );
};
export default ClickSelfi;
