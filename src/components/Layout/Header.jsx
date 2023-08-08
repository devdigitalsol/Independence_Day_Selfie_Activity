import LOGO from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="h-[8%] w-[100%] flex justify-end absolute top-0 pr-4   ">
      <img
        src={LOGO}
        alt="logo"
        // className="xl:w-[15%] lg:w-[20%] md:w-[22%] sm:w-[25%] w-[32%] "
        className="w-[20%] h-[80%] pt-3 "
      />
    </div>
  );
};
export default Header;
