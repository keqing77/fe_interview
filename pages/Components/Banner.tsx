const Banner = () => {
  return (
    <section className="bg-white py-24 sm:py-32 dark:bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          整理前端常用技术栈面试题
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="svg/js.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="svg/ts.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="svg/vue.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="svg/next.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
