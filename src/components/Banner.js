import banner from "./../assets/banner.jpg";

function Banner() {
  return (
    <div className="block items-center p-10">
      <div className="relative h-80">
        <img
          src={banner}
          alt="banner"
          className="h-full w-full absolute select-none"
        />
        <div className="absolute left-20 top-20">
          <div className="text-4xl font-bold">Macbook M1</div>
          <div className="text-4xl font-bold text-custom-green">- будущее</div>
          <div className="mt-10">
            <a
              href="/#"
              className="px-14 py-4 rounded-full bg-custom-green text-white font-bold"
            >
              КУПИТЬ
            </a>
          </div>
        </div>
        <div className="absolute -right-4 top-36">
          <div className="rounded-full w-8 h-8 bg-white items-center flex justify-center shadow-lg cursor-pointer">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.999999L6 6L1 11"
                stroke="#C8C8C8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
