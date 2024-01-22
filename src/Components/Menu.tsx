const Menu = () => {
  return (

    <div className="relative flex flex-row mt-14 justify-center gap-3 my-4 z-50  w-5/6 mx-auto">
      <div className="flex flex-row w-full mx-w-[240] md:auto lg:[644px]  h-16 p-4 flex-shrink-0 items-center justify-center  gap-2 rounded-md bg-white shadow-md px-2">
        <button className="text-[rgba(30,30,30,0.50)] font-Outfit w-full text-base font-medium">

          All
        </button>
        <button className="flex flex-col  h-50 p-4 items-start gap-10 flex-shrink-0 border-2  border-gradient rounded-[73px]">
          Social Media Tools
        </button>
        <button className="text-[rgba(30,30,30,0.50)] font-Outfit w-full text-base font-medium">
          Seo Tools
        </button>
        <button className="text-[rgba(30,30,30,0.50)] font-Outfit w-full text-base font-medium">
          Website Tools
        </button>
        <button className="text-[rgba(30,30,30,0.50)] font-Outfit w-full text-base font-medium">
          Email Tools
        </button>
        <button className="text-[rgba(30,30,30,0.50)] font-Outfit w-full text-base font-medium">
          BLog Creator
        </button>
        <button className="text-[rgba(30,30,30,0.50)] font-Outfit w-full text-base font-medium">
          Article Creator
        </button>
      </div>

      <div className="w-14 h-14">
        <button className="flex flex-col w-30 h-16 p-4 flex-shrink-0 items-center justify-center gap-4 rounded-md bg-white shadow-md ">

          <span className="w-30 h-30 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M22.5 15L15 22.5L7.5 15"
                stroke="#1E1E1E"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5 7.5L15 15L7.5 7.5"
                stroke="#1E1E1E"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
export default Menu;
