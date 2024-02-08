import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import {  FaDatabase } from "react-icons/fa";
import { IoLogoHtml5 } from 'react-icons/io5';
import { IoLogoCss3 } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';




const personalDetails = [
  {
    label: "Name",
    value: "Deepak Kumar Solanki",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "204/8 Mahankal Colony,Dewas (M.P) INDIA",
  },
  {
    label: "Email",
    value: "dksolanki790@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7225952005",
  },
];

const jobSummary =
  "As a fresher React.js frontend developer, focus on mastering the fundamentals of React.js, including components, state management, and routing. Gain hands-on experience with API calls, asynchronous operations, and responsive design. Familiarize yourself with build tools like version control systems like Git. Learn debugging and testing techniques, and adopt best practices for code organization. Cultivate soft skills for effective communication and collaboration in a team. Continuous learning is key, so stay updated with the latest React.js developments and trends. Building practical projects will provide working environment for the organization and help in providing the real world experience";


const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <IoLogoHtml5 size={60} color="rgb(200,118,11)" />
              </div>
              <div>
                <IoLogoCss3 size={60} color="rgb(200,118,11)" />
              </div>
              <div>
                <FaReact size={60} color="rgb(200,118,11)" />
              </div>
              <div>
                <FaDatabase size={60} color="rgb(200,118,11)" />
              </div>
              
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;