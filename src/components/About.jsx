const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 px-20 bg-zinc-900 rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-montreal text-[2vw] leading-[4vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="flex gap-5 border-t-[1px] border-zinc-700 pt-10 mt-20 font-montreal">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach:</h1>
          <h3 className="text-2xl py-8 pr-20">Our approach at Ochi is tailored to empower fast-growing tech businesses by facilitating fundraising, product sales, simplifying complex concepts, and enabling effective talent acquisition.</h3>
          <div class="font-semibold rounded-full flex gap-2 justify-center mt-4 w-fit bg-[#004D43] text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
            Read more
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
        <img className="w-full rounded-3xl mt-10 md:w-[40vw] md:mt-0 hover:scale-110 transition-transform duration-300" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="about us" />
      </div>
    </div>
  );
};

export default About;
