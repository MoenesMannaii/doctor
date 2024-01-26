import * as images from "../../../assets/index";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <section>
        <div class="lg:max-w-screen-xl mx-auto">
          <div class="container mx-auto flex py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 flex flex-col text-left items-start">
              <h1 class="DMsans sm:text-5xl tracking-wide text-4xl mb-4 font-semibold text-[#212529]">
                Get in touch <br /> with us
              </h1>

              <div className="flex items-center py-4 gap-2">
                <img src={images.location.src} alt="" />
                <p className="flex items-center font-medium">
                  346 Amauri Souza Street
                </p>
              </div>
              <div className="flex items-center py-4 gap-2">
                <img src={images.mail.src} alt="" />
                <p className="flex items-center font-medium">
                  contact@doctorcare.com
                </p>
              </div>
              <div className="py-4">
                <a
                  href="#_"
                  className="relative inline-flex items-center px-4 py-2 overflow-hidden text-lg font-medium border border-[#00856F] text-white bg-[#00856F] rounded-full group hover:bg-transparent hover:text-[#00856F] transition ease-in duration-300"
                >
                  <FaWhatsapp className="text-2xl mx-3" />
                  <span className="relative text-sm uppercase lg:text-base">
                    Schedule your appointment
                  </span>
                </a>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={images.contact.src}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
