import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import DilliChaloText from "../../assets/images/DilliChalo.png";
import { useNavigate } from "react-router-dom";
import FlagGif from "../../assets/images/Flag.gif";
import Footer from "../Layout/Footer";
const Flag_Page = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/heropage");
  };

  return (
    <div className=" w-[100%] h-[100vh] backImage">
      <Header />
      <div className="h-[72vh]    ">
        <div className="h-[100%] w-[100%] relative  ">
          <img src={DilliChaloText} alt="" className=" h-[90%] " />

          <div className=" h-[10%] center-content-flex   ">
            <button className="button-design" onClick={handleClick}>
              Next
            </button>
          </div>
        </div>
        <img
          src={FlagGif}
          alt=""
          className="absolute bottom-0 h-[85%] w-[70%] left-16"
        />
      </div>
      <Footer/>
    </div>
    
  );
};
export default Flag_Page;
