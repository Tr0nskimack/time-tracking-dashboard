import React from "react";

const App = () => {
  return (
    /* content principal */
    <div className="bg-[#0f1424] h-screen flex justify-center gap-5 items-center ">
      {/* card left */}
      <div>
        <div className="flex flex-col">
          <div className="bg-[#5847eb] w-[180px] h-[220px] rounded-lg z-50">
            <div className="m-5">
              <img
                src="image-jeremy.png"
                className=" w-[50px] border-white border-[2px]  rounded-full"
                alt=""
              />
              <p className="text-[9px] text-[#bdc1ff] mt-4">Report for</p>
              <h1 className="text-[#dde0ff] font-light text-[25px]">
                Jeremy <br />
                Robson
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#1c1f4a] w-[180px] h-[140px] rounded-b-lg -mt-7 z-40">
            <div className="flex flex-col m-5 justify-around gap-3 text-[#6f76c8] transition-all">
              <div className="mt-5">
                <h1 className="hover:text-[#bdc1ff] cursor-pointer">Daily</h1>
              </div>
              <div>
                <h1 className="hover:text-[#bdc1ff] cursor-pointer">Weekly</h1>
              </div>
              <div>
                <h1 className="hover:text-[#bdc1ff] cursor-pointer">Monthly</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className=" grid grid-cols-3 gap-4 ">


      {/*grid 1*/}
        <div className="flex flex-col">
          <div className="w-[180px] h-[45px] bg-[#ff8c66] z-40 rounded-t-lg">
            <div className="flex justify-end overflow-auto">
              <img src="icon-work.svg" className="w-[50px] -mt-2"  alt="" />
            </div>
          </div>

          <div className="w-[180px] h-[140px] bg-[#1c1f4a] rounded-lg z-50 -mt-4 ">
            <div className="m-5">
              <header className=" flex justify-between items-center text-white">
                <p>Work</p>
                <img src="icon-ellipsis.svg" className="w-[16px] cursor-pointer" alt="" />
              </header>
              <div>
                <h1 className="text-4xl mt-3 text-white font-light ">32hrs</h1>
              </div>
              {/* footer */}
              <div>
                <h1 className="text-4xl  text-[#6f76c8] text-[10px]">
                  Last week - 36hrs
                </h1>
              </div>
            </div>
          </div>
        </div>
      {/*grid 2*/}
        <div className="flex flex-col">
          <div className="w-[180px] h-[45px] bg-[#56c2e6] z-40 rounded-t-lg">
            <div className="flex justify-end overflow-hidden">
              <img src="icon-play.svg" className="w-[50px] -mt-2"   alt="" />
            </div>
          </div>

          <div className="w-[180px] h-[140px] bg-[#1c1f4a] rounded-lg z-50 -mt-4 ">
            <div className="m-5">
              <header className=" flex justify-between items-center text-white">
                <p>Play</p>
                <img src="icon-ellipsis.svg" className="w-[16px] cursor-pointer" alt="" />
              </header>
              <div>
                <h1 className="text-4xl mt-3 text-white font-light ">10hrs</h1>
              </div>
              {/* footer */}
              <div>
                <h1 className="text-4xl  text-[#6f76c8] text-[10px]">
                  Last week - 8hrs
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/*grid 3*/}
        <div className="flex flex-col">
          <div className="w-[180px] h-[45px] bg-[#ff5c7c] z-40 rounded-t-lg">
            <div className="flex justify-end overflow-hidden">
              <img src="icon-study.svg" className="w-[50px] -mt-2"   alt="" />
            </div>
          </div>

          <div className="w-[180px] h-[140px] bg-[#1c1f4a] rounded-lg z-50 -mt-4 ">
            <div className="m-5">
              <header className=" flex justify-between items-center text-white">
                <p>Study</p>
                <img src="icon-ellipsis.svg" className="w-[16px] cursor-pointer" alt="" />
              </header>
              <div>
                <h1 className="text-4xl mt-3 text-white font-light ">7hrs</h1>
              </div>
              {/* footer */}
              <div>
                <h1 className="text-4xl  text-[#6f76c8] text-[10px]">
                  Last week - 7hrs
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/*grid 4*/}
        <div className="flex flex-col">
          <div className="w-[180px] h-[45px] bg-[#4acf81] z-40 rounded-t-lg">
            <div className="flex justify-end overflow-hidden">
              <img src="icon-exercise.svg" className="w-[50px] "   alt="" />
            </div>
          </div>

          <div className="w-[180px] h-[140px] bg-[#1c1f4a] rounded-lg z-50 -mt-4 ">
            <div className="m-5">
              <header className=" flex justify-between items-center text-white">
                <p>Exercise</p>
                <img src="icon-ellipsis.svg" className="w-[16px] cursor-pointer" alt="" />
              </header>
              <div>
                <h1 className="text-4xl mt-3 text-white font-light ">4hrs</h1>
              </div>
              {/* footer */}
              <div>
                <h1 className="text-4xl  text-[#6f76c8] text-[10px]">
                  Last week - 5hrs
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/*grid 5*/}
        <div className="flex flex-col">
          <div className="w-[180px] h-[45px] bg-[#7536d3] z-40 rounded-t-lg">
            <div className="flex justify-end overflow-hidden">
              <img src="icon-social.svg" className="w-[50px] -mt-2"   alt="" />
            </div>
          </div>

          <div className="w-[180px] h-[140px] bg-[#1c1f4a] rounded-lg z-50 -mt-4 ">
            <div className="m-5">
              <header className=" flex justify-between items-center text-white">
                <p>Social</p>
                <img src="icon-ellipsis.svg" className="w-[16px] cursor-pointer" alt="" />
              </header>
              <div>
                <h1 className="text-4xl mt-3 text-white font-light ">5hrs</h1>
              </div>
              {/* footer */}
              <div>
                <h1 className="text-4xl  text-[#6f76c8] text-[10px]">
                  Last week - 10hrs
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/*grid 6*/}
        <div className="flex flex-col">
          <div className="w-[180px] h-[45px] bg-[#f1c65b] z-40 rounded-t-lg">
            <div className="flex justify-end overflow-hidden">
              <img src="icon-self-care.svg" className="w-[50px] -mt-2"  alt="" />
            </div>
          </div>

          <div className="w-[180px] h-[140px] bg-[#1c1f4a] rounded-lg z-50 -mt-4 ">
            <div className="m-5">
              <header className=" flex justify-between items-center text-white">
                <p>Self Care</p>
                <img src="icon-ellipsis.svg" className="w-[16px] cursor-pointer" alt="" />
              </header>
              <div>
                <h1 className="text-4xl mt-3 text-white font-light ">2hrs</h1>
              </div>
              {/* footer */}
              <div>
                <h1 className="text-4xl  text-[#6f76c8] text-[10px]">
                  Last week - 2hrs
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
