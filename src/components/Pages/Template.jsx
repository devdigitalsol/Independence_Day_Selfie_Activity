import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import Omez from "../../assets/images/Text2.png";
import TrioCircle from "../../assets/images/TrioCircle.png";
import html2canvas from "html2canvas";
import FirstText from "../../assets/images/Asset-21.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Text3 from "../../assets/images/HappyIndependence.png";
import { useUserContext } from "../context/UserContext";
import Text2 from "../../assets/images/Asset21_2.png";
import axios from "axios";
import Footer from "../Layout/Footer";

const Template = () => {
  const [loading, setLoading] = useState(false);
  const { userData } = useUserContext();

  const location = useLocation();
  const imageConverted = location.state;
  console.log(imageConverted, "image url");

  const downLoadPoster = () => {
    setLoading(true);
    window.scrollTo(0, 0);
    const apiURl = "https://independenceday.acidityfreelife.com/api/index.php";
    const requestBody = {
      operation: "save_doctor_info",
      emp_id: userData.employeeCode,
      doctor_name: userData.employeeName,
      years_of_practice: userData.noOfYearsPractice.toString(),
      pts_treated_daily: userData.noOfPatientsDaily.toString(),
      media_path: imageConverted,
    };
    const headers = {
      HTTP_SECRETKEY: "ae9e762a",
      // Content_Type: "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .post(apiURl, requestBody, { headers })
      .then((response) => {
        console.log("API Response", response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    html2canvas(document.getElementById("templateView"), {
      allowTaint: true,
      useCORS: true,
      logging: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      onrendered: function (canvas) {
        document.body.appendChild(canvas);
        window.scrollTo(0, 0);
      },
    })
      .then(async (canvas) => {
        var myImage = canvas.toDataURL("image/jpeg", 0.8);
        const link = document.createElement("a");
        link.href = myImage;
        link.target = "_blank";
        link.setAttribute("download", "image.jpeg");
        document.body.appendChild(link);
        link.click();
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
        alert("oops, something went wrong!", error);
      });
  };

  return (
    <div className=" w-[100%] h-[100vh]  backImage" id="templateView">
      <Header />
      <div className="h-[69vh]  flex justify-center items-center pt-10 ">
        <div className="h-[100%] w-[95%] ">
          <div className="h-[20%]  center-content-flex">
            <img src={FirstText} alt="first-text h-[60%]" />
          </div>
          <div className="h-[5%]  center-content-flex ">
            <p className="p-dynamic-text">1000 times</p>
          </div>
          <div className="h-[5%] center-content-flex">
            <img src={Text2} alt="text2" />
          </div>
          <div className="h-[14%] center-content-flex">
            <img src={Omez} alt="omez" className="w-[60%]" />
          </div>
          <div className="h-[41%] relative ">
            <img
              src={imageConverted}
              alt="selfi-image"
              className="absolute h-[90%] w-[50%] center-circle rounded-full left-20 "
            />
            <img
              src={TrioCircle}
              alt="flag-circle"
              className="absolute h-[100%] w-[60%] center-circle left-16"
            />
          </div>
          <div className="h-[15%]  center-content-flex">
            <img src={Text3} alt="Text3" className="w-[80%]" />
          </div>
        </div>
      </div>
      <div className="h-[6vh]  flex justify-center items-center  ">
        <button
          className="button-design"
          onClick={downLoadPoster}
          disabled={loading}
        >
          Download
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default Template;
