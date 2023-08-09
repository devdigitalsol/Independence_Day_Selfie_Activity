import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import HeroText from "../../assets/images/We Salute Our Hero XXXX.svg";
import Fighter1 from "../../assets/images/Fighter1.png";
import Fighter2 from "../../assets/images/Fighter2.png";
import Fighter3 from "../../assets/images/Fighter3.png";
import Fighter4 from "../../assets/images/Fighter4.png";
import BackFlag from "../../assets/images/BackFlagImage.png";
import "../../components/Layout/Animation.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer";

const HeroPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/camera_open");
  };

  return (
    <div className=" w-[100%] h-[100vh] backImage" style={{overflow: 'auto',padding: '0 0 100px 0'}}>
      <Header />
      <div className="  relative" style={{width: '390px', height: '590px', margin: '-40px auto 0 auto', transform: 'scale(.7)'}}>
            <img src={BackFlag} alt="" className="absolute mt-40  " />
            {/* div's for animation */}
            <div className="h-[100%] w-[100%]">
              <div className="h-[40%]  flex flex-row">
                <div className="w-[50%] mt-20 animated fadeInLeft ">
                  <img src={Fighter1} alt="" />
                </div>
                <div className="w-[50%] animated fadeInRight">
                  <img src={Fighter2} alt="" />
                </div>
              </div>
              <div className="h-[40%]  flex flex-row">
                <div className="w-[50%] mt-24  animated fadeInUp">
                  <img src={Fighter3} alt="" />
                </div>
                <div className="w-[50%] animated fadeInRight">
                  <img src={Fighter4} alt="" />
                </div>
              </div>
              <div className="h-[10%]"></div>
            </div>
            {/*  div's close */}
          </div>
          <div className="flex justify-center items-center animated fadeInLeft" style={{marginTop: '-130px'}}>
            <img src={HeroText} alt="" className="w-[80%] h-[120%]" />
          </div>
      <div className=" center-content-flex">
        <button className="button-design" onClick={handleClick} style={{marginTop: '10px'}}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default HeroPage;
