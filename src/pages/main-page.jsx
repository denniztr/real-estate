import Header from '../components/header/header';
import Card from '../components/card/card';

import { products } from '../data/product';

function MainPage() {
  return (
    <div className="h-screen w-full">
      <Header />
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
      <section className="bg-gray-200/50 px-20 py-12">
        <div className="flex">
          <div className="w-2/5">
            <h5 className="text-sm text-orange-600 tracking-wide font-semibold">
              OUR GOAL
            </h5>
            <p className="text-gray-800/90 text-5xl tracking-wide">
              We are dedicated <br /> to finding a house <br /> that you will
              love.
            </p>
          </div>
          <div className="w-3/5">
            <div className="mb-10">
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
            <div>Avatarka</div>
          </div>
        </div>
      </section>
      <section className="px-28 py-20">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h5 className="text-orange-600 tracking-wide font-normal">
              OUR REQUIREMENTS
            </h5>
            <p className="text-gray-800/90 md:text-4xl text-md tracking-wide">
              How we choose our listings.
            </p>
            <p className="py-4 text-xl text-gray-600/90 font-normal tracking-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{' '}
              Nullam scelerisque aliquam odio et faucibus.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-16 py-10">
            <div>
              <img src="/src/assets/img.png" alt="Image" />
            </div>
            <div className="flex flex-col justify-around">
              <div className="cursor-pointer p-6 rounded transition  duration-300 hover:bg-gray-200 hover:border-gray-600">
                <img src="/src/assets/icon1.png" alt="Icon" />
                <h5 className="text-gray-800/90 tracking-wider font-semibold pt-4">
                  STELLAR LOCATIONS
                </h5>
                <p className="text-gray-600/90 font-normal tracking-normal">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
              </div>
              <div className="cursor-pointer p-6 rounded transition  duration-300 hover:bg-gray-200">
                <img src="/src/assets/icon2.png" alt="Icon" />
                <h5 className="text-gray-800/90 tracking-wider font-semibold pt-4">
                  HIGH QUALITY BUILDS
                </h5>
                <p className="text-gray-600/90 font-normal tracking-normal">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
              </div>
              <div className="cursor-pointer p-6 rounded transition  duration-300 hover:bg-gray-200 hover:border-gray-600">
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
      <section className="h-[700px]">
        <div
          className="bg-cover bg-no-repeat w-full h-full"
          style={{
            backgroundImage: "url('/src/assets/background-middle.png')",
          }}
        ></div>
      </section>
      <section className="px-20 py-12 bg-gray-100/90">
        <div className="">
          <div className="w-[600px]">
            <h4 className="text-orange-600 tracking-wide font-normal">
              CURRENT LISTINGS
            </h4>
            <p className="text-gray-800/90 md:text-4xl text-md tracking-normal">
              What we have in store for you.
            </p>
            <p className="py-4 text-gray-600/90 font-normal tracking-normal">
              Morbi neque ex, condimentum dapibus congue et, vulputate ut
              ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
              nisi ultrices, ut faucibus orci tincidunt.
            </p>
          </div>
          <div className="py-4 flex flex-row flex-wrap justify-center gap-8">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
