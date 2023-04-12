import React from "react";
import profilePicture from "../img/profile-picture.jpeg";
import "../components/Presentation.css";

const Presentation = () => {
  return (
    <div
      className="gradient-background presentacion"
      style={{ backgroundColor: "#1a202c" }}
    >
      <div className="container flex flex-col mx-auto gradient-background border-none sm:flex-row items-center justify-between py-12 sm:px-4">
        <div className="md:w-3/5 sm:w-full mb-8 md:mb-0 md:pr-8">
          <p className="text-white text-sm uppercase tracking-widest font-semibold">
            Bienvenidos
          </p>
          <h2 className="text-4xl text-white font-bold mt-4">
            Soy <span className="text-blue-500">Carlo Bonilla</span>, Ingeniero
            de Software
          </h2>
          <p className="text-gray-300 text-lg mt-6 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan odio ac mauris facilisis, sit amet ultrices tellus aliquam.
            Pellentesque interdum velit eget nulla lobortis, at hendrerit lacus
            bibendum.
          </p>
          <a
            href="#portfolio"
            className="border-2 border-blue-500 hover:border-blue-600 text-blue-500 hover:text-white font-semibold uppercase py-3 px-6 mt-8 rounded-md inline-block transition duration-300"
          >
            Ir a Portafolio
          </a>
        </div>
        <div className="md:w-2/5">
          <div className="h-48 w-48 mx-auto mb-6 md:mb-0">
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="rounded-full w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
