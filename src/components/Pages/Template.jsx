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
import Header from "../Layout/Header";
import Logo1 from "../Layout/Logo1";
import Logo2 from "../Layout/Logo2";

const Template = () => {
  const [loading, setLoading] = useState(false);
  const [download, setDownload] = useState(false);

  const { userData } = useUserContext();

  const location = useLocation();
  const imageConverted = location.state;

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

    setDownload(true);
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
    <>
      <div className=" w-[100%] h-[100vh]  backImage" id="templateView">
        <Header />
        <Logo1 />
        <div className="flex justify-center items-center pt-10 ">
          <div className="w-[95%] ">
            <div className="center-content-flex" style={{ marginTop: "5px" }}>
              <img src={FirstText} alt="first-text h-[60%]" />
            </div>
            <div className="center-content-flex mt-[-6px] ">
              <p className="p-dynamic-text font-['Poppins'] font-extrabold">
                {userData.noOfPatientsDaily * userData.noOfYearsPractice * 365}{" "}
                times
              </p>
            </div>
            <div className="center-content-flex">
              <img src={Text2} alt="text2" />
            </div>
            <div className="relative " style={{ marginTop: "5px" }}>
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                  backgroundImage: `url(${imageConverted})`,
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>

              <img
                src={TrioCircle}
                alt="flag-circle"
                style={{
                  width: "220px",
                  height: "auto",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  position: "relative",
                }}
              />
            </div>
            <div className="center-content-flex" style={{ marginTop: "5px" }}>
              <img src={Text3} alt="Text3" className="w-[80%]" />
            </div>
          </div>
        </div>
        <div
          data-html2canvas-ignore="true"
          className=" flex justify-center items-center  "
          style={{
            display: download ? "none" : "flex",
          }}
        >
          <button
            className="download-button-design"
            onClick={downLoadPoster}
            disabled={loading}
            style={{ marginTop: "10px" }}
          >
            Download
          </button>
        </div>
        <Logo2 />
        <Footer />
        <p className="text-[4px] absolute bottom-5 right-12  w-[40%] text-center font-semibold">
          GGI-CO-A1-AQS-300027513-AM-G23-0684
        </p>
        <p className="text-[4px] absolute bottom-3 right-8 text-center font-semibold">
          * Creative expression {"  "} For the use of registered medical
          practitioners, hospitals or laboratories only.
        </p>
      </div>
    </>
  );
};
export default Template;
