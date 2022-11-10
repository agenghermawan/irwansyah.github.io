import React from "react";
import "../styles/experience.css";
import CardExperience from "../atoms/card-experience";
import List from "../atoms/list";

export default function Experience() {
  const experienceDesc = [
    {
      title: "Technical Programmer @Renewal Indonesia",
      date: "Jan 2017 - Apr 2017 ",
      desc: [
        "Responsible for networking, installation and maintenance service",
        "Configuration and testing any new hardware",
        "Provided IT support services, troubleshooting hardware or software",
        "Develop system automation based on request",
      ],
    },{
      title: ".NET Developer @ PT Chandra Sakti Utama Leasing",
      date: "Apr 2017 - Present",
      desc: [
        "Designing User Interface.",
        "Designing the required database in the system",
        "Design Flow Process Back-end Application",
        "System Integration Testing Application",
        "Maintenance all existing website application & API Integration",
        "Develop new web application & API based on request"
      ],
    },
  ];

  return (
    <div
      className="container mx-auto mt-32 md:w-3/4 xl:w-2/4 w-10/12 grid justify-center"
      id="experience"
    >
      <div
        data-aos="fade-up-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="title">
          <h3 className="md:text-3xl text-xl font-semibold flex">
            <span className="title-about__number"> 02. </span> Where I've Worked
            <span className="strip"> </span>
          </h3>
        </div>
        {experienceDesc.map((item) => (
          <CardExperience title={item.title} date={item.date}>
            {item.desc.map((desc) => (
              <List>{desc}</List>
            ))}
          </CardExperience>
        ))}
      </div>
    </div>
  );
}
