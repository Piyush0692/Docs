
const Cards = () => {
  return (
    <div className="w-full h-screen flex items-center gap-5 bg-zinc-900 px-20">
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className="relative card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="px-4 py-2 rounded-3xl absolute left-10 bottom-6 border-2 font-montreal leading-none">©2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className="card relative flex items-center justify-center w-full h-full bg-[#0b2320] rounded-xl">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className="px-4 py-2 rounded-3xl absolute left-10 bottom-6 border-2 font-montreal leading-none">RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative flex items-center justify-center w-full h-full bg-[#0b2320] rounded-xl">
                <img className="w-32 rounded-full" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className="px-4 py-2 rounded-3xl absolute left-10 bottom-6 border-2 font-montreal leading-none">BUSINESS ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards