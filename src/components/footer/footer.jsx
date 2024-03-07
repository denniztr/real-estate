function Footer() {
  return (
    <footer className="bg-gray-900 py-24 px-32">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-end">
          <img src="/src/assets/logoFooter.svg" alt="Logo" />
          <h1 className="text-white font-semibold text-2xl">Estate</h1>
        </div>
        <div className="flex flex-row gap-24 pt-16">
          <div>
            <h4 className="text-sm text-orange-600 tracking-widest font-thin pb-2">
              PAGES
            </h4>
            <ul className="text-white font-thin flex flex-col gap-1">
              <a href="">
                <li>Start</li>
              </a>
              <a href="">
                <li>Listing</li>
              </a>
              <a href="">
                <li>Listings alt. 2</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
              <a href="">
                <li>Legal</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-orange-600 tracking-widest font-thin  pb-2">
              COMPANY
            </h4>
            <ul className="text-white font-thin  flex flex-col gap-1">
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Our team</li>
              </a>
              <a href="">
                <li>Newsroom</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-orange-600 tracking-widest font-thin  pb-2">
              UTILITY
            </h4>
            <ul className="text-white font-thin  flex flex-col gap-1">
              <a href="">
                <li>Instructions</li>
              </a>
              <a href="">
                <li>Style guide</li>
              </a>
              <a href="">
                <li>Licenses</li>
              </a>
              <a href="">
                <li>Changelog</li>
              </a>
              <a href="">
                <li>404</li>
              </a>
            </ul>
          </div>
          <div className="max-w-[450px]">
            <h4 className="text-sm text-orange-600 tracking-widest font-thin  pb-2">
              NEWSLETTER
            </h4>
            <p className="text-white font-thin  pb-2">
              Subscribe to our (infrequent) newsletter where we share news about
              upcoming listings and projects.
            </p>
            <div className="relative">
              <input
                className="w-full rounded outline-none p-2"
                placeholder="Email"
                type="email"
              />
              <button className="absolute py-1 px-2 bg-gray-600 text-white rounded right-1 top-1">
                Submit
              </button>
              <div className="flex flex-row gap-4 absolute right-0 pt-10">
                <img
                  className="cursor-pointer"
                  src="/src/assets/in.svg"
                  alt=""
                />
                <img
                  className="cursor-pointer"
                  src="/src/assets/facebook.svg"
                  alt=""
                />
                <img
                  className="cursor-pointer"
                  src="/src/assets/inst.svg"
                  alt=""
                />
                <img
                  className="cursor-pointer"
                  src="/src/assets/twitter.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
