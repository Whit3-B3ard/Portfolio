import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pb-10 md:pb-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <img src="../../image/cropped-face.png" alt="Image"></img>
          </div>

          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            Ibrahim Mansour
          </h6>

          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            MERN Full-Stack Developer
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            As a MERN Full-Stack Developer, I leverage my diverse expertise in
            service processing, delivery control, and team management to create
            efficient and user-friendly software solutions.
          </p>

          <Link
            to="/contact"
            href="#"
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
