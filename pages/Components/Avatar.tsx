const Avatar = () => {
  return (
    <section className="flex justify-center flex-col">
      <div className="max-w-2xl p-2 mx-auto space-y-4">
        <ul className="flex flex-wrap pt-8 space-x-4">
          <li className="flex flex-col items-center justify-center">
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-orange-400 to-violet-700">
              <a
                className="block p-1 transition transform bg-white rounded-full hover:-rotate-6"
                href="https://github.com/keqing77"
                target="_blank"
              >
                <img
                  className="w-24 h-24 rounded-full"
                  src="https://avatars.githubusercontent.com/u/48318812?v=4"
                  alt="smile dog"
                />
              </a>
            </div>
            <h3 className="text-center py-2 font-semibold tracking-tight mb-1">
              写前端的<span className="tracking-tight">刻猫猫</span>
            </h3>
          </li>
        </ul>
      </div>
      <div>
        <p className="mt-2 font-light sm:text-xl text-center">
          我就像一直下水道的老鼠
          <br className="hidden sm:inline-block" /> 偶尔探出头来看你们的幸福
        </p>
      </div>
    </section>
  );
};

export default Avatar;
