import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import * as images from "../../../assets/index";

const StatisticBlock = ({ value, label }) => (
  <div className="inline-block p-20 text-center">
    <h2 className="title-font font-semibold sm:text-5xl text-5xl text-[#212529]">
      {value}
    </h2>
    <p className="leading-relaxed text-lg text-[#00856F] font-semibold">
      {label}
    </p>
  </div>
);

export const Hero = () => {
  const stats = [
    { value: "+3.500", label: "Pacientes atendidos" },
    { value: "+15", label: "Especialistas disponíveis" },
    { value: "+10", label: "Anos no mercado" },
  ];

  return (
    <div className="mb-16">
      <div className="bg-[#DCE9E2]">
        <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col-reverse justify-between items-center sm:flex-row">
            <div className="order-2 w-full mb-10 text-left sm:w-1/2 sm:mb-0 sm:text-center md:mx-auto sm:order-1">
              <div className="lg:text-left text-center">
                <p className="inline-block py-px mb-4 text-sm font-bold tracking-wider text-[#00856F] uppercase rounded-full">
                  WELCOME TO DOCTORCARE 👋
                </p>
                <h1 className="text-[#212529] text-4xl lg:text-6xl font-bold mb-8">
                  Assistência médica simplificada para todos
                </h1>
                <p
                  tabIndex="0"
                  className="text-lg text-[#212529] font-regular mb-8"
                >
                  Os médicos da DoctorCare vão além dos sintomas para tratar a
                  causa raiz de sua doença e proporcionar uma cura a longo
                  prazo.
                </p>
                <div>
                  <a
                    href="#_"
                    className="relative inline-flex items-center px-4 py-2 overflow-hidden text-lg font-medium border border-[#00856F] text-white bg-[#00856F] rounded-full group hover:bg-transparent hover:text-[#00856F] transition ease-in duration-300"
                  >
                    <FaWhatsapp className="text-2xl mx-3" />
                    <span className="relative uppercase">
                      Agende sua consulta
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 w-full flex justify-end sm:w-1/2 sm:order-2">
              <img className="" src={images.girl.src} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-[#DCE9E2] h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-[#FFFAF1] divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-xl">
          {stats.map((stat, index) => (
            <StatisticBlock key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
