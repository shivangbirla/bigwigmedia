import gradient from "../assets/gradient.png";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className=" py-4 text-black text-center font-outfit text-5xl font-normal">
        Unlock the
        <span className="bg-gradient text-transparent bg-clip-text font-Outfit text-6xl font-semibold">
          {" "}
          Power of AI{" "}
        </span>
        with BigWig Media
      </div>
      <div className=" content-center py-4  text-center font-Outfit text-black text-xl z-10 w-full max-w-[320] md:auto lg:844px mx-auto font-normal">
        Stay at the forefront of innovation by harnessing cutting-edge AI tools,
        ensuring our solutions remain ahead of the curve with daily updates
      </div>
      <div className="w-full max-w-[320] md:auto lg:844px relative my-8 flex justify-center items-center h-fit">
        <div className="z-10 w-full max-w-[637px]  overflow-hidden mx-auto !p-2  border-gradient bg-white ">
          <div className="flex  justify-between  border-2 border-opacity-0  overflow-hidden  rounded-[73px] items-center ">
            <input
              placeholder="Social Media"
              className="w-full border-none z-10 rounded-l-[73px] outline-none p-4"
            />
            <div className="flex relative w-219.465 h-65.84 p-5 justify-center items-center gap-4 flex-shrink-0 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-indigo-500">
              <button className="text-white text-center font-Outfit text-lg font-semibold">
                Search Ai tools
              </button>
            </div>
          </div>
        </div>
        <img src={gradient} className="absolute -z-1" />
      </div>
      {/* <div className="w-684 h-120.706 flex-shrink-0">
                <div className="w-684 h-120.706 flex-shrink-0">
                    <div className="w-506.599 h-120.706 flex-shrink-0 rounded-full opacity-80 border-radius: 506.599px; background: var(--gradient, linear-gradient(131deg, #FFC700 0%, #FF003D 31.5%, #9E00FF 66%, #00D1FF 100%)); filter: blur(65.83956909179688px);">
                    </div>
                    <div className="w-684 h-83.214 flex-shrink-0 rounded-full border-radius: 74.07px; background: var(--gradient, linear-gradient(131deg, #FFC700 0%, #FF003D 31.5%, #9E00FF 66%, #00D1FF 100%));">
                    </div>
                    <div className="w-673.941 h-74.07 flex-shrink-0 rounded-md bg-white border-radius: 74.07px; ">
                    <div className="text-white text-center font-Outfit text-xl font-semibold">Search Ai tools</div>

                    <div className="flex w-219.465 h-65.84 p-5 justify-center items-center gap-4 flex-shrink-0 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-indigo-500 border-radius: 74.07px;">
                        <span className="text-black font-Outfit text-base font-normal">Social Media</span>
                        </div>
                    </div>
                </div>
            </div>
             */}
    </div>
  );
};
export default Hero;
