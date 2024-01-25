"use client";
import { useState } from "react";
import * as images from "../../../assets/index";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#DCE9E2]">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="DoctorCare Logo"
            title="DoctorCare"
            class="inline-flex items-center"
          >
            <img src={images.logo.src} alt="" />
          </a>
          <ul class="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Home"
                title="Home"
                class="font-medium tracking-wide text-[#00856F] transition-colors duration-200 hover:text-deep-purple-accent-400 hover:border-b-2 hover:border-[#00856F] py-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-[#00856F] transition-colors duration-200 hover:text-deep-purple-accent-400 hover:border-b-2 hover:border-[#00856F] py-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Services"
                title="Services"
                class="font-medium tracking-wide text-[#00856F] transition-colors duration-200 hover:text-deep-purple-accent-400 hover:border-b-2 hover:border-[#00856F] py-4"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Depositions"
                title="Depositions"
                class="font-medium tracking-wide text-[#00856F] transition-colors duration-200 hover:text-deep-purple-accent-400 hover:border-b-2 hover:border-[#00856F] py-4"
              >
                Depositions
              </a>
            </li>
          </ul>
          <ul class="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="#_"
                class="relative inline-flex items-center px-4 py-2 overflow-hidden text-lg font-medium text-[#00856F] border border-[#00856F] rounded-full group hover:bg-[#00856F] hover:text-white transition ease-in duration-300"
              >
                <span class="relative">Schedule appointment</span>
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <HiOutlineMenuAlt3 className="text-3xl text-[#00856F]" />
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <img src={images.logo.src} alt="" />
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-[#212529]" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Home"
                          title="Home"
                          class="font-medium tracking-wide text-[#00856F] transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-[#00856F] transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Services"
                          title="Services"
                          class="font-medium tracking-wide text-[#00856F] transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Depositions"
                          title="Depositions"
                          class="font-medium tracking-wide text-[#00856F] transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Depositions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#_"
                          class="relative inline-flex items-center px-4 py-2 overflow-hidden text-lg font-medium text-[#00856F] border border-[#00856F] rounded-full group hover:bg-[#00856F] hover:text-white transition ease-in duration-300"
                        >
                          <span class="relative">Schedule appointment</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
