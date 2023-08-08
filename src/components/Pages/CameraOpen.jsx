import React, { useRef, useCallback, useState } from "react";
import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import AcidityText from "../../assets/images/AcidityText.png";
import TrioCircle from "../../assets/images/TrioCircle.png";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import axios from "axios";
import Footer from "../Layout/Footer";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const ClickSelfi = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  const uploadImage = async (imageSrc) => {
    let strImage = imageSrc.replace(/^data:image\/[a-z]+;base64,/, "");
    try {
      const resp = await axios.post(
        `https://3d-cartoon-face.p.rapidapi.com/run`,
        {
          image: strImage,
          render_mode: "anime",
          output_mode: "url",
        },
        {
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
              "0e0787dec1mshff15b713adeeda3p109951jsn11a9e6d0a7f4",
            "X-RapidAPI-Host": "3d-cartoon-face.p.rapidapi.com",
          },
        }
      );
      const imageConverted = resp?.data?.output_url;
      navigate("/selfie-preview", { state: imageConverted });
    } catch (error) {
      console.log(error);
    }
  };

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    await uploadImage(imageSrc);
  }, [webcamRef, navigate, uploadImage]);

  const webcamStyle = {};

  return (
    <div className="w-[100%] h-[100vh] backImage">
      <Header />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
          }}
        >
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
            style={webcamStyle}
          />
        </div>

        <img src={TrioCircle} alt="" />
      </div>
      <button
        className="btn bg-[#007DC4] text-white  rounded-lg "
        onClick={capture}
      >
        Click
      </button>
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
