import { LuDot } from "react-icons/lu";

const ExperienceCard = ({ item, index }) => {
  return (
    <li
      key={index}
      className="hexagon rounded-lg bg-secondary h-[180px] py-6 px-10 flex flex-col justify-center items-start lg:items-start gap-1 "
    >
      <span className=" bg-accent h-10 w-10 absolute top-0 -right-1 sm:right-0 lg:right-0 xl:right-0"></span>
      <span className="text-accent  font-semibold">{item.duration}</span>

      <div className=" flex flex-col items-start gap-1 ">
        <h4 className="text-xl font-extrabold capitalize">{item.role}</h4>
        <p className=" flex items-center gap-1">
          <LuDot className="text-accent text-4xl" />
          {item.company}
        </p>
      </div>
    </li>
  );
};

export default ExperienceCard;
