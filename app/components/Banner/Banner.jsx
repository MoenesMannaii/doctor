import * as images from "../../../assets/index";

export const Banner = () => {
  return (
    <>
      <section className="bg-[#FFFAF1]">
        <div className="lg:max-w-screen-xl mx-auto">
          <div className="container mx-auto flex flex-col-reverse py-24 md:flex-row items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="order-1 object-cover object-center rounded sm:order-2"
                alt="hero"
                src={images.banner.src}
              />
            </div>
            <div className="lg:flex-grow order-2 sm:order-2 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center px-6">
              <p className="py-px mb-4 text-sm font-bold tracking-wider text-[#00856F] uppercase">
                SOBRE NÓS
              </p>
              <h1 className="DMsans sm:text-5xl tracking-wide text-4xl mb-4 font-semibold text-[#212529]">
                Entenda quem somos e por que existimos
              </h1>
              <p className="mb-8 leading-relaxed text-lg">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim. Amet minim mollit
                non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim. Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequat duis
                enim. Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
