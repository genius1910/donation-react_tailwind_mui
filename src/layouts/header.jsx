import logoImage from "../assets/image/logo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" border border-solid border-[#000] bg-mainBgColor">
      <div className=" m-auto max-w-mainMaxWidth">
        <div className=" flex justify-between">
          <div>
            <img src={logoImage} alt=""></img>
          </div>
          <div className=" p-2">
            <FaBars className=" h-[26px] w-[26px] text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
