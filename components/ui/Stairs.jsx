import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const sineEase = [1, 0, 0.9, 1];

const Stairs = () => {
  return (
    <>
      {/* {[...Array(1)].map((_, index) => ( */}
        <motion.div
          // key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.9,
            ease: sineEase,
            delay: 0.5,
          }}
          className="h-full w-full bg-secondary relative"
        />
      {/* ))} */}
    </>
  );
};

export default Stairs;
