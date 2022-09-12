import { Vite, Github } from '@react-symbols/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="sticky w-full py-5 pl-5 pr-6 border-b-2 border-zinc-800 bg-zinc-900">
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="logo" className="w-8 h-8 mr-2" />
            <h1 className="ml-1 text-1xl">React-Symbols</h1>
          </div>
        </Link>
        <div className="flex items-center">
          <a
            href="https://github.com/pheralb/react-symbols"
            target="_blank"
            className="transition-all hover:transform hover:scale-110"
          >
            <Github width="26px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
