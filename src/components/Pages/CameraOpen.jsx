import React, { useRef, useCallback, useState } from "react";
import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import AcidityText from "../../assets/images/AcidityText.png";
import TrioCircle from "../../assets/images/TrioCircle.png";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import axios from "axios";
import Footer from "../Layout/Footer";
import MyScratchCard from "../Layout/Scratch";
import { Buffer } from "buffer";


const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const ClickSelfi = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [imageSrc, setImageSrc] = React.useState("");


  const onCompleteScratch = () => {
    setTimeout(() => {
      navigate("/selfie-preview", { state: imageSrc });
    }, 1000);
    
  };

  const uploadImage = async (imageSrc) => {
    let formData = new FormData();
    const blob = await fetch(imageSrc).then((res) => res.blob());

    formData.append('upload_file', blob); 
    
    const headers = {
      HTTP_SECRETKEY: "ae9e762a",
      "Access-Control-Allow-Origin": "*",
      'content-type': 'multipart/form-data'
    };

    try {
      const resp = await axios.post(
        `https://vps.solmc.in/caricature/index.php`,
        formData,
        {
          headers
        }
      );      

      if (resp.data.status == 200) {
        const imageConverted = resp?.data?.filename;
        setImageSrc(imageConverted);
        setLoading(false);
        // navigate("/selfie-preview", { state: imageConverted });
        return;
      }
      
      setError(resp.data.message);
      
      // navigate("/selfie-preview", { state: imageConverted });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const capture = useCallback(async () => {
    setError("");
    if (loading) {
      return;
    }
    setLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc)
    await uploadImage(imageSrc);
  }, [webcamRef, navigate, uploadImage]);

  const webcamStyle = {
    height: "100%",
    width: "auto",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1000%",
  };

  return (
    <div className="w-[100%] h-[100vh] backImage">
      <Header />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: imageSrc ? '' : 'none'
        }}
      >
        {/* <img src={TrioCircle} alt="" /> */}
        <MyScratchCard onComplete={onCompleteScratch} />
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          overflow: "hidden",
          pointerEvents: 'none'
        }}
      >
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={720}
          videoConstraints={videoConstraints}
          style={webcamStyle}
        />

            <div
                style={{
                  width: "150px",
                  height: "150px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                  backgroundImage: `url(${imageSrc})`,
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  display: imageSrc ? 'block' : 'none',
                  zIndex: 1
                }}
              ></div>
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: "150px",
          maxWidth: '90%',
          wordWrap: 'break-word',
          textAlign: 'center'
        }}
      >
        <button
          className="btn bg-[#007DC4] text-white  rounded-lg "
          disabled={loading}
          style={{ padding: "10px 50px", display: imageSrc && !loading ? 'none' : 'inline'}}
          onClick={capture}
        >
          {loading ? "Please Wait" : "Capture"}
        </button>
        <p>{error}</p>
        <p style={{ display: imageSrc && !loading ? 'block' : 'none'}}>Please slide index fingers on the above circle Life Acidity Free Life Acidity Free Life Acidity</p>
      </div>

      {/* <button
        className="btn bg-[#007DC4] text-white  rounded-lg "
        onClick={capture}
      >
        Click
      </button> */}
      {/* <div
        className="center-content-flex bg-red-300  "
        style={{ height: "500px" }}
      >
        <div className="h-[100%] w-[100%]   relative  ">
          <img src={AcidityText} alt="" className="h-[100%] absolute" />
          <div className="absolute acidity-text-div">
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1280}
              videoConstraints={videoConstraints}
              style={webcamStyle}
              className="selfie-image camera-icon"
            />
            <img src={TrioCircle} alt="" className="selfie-circle" />
          </div>
        </div>
      </div>
      <div className="h-[6vh] w-[90%] flex justify-end">
        <button
          className="btn bg-[#007DC4] text-white  rounded-lg "
          onClick={capture}
        >
          Click
        </button>
      </div> */}

      <Footer />
    </div>
  );
};
export default ClickSelfi;