import Header from '../components/header/header';

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
            <p className="text-gray-800/90 text-5xl tracking-wide ">
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
            </div>
            <div>Avatarka</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
