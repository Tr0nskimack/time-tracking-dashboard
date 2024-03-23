import React, { useState, useEffect } from "react";
import social from "/icon-social.svg";
import exercise from "/icon-exercise.svg";
import play from "/icon-play.svg";
import selfcare from "/icon-self-care.svg";
import study from "/icon-study.svg";
import work from "/icon-work.svg";
import { Card } from "./components/Card";
import axios from "axios";

const App = () => {
  const [timeFrame, setimeFrame] = useState("weekly");
  const [data, setdata] = useState([]);

  const URL = "/data.json";

  const consulta = async () => {
    const peticion = await axios.get(URL);
    const obtenido = await peticion.data;
    setdata(obtenido);
  };

  useEffect(() => {
    consulta();
  }, []);

  const stylesCard = [
    {
      color: "bg-Light_orange",
      icono: work,
    },
    {
      color: "bg-Soft_blue",
      icono: play,
    },
    {
      color: "bg-Light_red",
      icono: study,
    },
    {
      color: "bg-Lime_green",
      icono: exercise,
    },
    {
      color: "bg-Violet",
      icono: social,
    },
    {
      color: "bg-Soft_yellow",
      icono: selfcare,
    },
  ];
  return (
    /* content principal */
    <div className="bg-[#0f1424] min-h-screen flex justify-center  items-center ">
      {/* all containers */}
      <div className="flex flex-col md:flex-row md:gap-5">
        {/* card left */}
        <div>
          <div className="flex flex-col">
            <div className="bg-Blue p-6 w-[375px] h-[120px]  md:w-[180px] md:h-[220px] rounded-lg z-50">
              <div className="flex md:flex md:flex-col gap-3 ">
                <img
                  src="image-jeremy.png"
                  className=" w-[60px] h-[60px] md:w-[50px] md:h-[50px] border-white border-[2px]  rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-[12px] md:text-[9px] text-[#bdc1ff] mt-4">Report for</p>
                  <h1 className="text-[#dde0ff] font-light text-[20px] md:text-[25px]">
                    Jeremy Robson
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-[#1c1f4a] w-[375px] h-[80px] md:w-[180px] md:h-[140px] rounded-b-lg -mt-7 z-40">
              <div className="flex flex-row items-center md:flex-col m-5 justify-around gap-3 text-[#6f76c8] transition-all h-full">
                <div className="md:mt-5">
                  <button
                    className={timeFrame === "daily" ? "text-[#bdc1ff] " : ""}
                    onClick={() => setimeFrame("daily")}
                  >
                    Daily
                  </button>
                </div>
                <div>
                  <button
                    className={timeFrame === "weekly" ? "text-[#bdc1ff] " : ""}
                    onClick={() => setimeFrame("weekly")}
                  >
                    Weekly
                  </button>
                </div>
                <div>
                  <button
                    className={timeFrame === "monthly" ? "text-[#bdc1ff] " : ""}
                    onClick={() => setimeFrame("monthly")}
                  >
                    Monthly
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="grid sm:grid-cols-2  md:grid-cols-3 md:gap-4 ">
          {/*grid 1*/}

          {data.map((item, i) => {
            let current = "";
            let previous = "";

            if (timeFrame === "daily") {
              current = item.timeframes.daily.current;
              previous = item.timeframes.daily.previous;
            }
            if (timeFrame === "weekly") {
              current = item.timeframes.weekly.current;
              previous = item.timeframes.weekly.previous;
            }
            if (timeFrame === "monthly") {
              current = item.timeframes.monthly.current;
              previous = item.timeframes.monthly.previous;
            }
            /* console.log("current", current);
          console.log("previous", previous);
          console.log(data, item); */

            return (
              <Card
                color={stylesCard[i].color}
                icono={stylesCard[i].icono}
                key={item.title}
                data={item}
                current={current || 0}
                /* current={item.timeframes.weekly.current} */
                previous={previous || 0}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
