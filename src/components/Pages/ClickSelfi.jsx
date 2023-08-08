import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import AcidityText from "../../assets/images/AcidityText.png";
import TrioCircle from "../../assets/images/TrioCircle.png";
import Camera from "../../assets/images/Camera.png";
import { useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer";
import MyScratchCard from "../Layout/Scratch";
import React from "react";


const ClickSelfi = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);


  const handleCameraClick = () => {
    navigate("/camera_open");
  };

  const onCompleteScratch = () => {
    setVisible(true);
  };

  return (
    <div className=" w-[100%] h-[100vh] backImage">
      <Header />
      
      <img src={AcidityText} alt="" className=" absolute" />

      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>



        {/* <img src={AcidityText} alt="" className=" absolute" />
        <div className=" absolute acidity-text-div center-content-tr   ">
          <img src={Camera} alt="" className="absolute  center-content-tr" />
          <img
            src={TrioCircle}
            alt=""
            className="absolute  center-content-tr"
            onClick={handleCameraClick}
          />
          
        </div>
 */}
        <MyScratchCard onComplete={onCompleteScratch}/>
        <img src={Camera} alt="" onClick={handleCameraClick} className="absolute  center-content-tr" style={{
          display: visible ? 'block' : 'none',
          position: 'absolute',
          top: '150px',
          width: '200px',
          zIndex: 2
        }}/>

        <h2 className="text-center">Please slide index fingers on the above circle Life Acidity Free Life Acidity Free Life Acidity </h2>
      </div>
      <Footer />
    </div>
  );
};
export default ClickSelfi;
