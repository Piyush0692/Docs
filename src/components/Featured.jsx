import { motion } from "motion/react";

const Featured = () => {
  return (
    <div className="w-full py-16 bg-zinc-900">
      <div className="w-full px-20 font-montreal border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-[4vw] tracking-tight ">Featured Projects</h1>
      </div>

      <div className="w-full px-20 mt-10">
        <div className="flex gap-10 cards w-full mt-10">
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div class="rounded-full font-semibold flex gap-2 justify-center mt-4 w-fit bg-[#004D43] text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
          View all projects
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 384 512"
            class="rotate-45 origin-center translate-y-[2px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Featured;
