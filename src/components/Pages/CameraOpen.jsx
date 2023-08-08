import React, { useRef, useCallback, useState } from "react";
import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import AcidityText from "../../assets/images/AcidityText.png";
import TrioCircle from "../../assets/images/TrioCircle.png";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import axios from "axios";

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

  const webcamStyle = {
    objectFit: "fill",
  };

  return (
    <div className=" w-[100%] h-[100vh] backImage">
      <div className="h-[8vh]">
        <Header />
      </div>
      <div className="h-[69vh] flex justify-center items-center  ">
        <div className="h-[100%] w-[100%] xl:w-[40%]  relative  ">
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
      </div>

      {/* footer */}
      <div className="h-[17vh] ">
        <img src={FooterImg} alt="" className="h-[17vh]" />
      </div>
    </div>
  );
};
export default ClickSelfi;
