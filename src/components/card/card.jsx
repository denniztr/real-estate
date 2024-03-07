/* eslint-disable react/prop-types */
function Card({product}) {
  return (
    <div className="w-96 h-96 cursor-pointer transition duration-300 hover:scale-105">
      <div className="h-full bg-white rounded-md">
        <div>
          <img
            src={product.img}
            alt="Product"
            className="w-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="py-4 text-center">
            <h2 className="text-gray-600/90 tracking-widest">{product.type}</h2>
            <h5 className="text-gray-700/90 md:text-xl text-md tracking-normal font-semibold">
              {product.address}
            </h5>
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <div className="flex flex-row gap-1.5 text-sm text-gray-600/90 font-normal tracking-normal">
              <img
                className="w-5 h-5"
                src="/public/Bed-Icon.svg"
                alt="BedIcon"
              />
              <p>{product.beds} beds</p>
            </div>
            <div className="flex flex-row gap-1.5 text-sm text-gray-600/90 font-normal tracking-normal">
              <img
                className="w-5 h-5"
                src="/public/Bath-Icon.svg"
                alt="BathIcon"
              />
              <p>{product.baths} bathrooms</p>
            </div>
            <div className="flex flex-row gap-1.5 text-sm text-gray-600/90 font-normal tracking-normal">
              <img
                className="w-5 h-5"
                src="/public/Door-Icon.svg"
                alt="DoorIcon"
              />
              <p>{product.rooms} rooms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
