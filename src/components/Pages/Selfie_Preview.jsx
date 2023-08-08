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
      <div className="h-[100%] w-[100%] xl:w-[40%]  relative   ">
        <img src={AcidityText} alt="" className="h-[100%] absolute" />
        <div className=" absolute acidity-text-div">
          <img
            src={imageConverted}
            alt=""
            className="absolute h-[70%] w-[50%] center-circle rounded-full  "
          />
          <img
            src={TrioCircle}
            alt=""
            className="absolute h-[80%] w-[60%] center-circle"
          />
        </div>
      </div>
      <div className="h-[6vh] bg-blue-600 flex justify-center items-center">
        <button
          className="btn bg-[#007DC4] text-white  rounded-lg "
          onClick={handleClick}
        >
          NEXT
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default Selfie_Preview;
