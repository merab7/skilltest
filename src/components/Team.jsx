import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Team = () => {
  const activeStyles = {
    textDecoration: 'underline',
  };

  return (
    <div className="team fixed top-0 right-0 left-0">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex pt-40 ml-5">
          <div className="text-9xl text-gray-500 font-semibold w-min -mt-2 -ml-48">02</div>
          <div>
            <h1 className="w-min absolute mt-16 font-extrabold -ml-2 text-2xl text-blue-950">
              CLIMB
            </h1>
            <div className="w-4 h-4 bg-gray-500 mt-24 -ml-2"></div>
          </div>
        </div>
        <div className="bg-white  p-4 rounded-xl w-96 ml-1 lg:mt-52 mt-5 md:w-1/2 md:ml-28">
        <p className="text-black">
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit
          ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
        </p>
      </div>
      </div>

     

      <div className="fixed top-96  right-0 left-0 bg-gray-900 mt-20 flex justify-center p-5 gap-8  ">
        <NavLink to="mountain1" activeStyle={activeStyles}>
          <div className="font-semibold text-gray-400 text-xl cursor-pointer hover:opacity-60  ">
            MOUNTAIN 1
          </div>
        </NavLink>
        <NavLink to="mountain2" activeStyle={activeStyles}>
          <div className="font-semibold text-gray-400 text-xl cursor-pointer hover:opacity-60">
            MOUNTAIN 2
          </div>
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Team;
