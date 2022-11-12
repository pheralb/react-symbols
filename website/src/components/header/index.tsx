import { Github } from "@react-symbols/icons";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="sticky top-0 z-50 w-full pb-4 pl-4 pr-4 bg-midnight lg:pl-0 lg:pr-0">
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
            href="https://www.producthunt.com/posts/react-symbols?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react&#0045;symbols"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=362706&theme=dark"
              alt="React&#0045;Symbols - ⭐&#0032;A&#0032;beautiful&#0032;icons&#0032;library&#0032;for&#0032;React&#0046; | Product Hunt"
              className="w-40 mr-5"
            />
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
