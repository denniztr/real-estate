import Header from '../components/header/header';
import Card from '../components/card/card';
import Footer from '../components/footer/footer';

import { products } from '../data/product';

function MainPage() {
  const scrollToListings = () => {
    const listings = document.getElementById('listings');
    listings.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNewsroom = () => {
    const newsroom = document.getElementById('newsroom');
    newsroom.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contacts = document.getElementById('contacts');
    contacts.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTeam = () => {
    const team = document.getElementById('team');
    team.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    const top = document.getElementById('top');
    top.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen w-full" id="top">
      <Header
        scrollToListings={scrollToListings}
        scrollToNewsroom={scrollToNewsroom}
        scrollToContact={scrollToContact}
        scrollToTeam={scrollToTeam}
        scrollToTop={scrollToTop}
      />
      <section className="h-[700px] relative">
        <div
          className="bg-cover bg-no-repeat w-full h-full bg-white opacity-40"
          style={{
            backgroundImage: "url('/src/assets/background-top.png')",
          }}
        ></div>
        <div className="flex flex-col gap-4 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <img src="/src/assets/logo.svg" alt="Logo" className="w-16 h-16" />
            <span className="text-5xl text-gray-700 font-bold tracking-wide">
              Estate
            </span>
          </div>
          <div>
            <h3 className="text-3xl text-gray-800/90 font-normal tracking-normal text-center">
              We are here to help you find a <br /> new home.
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-gray-200/50 md:px-20 py-12">
        <div className="flex flex-wrap pb-8">
          <div className="md:w-2/5 w-full px-2">
            <h5 className="text-sm text-orange-600 tracking-widest font-normal">
              OUR GOAL
            </h5>
            <p className="hidden mb:block text-gray-800/90 tracking-wide text-xl  md:text-5xl md:font-normal font-semibold">
              We are dedicated <br /> to finding a house <br /> that you will
              love.
            </p>
            <p className="mb:hidden md:text-5xl block w-full text-gray-800/90 tracking-wide text-xl md:font-normal font-semibold py-2">
              We are dedicated to finding a house <br /> that you will love.
            </p>
          </div>
          <div className="md:w-3/5 w-full p-2">
            <div className="my-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Interdum nulla, ut commodo diam libero vitae
                erat. Aenean faucibus nibh et justo cursus id rutrum lorem
                imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
              <p>
                Interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-6 items-center">
              <img
                className="w-10 h-10"
                src="/src/assets/avatar2.png"
                alt="Avatar"
              />
              <span className="font-normal text-gray-700 text-md">
                Nate Davidsson
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-28 md:py-20 py-12">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h5 className="text-orange-600 tracking-widest font-normal">
              OUR REQUIREMENTS
            </h5>
            <p className="w-full text-gray-800/90 tracking-wide text-xl md:font-normal font-semibold py-2">
              How we choose our listings.
            </p>
            <p className="py-4 text-xl text-gray-600/90 font-normal tracking-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{' '}
              Nullam scelerisque aliquam odio et faucibus.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-16 py-10">
            <div className="px-2">
              <img src="/src/assets/img.png" alt="Image" />
            </div>
            <div className="flex flex-col justify-around md:w-auto w-full px-4">
              <div className="cursor-pointer p-6 rounded transition  duration-300 hover:bg-gray-200 hover:border-gray-600 active:bg-gray-200 active:border-gray-600">
                <img src="/src/assets/icon1.png" alt="Icon" />
                <h5 className="text-gray-800/90 tracking-wider font-semibold pt-4">
                  STELLAR LOCATIONS
                </h5>
                <p className="text-gray-600/90 font-normal tracking-normal">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
              </div>
              <div className="cursor-pointer p-6 rounded transition  duration-300 hover:bg-gray-200 active:bg-gray-200 active:border-gray-600">
                <img src="/src/assets/icon2.png" alt="Icon" />
                <h5 className="text-gray-800/90 tracking-wider font-semibold pt-4">
                  HIGH QUALITY BUILDS
                </h5>
                <p className="text-gray-600/90 font-normal tracking-normal">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
              </div>
              <div className="cursor-pointer p-6 rounded transition  duration-300 hover:bg-gray-200 hover:border-gray-600 active:bg-gray-200 active:border-gray-600">
                <img src="/src/assets/icon3.png" alt="Icon" />
                <h5 className="text-gray-800/90 tracking-wider font-semibold pt-4">
                  EXPERT INTERIOR DESIGN
                </h5>
                <p className="text-gray-600/90 font-normal tracking-normal">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:block h-[700px]">
        <div
          className="bg-cover bg-no-repeat w-full h-full"
          style={{
            backgroundImage: "url('/src/assets/background-middle.png')",
          }}
        ></div>
      </section>
      <section className="md:px-20 px-2 py-12 bg-gray-100/90" id="listings">
        <div>
          <div className="max-w-[600px]">
            <h4 className="text-orange-600 tracking-widest font-normal">
              CURRENT LISTINGS
            </h4>
            <p className="w-full text-gray-800/90 tracking-wide text-xl md:text-4xl md:font-normal font-semibold py-2">
              What we have in store for you.
            </p>
            <p className="py-4 text-gray-600/90 font-normal tracking-normal">
              Morbi neque ex, condimentum dapibus congue et, vulputate ut
              ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
              nisi ultrices, ut faucibus orci tincidunt.
            </p>
          </div>
          <div className="p-4 flex flex-row flex-wrap justify-center gap-8">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          <p className="text-center text-gray-600/90 tracking-widest cursor-pointer transition hover:text-gray-600 py-4">
            Show all listings <span>&#8594;</span>
          </p>
        </div>
      </section>
      <section className="md:px-40 px-2 py-12" id="team">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="md:w-2/5 pb-8 px-2">
            <h4 className="text-orange-600 tracking-widest font-normal">
              OUR PEOPLE
            </h4>
            <p className="w-full text-gray-800/90 tracking-wide text-xl md:text-4xl md:font-normal font-semibold py-2">
              Meet our team of dedicated and <br /> talented agents.
            </p>
            <p className="py-4 text-gray-600/90 font-normal tracking-normal">
              Morbi neque ex, condimentum dapibus congue et, vulputate ut
              ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
              nisi ultrices, ut faucibus orci tincidunt.
            </p>
            <p className="hidden md:block text-gray-600/90 tracking-widest cursor-pointer transition hover:text-gray-600">
              View our team <span>&#8594;</span>
            </p>
          </div>
          <div className="md:w-4/5 pl-10 flex flex-row flex-wrap justify-around items-center">
            <div className="">
              <div className="flex flex-row gap-6 items-center">
                <img src="/src/assets/avatar.png" alt="Avatar" />
                <div className="flex flex-col">
                  <h5 className="text-gray-800/90 tracking-widest">
                    David Sporer
                  </h5>
                  <p className="text-gray-600/90 tracking-widest">AGENT</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center py-6">
                <img src="/src/assets/avatar2.png" alt="Avatar" />
                <div className="flex flex-col">
                  <h5 className="text-gray-800/90 tracking-widest">Ava Orn</h5>
                  <p className="text-gray-600/90 tracking-widest">
                    Managing Broker
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center">
                <img src="/src/assets/avatar3.png" alt="Avatar" />
                <div className="flex flex-col">
                  <h5 className="text-gray-800/90 tracking-widest">
                    Ella Hessel
                  </h5>
                  <p className="text-gray-600/90 tracking-widest">AGENT</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-6 items-center">
                <img src="/src/assets/avatar4.png" alt="Avatar" />
                <div className="flex flex-col">
                  <h5 className="text-gray-800/90 tracking-widest">
                    Daryl Gislason
                  </h5>
                  <p className="text-gray-600/90 tracking-widest">REALTOR</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center py-6">
                <img src="/src/assets/avatar5.png" alt="Avatar" />
                <div className="flex flex-col">
                  <h5 className="text-gray-800/90 tracking-widest">
                    Trevor Torphy
                  </h5>
                  <p className="text-gray-600/90 tracking-widest">AGENT</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center">
                <img src="/src/assets/avatar6.png" alt="Avatar" />
                <div className="flex flex-col">
                  <h5 className="text-gray-800/90 tracking-widest">
                    Amanda Giovanni
                  </h5>
                  <p className="text-gray-600/90 tracking-widest">REALTOR</p>
                </div>
              </div>
              <p className="md:hidden block text-gray-600/90 text-center py-8 pb-0 tracking-widest cursor-pointer transition hover:text-gray-600">
                View our team <span>&#8594;</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" md:px-20 px-2 py-12 bg-gray-100/90">
        <div id="newsroom">
          <div className="text-center">
            <h1 className="text-orange-600 tracking-widest font-normal">
              NEWSROOM
            </h1>
            <p className="w-full text-gray-800/90 tracking-wide text-xl md:text-4xl md:font-normal font-semibold py-2">
              Writing from Estate.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-6 justify-center my-10">
            <div className="w-96 h-96 cursor-pointer transition duration-300 hover:scale-105">
              <div className="h-full bg-white rounded-md">
                <div>
                  <img
                    src="/src/assets/news1.png"
                    alt="Product"
                    className="w-full"
                  />
                </div>
                <div className="p-7">
                  <div>
                    <h4 className="text-md text-orange-600 tracking-wide font-thin">
                      PRESS RELEASE
                    </h4>
                    <p className="py-4 font-md text-gray-800/90">
                      Market watch: are condos still a good investment?
                    </p>
                    <span className="text-sm text-gray-600/90">
                      August 12, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 h-96 cursor-pointer transition duration-300 hover:scale-105">
              <div className="h-full bg-white rounded-md">
                <div>
                  <img
                    src="/src/assets/news2.png"
                    alt="Product"
                    className="w-full"
                  />
                </div>
                <div className="p-7">
                  <div>
                    <h4 className="text-md text-orange-600 tracking-wide font-thin">
                      ANNOUNCEMENT
                    </h4>
                    <p className="py-4 font-md text-gray-800/90">
                      The history of great design
                    </p>
                    <span className="text-sm text-gray-600/90">
                      August 13, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 h-96 cursor-pointer transition duration-300 hover:scale-105">
              <div className="h-full bg-white rounded-md">
                <div>
                  <img
                    src="/src/assets/news3.png"
                    alt="Product"
                    className="w-full"
                  />
                </div>
                <div className="p-7">
                  <div>
                    <h4 className="text-md text-orange-600 tracking-wide font-thin">
                      COMPANY NEWS
                    </h4>
                    <p className="py-4 font-md text-gray-800/90">
                      Designers who changed everything
                    </p>
                    <span className="text-sm text-gray-600/90">
                      August 13, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600/90 tracking-widest cursor-pointer transition hover:text-gray-600 py-4">
            Newsroom <span>&#8594;</span>
          </p>
        </div>
      </section>
      <section className="md:px-20 px-2 py-12">
        <div>
          <div className="px-2">
            <h4 className="text-orange-600 tracking-widest font-normal">
              TESTIMONIALS
            </h4>
            <p className="w-full text-gray-800/90 tracking-wide text-xl md:text-4xl md:font-normal font-semibold py-2">
              What our customers say.
            </p>
          </div>
          <div className="py-10 flex flex-row flex-wrap gap-6">
            <div className="p-6 w-[580px] border-[1px]">
              <h2 className="text-gray-800/90 pb-4 text-xl tracking-normal font-semibold">
                We found the perfect home!
              </h2>
              <p className="text-sm text-gray-600/90 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <div className="flex flex-row gap-2 mt-6">
                <hr className=" w-0.5 h-5 bg-orange-500" />
                <span className="font-normal text-gray-900 text-sm">
                  Nate Davidsson
                </span>
              </div>
            </div>
            <div className="p-6 w-[580px] border-[1px]">
              <h2 className="text-gray-800/90 pb-4 text-xl tracking-normal font-semibold">
                We are so happy with Estate.
              </h2>
              <p className="text-sm text-gray-600/90 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.
              </p>
              <div className="flex flex-row gap-2 mt-6">
                <hr className=" w-0.5 h-5 bg-orange-500" />
                <span className="font-normal text-gray-900 text-sm">
                  Laura Paulie
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-800/90 py-24 text-center flex flex-col items-center justify-center"
        id="contacts"
      >
        <h4 className="text-white text-sm font-thin tracking-wider">
          Seen enough?
        </h4>
        <h5 className="text-white text-4xl md:px-0 px-2">
          Get in touch with us today.
        </h5>
        <p className="md:block mb:py-6 hidden text-white py-10">
          Morbi neque ex, condimentum dapibus congue et, vulputate ut <br />
          {''}
          ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et <br />{' '}
          nisi ultrices, ut faucibus orci tincidunt.
        </p>
        <div className="flex flex-row gap-6 pt-10 md:pt-0">
          <button className="bg-white py-2 px-4 rounded">Contact</button>
          <button className="bg-white py-2 px-4 rounded">See listings</button>
        </div>
      </section>
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}

export default MainPage;
