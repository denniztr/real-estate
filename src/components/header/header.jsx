/* eslint-disable react/prop-types */
function Header({ scrollToListings, scrollToNewsroom, scrollToContact, scrollToTeam }) {
  return (
    <header className="w-full bg-white drop-shadow-sm">
      <div className="py-4 md:px-36 px-4 flex flex-row justify-between">
        <div>
          <div className="flex flex-row gap-2 items-center">
            <img src="/src/assets/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-md text-black tracking-tight font-semibold">
              Estate
            </span>
          </div>
        </div>
        <nav className="flex flex-row flex-nowrap gap-12 text-sm items-center">
          <a
            className="transition duration-200 hover:text-orange-600/90 cursor-pointer"
            onClick={() => scrollToListings()}
          >
            Listings
          </a>
          <a
            className="transition duration-200 hover:text-orange-600/90 cursor-pointer"
            onClick={() => scrollToNewsroom()}
          >
            Newsroom
          </a>
          <a
            className="transition duration-200 hover:text-orange-600/90 cursor-pointer"
            onClick={() => scrollToContact()}
          >
            Contact
          </a>
          <a
            className="transition duration-200 hover:text-orange-600/90 cursor-pointer"
            onClick={() => scrollToTeam()}
          >
            Our team
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
