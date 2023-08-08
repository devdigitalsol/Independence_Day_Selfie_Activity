import LOGO from "../../assets/images/logo.png";

const Header = () => {
  return (
    <img
        src={LOGO}
        alt="logo"
        className="absolute"
        style={{top:'10px',right: '10px',width: '100%',height: 'auto', maxWidth: '75px', zIndex: 0}}
      />
  );
};
export default Header;
