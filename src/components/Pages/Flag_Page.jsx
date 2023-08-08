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
      <div
        className="center-content-flex flex-col "
        style={{ height: "700px" }}
      >
        <img src={DilliChaloText} alt="" />
        <div className=" h-[10%] center-content-flex ">
          <button className="button-design" onClick={handleClick}>
            Next
          </button>
        </div>
        <img
          src={FlagGif}
          alt=""
          className="absolute w-[100%]"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "350px",
            bottom: "25px",
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
export default Flag_Page;
