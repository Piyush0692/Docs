import { motion } from "motion/react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((text, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{width: 0}}
                  animate={{width: "12vw"}}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                  className="w-[12vw] h-[4vw] relative -top-[1.5vw] bg-green-500 rounded-lg mr-[1vw]"
                ></motion.div>
              )}
              <h1 className="text-[9vw] leading-[7vw] font-FoundersGroteskXCondensed font-bold">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="font-montreal border-t-[1px] border-zinc-800 mt-20 flex px-20 py-8 justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((text, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {text}
          </p>
        ))}

        <div className="start flex items-center gap-2">
          <div className="font-light text-md px-5 py-2.5 border-[2px] border-zinc-500 rounded-full">
            START THE PROJECT
          </div>
          <div className="w-12 h-12 flex items-center justify-center rotate-45 border-[2px] border-zinc-500 rounded-full">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
