import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import DilliChaloText from "../../assets/images/DilliChalo.png";
import { useNavigate } from "react-router-dom";
import FlagImg from "../../assets/images/FlagImage.png";
import FlagGif from "../../assets/images/Flag.gif";

const Flag_Page = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/heropage");
  };

  return (
    <div className=" w-[100%] h-[100vh] backImage">
      <div className="h-[8vh] ">
        <Header />
      </div>
      <div className="h-[72vh]    ">
        <div className="h-[100%] w-[100%] ">
          <img src={DilliChaloText} alt="" className=" h-[60%]" />

          <div className=" h-[40%]  flex justify-end items-center ">
            <div className="flex   h-[40%] w-[100%]  justify-end items-center">
              <button
                className="btn bg-[#007DC4] text-white  rounded-lg h-[50%] w-[20%] mr-8 "
                onClick={handleClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={FlagGif} alt="" className="flagImage-relative" /> */}

      {/* footer */}
      <div className="h-[20vh]  relative">
        <img src={FooterImg} alt="" className="h-[20vh]" />
      </div>
    </div>
  );
};
export default Flag_Page;
