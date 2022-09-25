import { Github } from "@react-symbols/icons";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="sticky top-0 z-50 w-full pb-4 pl-4 pr-4 bg-black lg:pl-0 lg:pr-0">
    <div className="container pt-4 mx-auto ">
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center duration-200 ease-in-out hover:-translate-y-0.5">
            <img src="/images/logo.png" alt="logo" className="w-12 h-12 mr-1" />
            <h1 className="ml-1 text-1xl">React-Symbols</h1>
          </div>
        </Link>
        <div className="flex items-center">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden mr-5 text-sm text-gray-400 duration-200 ease-in-out lg:block hover:-translate-y-0.5"
          >
            VSCode Theme
          </a>
          <a
            href="https://github.com/pheralb/react-symbols"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-200 ease-in-out hover:-translate-y-0.5"
          >
            <Github width="26px" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
