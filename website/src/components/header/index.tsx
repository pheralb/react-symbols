import Command from "../command";

const Header = () => (
  <div className="flex flex-col items-center justify-between mt-4 mb-4 space-y-6 md:mt-0 md:mb-6 md:py-6 md:space-y-0 md:flex-row">
    <h1 className="mb-1 font-sans text-3xl font-bold lg:text-4xl md:mb-0">
      Symbols by Miguel Solorio
    </h1>
    <Command />
  </div>
);

export default Header;
