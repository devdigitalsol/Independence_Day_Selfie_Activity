import Header from "../Layout/Header";
import FooterImg from "../../assets/images/Bottom Flag Img.png";
import LastText from "../../assets/images/Last Frame Text_This Independence dayXXXX.svg";
import Omez from "../../assets/images/Text2.png";
import Text3 from "../../assets/images/Happy Independence Day 15 Aug.svg";
import TrioCircle from "../../assets/images/TrioCircle.png";
import html2canvas from "html2canvas";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Template = () => {
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const imageConverted = location.state;

  const downLoadPoster = () => {
    setLoading(true);
    window.scrollTo(0, 0);
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
      <div className="h-[8vh]">
        <Header />
      </div>
      <div className="h-[69vh] flex justify-center items-center">
        <div className="h-[100%] w-[90%] xl:w-[40%] lg:w-[60%] md:w-[70%] sm:w-[80%]  ">
          <div className="h-[15%] ">
            <img src={LastText} alt="" className="h-[100%]  " />
          </div>
          <div className="h-[8%]  flex justify-center items-center">
            <p className="xl:text-xl lg:text-3xl md:text-4xl text-2xl italic  text-[#007DC4]">
              1000 times
            </p>
          </div>
          <div className="h-[15%] flex justify-center items-center ">
            <img
              src={Omez}
              alt=""
              className="h-[100%] xl:w-[60%] lg:w-[60%] md:w-[60%] w-[80%]  "
            />
          </div>
          <div className="h-[42%] relative  ">
            <img src={imageConverted} alt="" className="selfie-image" />
            <img src={TrioCircle} alt="" className="selfie-circle" />
          </div>
          <div className="h-[20%]  flex justify-center items-center">
            <img
              src={Text3}
              alt=""
              className="h-[100%] xl:w-[60%] lg:w-[60%] md:w-[60%] w-[80%]"
            />
          </div>
        </div>
      </div>
      {/* for download button */}
      <div className="h-[6vh]  flex justify-center items-center ">
        <button
          className="btn bg-[#007DC4] text-white  rounded-lg "
          onClick={downLoadPoster}
          disabled={loading}
        >
          DOWNLOAD
        </button>
      </div>
      {/* footer */}
      <div className="h-[17vh] ">
        <img src={FooterImg} alt="" className="h-[17vh]" />
      </div>
    </div>
  );
};
export default Template;
