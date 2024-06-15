import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import logo from "/assets/logo/svg/Logo_Negro_Sin_Fondo.svg";
import MenuSvg from "./design/MenuSvg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
      enablePageScroll();
    } else {
      setOpenMenu(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openMenu) return;
    enablePageScroll();
    setOpenMenu(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-color-3 border-opacity-5 
        ${openMenu ? "bg-color-2/100" : "bg-color-2/90 backdrop-blur-sm"} 
        lg:backdrop-blur-sm`}>
      <div className="flex items-center px-5 justify-between lg:px-7 xl:px-10 lg:py-1">
        <a className="block xl:mr-8" href="#hero">
          <img src={logo} width={140} height={70} alt="Kilafy" />
        </a>

        <nav
          className={`${
            openMenu ? "flex" : "hidden"
          } fixed top-[71px] left-0 right-0 bottom-0 h-[calc(100vh-71px)] bg-color-2/90 backdrop-blur-sm lg:bg-transparent lg:static lg:flex lg:h-auto lg:backdrop-filter-none`}>
          <div className="relative z-10 flex flex-col items-center justify-evenly py-10 mx-auto lg:flex-row lg:py-0">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className="block relative text-2xl uppercase transition-colors hover:font-semibold px-6 py-6 
                            md:py-0 lg:text-sm lg:font-semibold lg:hover:font-bold lg:leading-5 xl:px-8">
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <button className="ml-auto lg:hidden" onClick={toggleMenu}>
          <MenuSvg openMenu={openMenu} />
        </button>
      </div>
    </div>
  );
};

export default Header;
