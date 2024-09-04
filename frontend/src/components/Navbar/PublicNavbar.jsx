import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
const PublicNavbar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow-md">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-shrink-0 items-center">
                {/* <FaBlog className="h-8 w-auto text-green-600" /> */}
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link
                  to="/"
                  className="inline-flex items-center border-b-2 border-green-500 px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-700"
                >
                  Home
                </Link>
                <Link
                  to="/posts"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-green-300 hover:text-green-700"
                >
                  Latest Posts
                </Link>
                <Link
                  to="/ranking"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-green-300 hover:text-green-700"
                >
                  Creators Ranking
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-green-300 hover:text-green-700"
                >
                  Pricing
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-green-300 hover:text-green-700"
                >
                  Create Account
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  to="/create-post"
                  className="relative inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                  Create Post
                </Link>
              </div>
              <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <Disclosure.Button
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-green-300 hover:bg-green-50 hover:text-green-700"
            >
              Home
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-green-300 hover:bg-green-50 hover:text-green-700"
            >
              Latest Posts
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-green-300 hover:bg-green-50 hover:text-green-700"
            >
              Pricing
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-green-300 hover:bg-green-50 hover:text-green-700"
            >
              Create Account
            </Disclosure.Button>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  );
};

export default PublicNavbar;
