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
        <img src={DilliChaloText} alt="" style={{pointerEvents: 'none'}}/>
        <img src={DilliChaloText} alt="" style={{pointerEvents: 'none'}}/>
        <img src={DilliChaloText} alt="" style={{pointerEvents: 'none'}}/>
        <img src={DilliChaloText} alt="" style={{pointerEvents: 'none'}}/>
        <div style={{position: 'absolute',left: '50%', transform: 'translate(-50%, 0)', bottom: '200px'}}>
          <button className="button-design" onClick={handleClick} >
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
            maxWidth: "320px",
            bottom: "25px",
            left: '50%',
            transform: 'translate(-50%, 0) rotate(-5deg)',
            pointerEvents: 'none'
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
export default Flag_Page;
