import FooterImg from "../../assets/images/Bottom Flag Img.png";

const Footer = () => {
  return (
    <img
        src={FooterImg}
        alt="footer"
        className="absolute"
        style={{bottom:'0px',left: '0px',width: '100%',height: 'auto', maxWidth: '100%',zIndex: 0}}
      />
  );
};
export default Footer;
