import React from "react";
import "../styles/hero.css";
import { Typewriter } from "react-simple-typewriter";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
// import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="mx-auto hero container w-10/12 md:w-3/4 xl:w-2/4 justify-center grid mb-16 md:mb-44">
      <h5 className="title-name pt-10 md:pt-20 text-2xl md:text-3xl w-auto md:w-2/4  sm:text-sm">
        Hello World! My name is
      </h5>
      <h1 className="text-name text-xl md:text-7xl mt-5 leading-relaxed">
        <Typewriter
          words={["Irwansyah"]}
          loop={10}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={100}
          delaySpeed={2000}
        />
        <br />
        <span className="sub-text-name"> I love exploring new things! </span>
      </h1>
      <div className="desc sm:w-full md:mx-0 md:w-6/12 gap-5 grid">
        <p className="mt-5 text-justify">
          I'm an Indonesia based website developer with a goal - driven creative
          mindset and passion for learning and innovating. <br />
        </p>
      </div>

      <div className="flex flex-col gap-5 mt-6 ">
        <div className="flex gap-3">
          <a
            href={"https://www.linkedin.com/in/irwansyah-39513212b/"}
            target="new_blank"
          >
            <BsLinkedin size={50} style={{ color: "#64ffda" }} />
          </a>
          <a href="https://gitlab.com/irwansyah195" target={"new_blank"}>
            <BsGithub size={50} style={{ color: "#64ffda" }} />
          </a>
          <a
            href="https://www.instagram.com/irwanafauzan/"
            target={"new_blank"}
          >
            <BsInstagram size={50} style={{ color: "#64ffda" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
