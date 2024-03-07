/* eslint-disable react/prop-types */
export function Menu({ handleClick }) {
  return (
    <div onClick={() => handleClick()} className="space-y-1 md:hidden flex flex-col items-center justify-center">
      <span className="block w-8 h-0.5 bg-gray-600"></span>
      <span className="block w-8 h-0.5 bg-gray-600"></span>
      <span className="block w-8 h-0.5 bg-gray-600"></span>
    </div>
  );
}
