import * as images from "../../../assets/index";

export const Services = () => {
  const servicesData = [
    {
      title: "Problemas digestivos",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
      title: "Saúde Hormonal",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
      title: "Bem-estar mental",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
      title: "Saúde Hormonal",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
      title: "Bem-estar mental",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
      title: "Saúde Hormonal",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
  ];

  return (
    <section>
      <div class="container px-6 py-10 mx-auto">
        <div class="max-w-lg mx-auto text-center py-12">
          <p className="inline-block py-px mb-4 text-sm font-bold text-center tracking-wider text-[#00856F] uppercase rounded-full">
            SERVIÇOS
          </p>
          <h1 class="sm:text-3xl text-4xl font-semibold text-[#212529] lg:text-4xl">
            Como podemos ajudá-lo a se sentir melhor?
          </h1>
        </div>

        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="p-8 space-y-3 border-2 border-[#DCE9E2] rounded-xl"
              >
                <span className="inline-block text-[#DCE9E2]">
                  <img className="w-8 h-8" src={images.tick.src} alt="" />
                </span>

                <h1 className="text-2xl font-semibold text-[#212529] capitalize">
                  {item.title}
                </h1>

                <p className="text-lg text-[#495057] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
