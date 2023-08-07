import FooterImg from "../../assets/images/Bottom Flag Img.png";

const Footer = () => {
  return (
    <div className=" absolute w-[100vw] bottom-0 ">
      <img
        src={FooterImg}
        alt="footer"
        className="w-[100%] xl:h-[25%] lg:h-[23%] md:h-[20%] sm:h-[10%] "
      />
    </div>
  );
};
export default Footer;
