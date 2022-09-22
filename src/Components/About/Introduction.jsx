import React, { useContext } from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/ProfPic.jpg";


export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone 👋 I'am{" "}
                <span className="different">Md Owais Athar </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Giridih, Jharkhand (India)
                </span>
                . I graduated in B.Tech Mechanical Engineering
                from{" "}
                <span className="different">
                  GL Bajaj Institute Of Technology & Management, Greater Noida (U.P)
                </span>
                . In January 2022 I Joined {" "}
                <span className="different">Masai School</span> a military type
                coding school. I got hand on experience on frontend technologies,
                HTML, CSS, JavaScript, React and Redux.{" "}
                <span className="different">
                 1000+ hours of Coding
                </span>
                
              </h4>

       
            </div>
            
          </div>
          
        </div>
      </section>
      
    </>
  );
};