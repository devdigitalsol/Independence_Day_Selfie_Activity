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

const HeroPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/click_selfi");
  };

  return (
    <div className=" w-[100%] h-[100vh] backImage">
      <div className="h-[8vh]">
        <Header />
      </div>
      <div className="h-[69vh] flex justify-center items-center ">
        <div className="h-[100%] w-[90%] xl:w-[50%] lg:w-[80%] md:w-[90%] sm:w-[90%]  pb-4   ">
          <div className="h-[90%]  relative">
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
          <div className="h-[10%]  flex justify-center items-center animated fadeInLeft">
            <img src={HeroText} alt="" className="w-[80%] h-[120%]" />
          </div>
        </div>
      </div>
      <div className="h-[6vh]  center-content-flex w-[90%]">
        <button className="button-design" onClick={handleClick}>
          Next
        </button>
      </div>

      {/* footer */}
      <div className="h-[17vh] ">
        <img src={FooterImg} alt="" className="h-[17vh]" />
      </div>
    </div>
  );
};
export default HeroPage;
