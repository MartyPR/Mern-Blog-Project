import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="overflow-hidden pb-24">
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
      </div>
      <div className="container px-4 mx-auto relative">
        <div className="relative z-20 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-6 mt-14 max-w-2xl mx-auto text-gray-900">
            <span>Explore the Power of</span>
            <span className="block text-green-600">Shared Wisdom</span>
          </h1>
          <p className="text-lg mb-10 max-w-lg mx-auto text-gray-700">
            Embark on a journey of discovery and growth. Connect, collaborate,
            and create with a global network of enthusiastic learners and
            thinkers.
          </p>
          <div className="flex justify-center lg:pb-56">
            <Link
              to="/register"
              className="w-full sm:w-auto h-16 inline-flex items-center justify-center text-center py-4 px-6 rounded-full bg-green-600 border border-green-700 shadow-lg font-bold font-heading text-white hover:bg-green-700 focus:ring focus:ring-green-200 transition duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Home;
