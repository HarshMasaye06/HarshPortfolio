import { LuDot } from "react-icons/lu";

const EducationCard = ({item, index}) => {
  return (
    <li
      key={index}
      className="hexagon rounded-lg bg-secondary h-[180px] py-6 px-10 flex flex-col justify-center items-start lg:items-start gap-2 "
    >
      <span className=" bg-accent h-10 w-10 absolute top-0 -right-1 sm:right-0 lg:right-0 xl:right-0"></span>
      <h4 className="text-md xl:text-lg text-accent font-extrabold">{item.degree}</h4>
      <div className=" flex flex-col items-start gap-[0.1rem]">
        <p className="text-xs xl:text-md leading-6 w-full capitalize text-start font-semibold ">
          {item.university}
        </p>
        <span className=" flex items-center gap-1 xl:text-md">
          <LuDot className=" text-accent text-4xl" />
          {item.duration}
        </span>
      </div>
    </li>
  );
};

export default EducationCard;
