import { Github } from '@react-symbols/icons';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="sticky top-0 z-50 w-full pb-6 pl-4 pr-4 bg-black lg:pl-0 lg:pr-0">
    <div className="container pt-6 mx-auto ">
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="logo" className="w-8 h-8 mr-2" />
            <h1 className="ml-1 text-1xl">React-Symbols</h1>
          </div>
        </Link>
        <div className="flex items-center">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden mr-5 text-sm text-gray-400 lg:block"
          >
            VS Code Theme
          </a>
          <a
            href="https://github.com/pheralb/react-symbols"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:transform hover:scale-110"
          >
            <Github width="26px" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
