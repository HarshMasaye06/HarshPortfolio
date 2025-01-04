"use client";

import { useRouter } from "next/navigation"; // Use next/navigation for App Router
import { useRef } from "react";
import { RiGhostSmileLine } from "react-icons/ri";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();
  const overlayRef = useRef(null);

  const handleTransition = async (e) => {
    e.preventDefault();
    const overlay = overlayRef.current;
    overlay?.classList.add("active"); // Show overlay animation
    await sleep(1000); // Wait for animation to complete
    router.push(href); // Navigate to the new page
    await sleep(500); // Allow exit animation if needed
    overlay?.classList.remove("active"); // Reset overlay
  };

  return (
    <>
      <div
        ref={overlayRef}
        className="overlay flex justify-center items-center"
      >
        <RiGhostSmileLine className=" overlay-icon text-accent" />
      </div>
      <a onClick={handleTransition} href={href} {...props}>
        {children}
      </a>
    </>
  );
};

export default TransitionLink;
