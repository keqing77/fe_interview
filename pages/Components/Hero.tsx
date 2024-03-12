import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
              前端面试题<span className="text-green-700">.</span>
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/svg/497/497348.svg"
                alt=""
                className="w-8"
              />
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Follow <span className="text-green-700">your</span> heart
              </h1>
              <div className="w-20 h-2 bg-green-700 my-4"></div>
              <p className="text-xl mb-10">
                整理前端八股文, 手撕代码题, 归纳整理.
              </p>
              <Link href="/JavaScript/coding">
                <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  点击开始
                </button>
              </Link>
              <section className="flex justify-center m-10"></section>
            </div>
          </header>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="Leafs"
        className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
      />
    </section>
  );
};

export default Hero;
