"use client";

export const NavigationBar = () => {
  return (
    <div className="w-2xl bg-slate-300 mx-auto rounded-xs absolute top-3 left-1/2 transform -translate-x-1/2 z-50 shadow-sm shadow-stone-950 border border-white">
      <ul className="flex flex-row justify-evenly items-center w-full h-10 ">
        <li className="cursor-pointer hover:text-cyan-700 ">Home</li>
        <li className="cursor-pointer hover:text-cyan-700">Products</li>
        <li className="cursor-pointer hover:text-cyan-700">About</li>
        <li className="cursor-pointer hover:text-cyan-700">News</li>
        <li className="cursor-pointer hover:text-cyan-700">Contact</li>
        <li className="cursor-pointer hover:text-cyan-700">Settings</li>
      </ul>
    </div>
  );
};

export default NavigationBar;
