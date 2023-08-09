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
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const uploadImage = async (imageSrc) => {
    let strImage = imageSrc.replace(/^data:image\/[a-z]+;base64,/, "");
    try {
      const resp = await axios.post(
        `https://3d-cartoon-face.p.rapidapi.com/run`,
        {
          image: strImage,
          render_mode: "anime",
          output_mode: "base64",
        },
        {
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
              "3e31858802mshdb353e945e71814p1ebd9djsnd7bcd3f8ca9f",
            "X-RapidAPI-Host": "3d-cartoon-face.p.rapidapi.com",
          },
        }
      );
      if (resp.status === 215) {
        setError(resp.data.msg);
        setLoading(false);
        return;
      }
      console.log(resp);
      const imageConverted = resp?.data?.output_base64;
      navigate("/selfie-preview", { state: imageConverted });
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
        }}
      >
        <img src={TrioCircle} alt="" />
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
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: "150px",
        }}
      >
        <button
          className="btn bg-[#007DC4] text-white  rounded-lg "
          disabled={loading}
          style={{ padding: "10px 50px" }}
          onClick={capture}
        >
          {loading ? "Please Wait" : "Capture"}
        </button>
        <p>{error}</p>
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
