import React from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Image from "../atoms/image";

export default function Projects() {
  const listProject = [
    {
      title: "HRServices ",
      desc: "Website Application is created to manage all processes related to HR Department",
      image: "./images/Hrservice.png",
      tools: [".Net", "C#", "Bootstrap", "Jquery","Javascript", "SQL"],
    },
    {
      title: "KMK Digital",
      desc: "Self Service Application for Customers and Suppliers in applying for Working Capital Credit (KMK) to CSULfinance. The approval process for submissions is done digitally and integrated with digital signature services",
      image: "./images/kmkdigital.png",
      tools: [".Net", "C#", "Bootstrap", "Jquery","Javascript", "SQL","API","Biometrix","DigiSign"],
    },
    {
      title: "CSULWebApplication",
      desc: "Applications with features that are divided into various menus according to the needs of each department at CSULfinance.",
      image: "./images/csulwebapp.png",
      tools: [".Net", "C#", "Bootstrap", "Jquery","Javascript", "SQL"],
    },
    {
      title: "Print Kontrak ",
      desc: "Applications to print Corporate Business Unit (CBU) contracts according to a predetermined format.",
      image: "./images/printkontrak.png",
      tools: [".Net", "C#", "Bootstrap", "Jquery","Javascript", "SQL","Rotativa"],
    },
    {
      title: "Helpdesk IT",
      desc: "Complaint service application related to problems within the scope of information technology and data request services on the core system and non-core system.",
      image: "./images/helpdesk.png",
      tools: [".Net", "C#", "Bootstrap", "Jquery","Javascript", "SQL"],
    },
    {
      title: "Applikasi Dokumen Bisnis Proses",
      desc: "Application for managing Standard Operational Procedure (SOP) documents and all company documents in the CSULfinance work environment",
      image: "./images/sop.png",
      tools: [".Net", "C#", "Bootstrap", "Jquery","Javascript", "SQL","Sharepoint","MS Flow"],
    },
    {
      title: "Monitoring System",
      desc: "Dashboard containing information about Sales Performance, Business Date Core System, Customer Billing, etc.",
      image: "./images/monitoring system.png",
      tools: [".Net", "C#", "Bootstrap", "Jquery","Javascript"],
    },
    {
      title: "VosPay Integration",
      desc: "Credit application for TMT Group employees through a third party called VOSPAY with a maximum submission of up to 50 million.",
      image: "./images/vospay.png",
      tools: [".Net", "C#", "Bootstrap", "Jquery","Javascript", "SQL"],
    },
  ];
  return (
    <>
      <div className="container mx-auto min-h-screen rounded w-10/12 ">
        <Link className="text-white" to={"/"}>
          <BsArrowLeftCircleFill
            className="mt-12"
            style={{ color: "#172a45" }}
            size={50}
          />
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-5 my-12">
          {listProject.map((project) => (
            <div className="flex flex-col gap-5 w-full">
              <Image src={project.image} />
              <h4 className="project_name text-md md:text-xl">
                {project.title}
              </h4>
              <p className="project-desc h-42 text-justify">{project.desc}</p>
              <ul className="project-tools flex gap-3">
                {project.tools.map((tool) => (
                  <li className="text-sm md:text-xl">{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
