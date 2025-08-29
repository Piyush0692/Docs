import { motion } from "motion/react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 bg-[#004D43] rounded-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-400 overflow-hidden flex whitespace-nowrap items-center">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
          className="text-[18vw] leading-none font-FoundersGroteskXCondensed font-bold pt-[5vw] pr-20 -mb-[2vw]"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
          className="text-[18vw] leading-none font-FoundersGroteskXCondensed font-bold pt-[5vw] pr-20 -mb-[2vw]"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
          className="text-[18vw] leading-none font-FoundersGroteskXCondensed font-bold pt-[5vw] pr-20 -mb-[2vw]"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
