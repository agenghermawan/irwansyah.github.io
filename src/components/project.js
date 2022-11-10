import React from "react";
import { Link } from "react-router-dom";
import "../styles/project.css";

export default function Project() {
  return (
    <div
      className="container mx-auto grid justify-center mt-32 w-10/12 xl:w-2/4 md:w-3/4"
      id="projects"
    >
      <div className="title">
        <h3 className="md:text-3xl text-xl font-semibold flex">
          <span className="title-about__number"> 03. </span> Some Things I've
          Built
          <span className="strip"> </span>
        </h3>
      </div>
      <div
        className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="grid grid-flow-row gap-3">
          <h4 className="project_name"> HRServices </h4>
          <p className="project-desc text-justify">
            Website Application is created to manage all processes related to HR Department
          </p>
          <ul className="project-tools flex gap-3">
            <li>.Net</li>
            <li>C#</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="grid grid-flow-row gap-3">
          <img
            src="./images/Hrservice.png"
            alt=""
            width={500}
            className="w-full object-cover"
          />
        </div>
      </div>

      <div
        className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <div className="grid grid-flow-row gap-3">
          <img
            src="./images/KMKDigital.png"
            alt=""
            width={470}
            className="w-full object-cover"
          />
        </div>
        <div className="grid grid-flow-row gap-3">
          <h4 className="project_name"> KMK Digital </h4>
          <p className="project-desc text-justify">
          Self Service Application for Customers and Suppliers in applying for Working Capital Credit (KMK) to CSULfinance. 
          The approval process for submissions is done digitally and integrated with digital signature services
          </p>
          <ul className="project-tools flex gap-3">
            <li>.Net</li>
            <li>C#</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>SQL</li>
            <li>API</li>
            <li>DigiSign</li>
          </ul>
        </div>
      </div>

      <div
        className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="600"
      >
        <div className="grid grid-flow-row gap-3">
          <h4 className="project_name"> CSULWebApplication </h4>
          <p className="project-desc text-justify">
          Applications with features that are divided into various menus according to the needs of each department at CSULfinance.
          </p>
          <ul className="project-tools flex gap-3">
          <li>.Net</li>
            <li>C#</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="grid grid-flow-row gap-3">
          <img
            src="./images/csulwebapp.png"
            alt=""
            width={470}
            className="w-full object-cover"
          />
        </div>
      </div>

      <div
        className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="400"
      >
        <div className="grid grid-flow-row gap-3">
          <img
            src="./images/printkontrak.png"
            alt=""
            width={470}
            className="w-full object-cover"
          />
        </div>
        <div className="grid grid-flow-row gap-3">
          <h4 className="project_name"> Print Kontrak </h4>
          <p className="project-desc text-left">
            Applications to print Corporate Business Unit (CBU) contracts according to a predetermined format.
          </p>
          <ul className="project-tools flex gap-3">
          <li>.Net</li>
            <li>C#</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>SQL</li>
            <li>Rotativa</li>
          </ul>
        </div>
      </div>

      <Link to={"/projects"}>
        <button
          type="button justify-center"
          className="p-1 contact-me text-white w-3/12 outline outline-offset-2 outline-blue-400 rounded-md text-center"
        >
          See All Project ...
        </button>
      </Link>
    </div>
  );
}
