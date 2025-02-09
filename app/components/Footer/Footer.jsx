import * as images from "../../../assets/index";
import { FaCode } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer class="bg-[#00856F]">
      <div class="lg:max-w-screen-xl mx-auto py-8">
        <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <div className="block">
            <a href="#">
              <img class="w-auto h-7" src={images.footerLogo.src} alt="" />
            </a>

            <p className="text-[#FFFAF1] text-center sm:text-left py-8 text-normal font-normal">
              ©2024 - DoctorCare. <br /> All rights reserved.
            </p>
          </div>

          <div class="flex -mx-2">
            <a
              href="#"
              class="mx-2 transition-colors duration-300"
              aria-label="Reddit"
            >
              <img src={images.instagram.src} alt="" />
            </a>

            <a
              href="#"
              class="mx-2 transition-colors duration-300"
              aria-label="Facebook"
            >
              <img src={images.facebook.src} alt="" />
            </a>

            <a
              href="#"
              class="mx-2 transition-colors duration-300"
              aria-label="Github"
            >
              <img src={images.youtube.src} alt="" />
            </a>
          </div>
        </div>
      </div>
  
    </footer>
  );
};
