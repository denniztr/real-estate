function Card() {
  return (
    <div className="w-96 h-96 cursor-pointer transition duration-300 hover:scale-105">
      <div className="h-full bg-white rounded-md">
        <div>
          <img
            src="/src/assets/product1.png"
            alt="Product"
            className="w-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="py-4 text-center">
            <h2 className="text-gray-600/90 tracking-widest">HOUSE</h2>
            <h5 className="text-gray-700/90 md:text-xl text-md tracking-normal font-semibold">
              California St.
            </h5>
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <div className="flex flex-row gap-1.5 text-sm text-gray-600/90 font-normal tracking-normal">
              <img
                className="w-5 h-5"
                src="/src/assets/Bed-Icon.svg"
                alt="BedIcon"
              />
              <p>16 beds</p>
            </div>
            <div className="flex flex-row gap-1.5 text-sm text-gray-600/90 font-normal tracking-normal">
              <img
                className="w-5 h-5"
                src="/src/assets/Bath-Icon.svg"
                alt="BathIcon"
              />
              <p>16 bathrooms</p>
            </div>
            <div className="flex flex-row gap-1.5 text-sm text-gray-600/90 font-normal tracking-normal">
              <img
                className="w-5 h-5"
                src="/src/assets/Door-Icon.svg"
                alt="DoorIcon"
              />
              <p>11 rooms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
