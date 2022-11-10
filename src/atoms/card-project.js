import React from "react";
import Image from "../atoms/image";

export default function CardProject(props) {
  //   const { titleProject, descProject, children } = props;
  const listProject = [
    {
      title: "Decision Support System ",
      desc: "Website Decision Support System for a company in hiring and considering permanent employees",
      image: "./images/DSS.png",
      tools: ["PHP", "Laravel", "Bootstrap", "Jquery", "MySQL"],
    },
    {
      title: "PGHNAI Sumatera Selatan",
      desc: "Website for Working Meeting and National Symposium of the Gastroenterology Association, Indonesian Child Hepatology and Nutrition",
      image: "./images/pghnai.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Hello Kitchen",
      desc: "Wesbite selling desserts and snacks with midtrans",
      image: "./images/hellokitchen.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "PGHNAI Sumatera Selatan ",
      desc: "Workshop and Symposium Website for Optimizing Referrals in Child Cases by Prioritizing Good Communication Competence",
      image: "./images/pkbidai.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
  ];
  return (
    <>
      {listProject.map((item) => (
        <div
          className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20"
          data-aos="fade-down-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="grid grid-flow-row gap-3">
            <h5 className="project_title">Featured Project</h5>
            <h4 className="project_name"> {item.title} </h4>
            <p className="project-desc text-justify">{item.desc}</p>
            <ul className="project-tools flex gap-3">
              {item.tools.map((tool) => (
                <li>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-flow-row gap-3">
            <Image src={item.image} width={470} />
          </div>
        </div>
      ))}
    </>
  );
}
