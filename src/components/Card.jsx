import React from "react";
import classnames from "classnames";

export const Card = ({ data, current, previous, color, icono }) => {
/*   console.log(icono); */

  const { title, weekly, daily, monthly } = data;

  return (
    <div className="flex flex-col mt-5 md:mt-0">
      <div className={classnames("w-[375px] md:w-[180px] h-[45px] z-40 rounded-t-lg", color)}>
        <div className="flex justify-end overflow-auto">
          <img src={icono} className="w-[50px] -mt-2" alt="" />
        </div>
      </div>

      <div className="w-[375px] md:w-[180px] h-[140px] bg-[#1c1f4a] rounded-lg z-50 -mt-4 ">
        <div className="m-5">
          <header className=" flex justify-between items-center text-white">
            <p>{title}</p>
            <img
              src="icon-ellipsis.svg"
              className="w-[16px] cursor-pointer"
              alt=""
            />
          </header>
          <div>
            <h1 className="text-4xl mt-3 text-white font-light ">
              {current}hrs
            </h1>
          </div>
          {/* footer */}
          <div>
            <h1 className="text-4xl  text-[#6f76c8] text-[10px]">
              Last week - {previous}hrs
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
