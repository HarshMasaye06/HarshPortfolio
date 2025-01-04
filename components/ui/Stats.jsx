"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "projects completed" },
  { num: 6, text: "Technologies Known" },
//   { num: 100, text: "projects" },
//   { num: 100, text: "projects" },
];

const Stats = () => {
  return (
    <section className="" >
      <div className=" container mx-auto">
        <div className=" flex gap-6 flex-wrap max-w-[80vw] mx-auto xl:max-w-none  ">
          {stats.map((item, index) => (
            <div key={index} className="flex-1 gap-4 items-center justify-center xl:justify-start ">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className=" text-4xl xl:text-6xl font-extrabold text-secondary "
              />
              <p
                className={`${
                  item.length < 15 ? "max-w-[100px]" : " max-w-[150px]"
                } leading-snug text-secondary `}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
