import React from "react";
import "../styles/about-me.css";
import Image from "../atoms/image";
import List from "../atoms/list";

export default function AboutMe() {
  return (
    <div className="mx-auto container w-10/12 md:w-3/4 xl:w-2/4 " id="about-me">
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        className="grid justify-center"
        data-aos-duration="800"
      >
        <div className="title">
          <h3 className="md:text-3xl text-xl font-semibold flex">
            <span className="title-about__number "> 01. </span> About Me{" "}
            <span className="strip"> </span>
          </h3>
        </div>
        <div className="desc-about grid grid-cols-1 md:grid-cols-3 mt-5">
          <div className="grid gap-5 col-span-2">
            <p className="text-justify">
            I graduated from Gunadarma University majoring in computer systems. 
            i`m easily adapts to new environments, has a desire to
            learn new things and has an interest in web developer especially
            back-end developer
            </p>

            <p>Here is a list that I'm familiar with!</p>
            <div className="grid grid-cols-2 list-skills">
              <div>
                <p>Programming Language</p><br/>
                <ul className="list-square list-inside">
                  <List> HTML </List>
                  <List> CSS </List>
                  <List> Jquery </List>
                  <List> JavaScript </List>
                  <List> Bootstrap </List>
                  <List> Angular </List>
                  <List> C# </List>
                  <List> ASP .Net & ASP .Net Core </List>
                  <List> SQL </List>
                  <List> MySQL </List>
                  <List> XML / JSON </List>
                </ul>
              </div>
              <div>
              <p>Technologies</p><br/>
                <ul className="list-square list-inside">
                  <List> OCR (Optical Character Recognition)</List>
                  <List> Biometrix & Biodata Verification </List>
                  <List> Microsoft Flow Integration</List>
                  <List> Microsoft Sharepoint Integration</List>
                  <List> Redis </List>
                  <List> WhatsappForBusiness Integration </List>
                  <List> Online Payment Integration </List>
                  <List> Opensource API MAP - OpenStreetMap </List>
                  <List> SMSGateway </List>
                  <List> APIGateway - KONG</List>
                  <List> Digital Signature</List>
                  <List> Swagger</List>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center h-64">
            <Image src={"images/foto.jpeg"} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
