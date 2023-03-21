import React, { useContext } from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/ProfPic.jpg";


export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <>
      <section id="">
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
                Hi Everyone 👋 My name is{" "}
                <span className="different">Md Owais Athar </span> from{" "}
                <span className="different">
                  {" "}
                  Giridih, Jharkhand (India)
                </span>
                . A Full Stack MERN Developer
                from{" "}
                <span className="different">
                  Masai School
                </span>
                
                <span className="different"></span> . I got hand on experience in frontend and backend technologies 
                working extensively on MERN Stack,
                HTML5, CSS3, JavaScript. Spend {" "}
                <span className="different">
                 2000+ {" "}
                </span>
                hours of Coding, {" "}
                <span className="different">
                 200+ {" "}
                </span>
                hours of Soft Skill.
                
              </h4>

       
            </div>
            
          </div>
          
        </div>
      </section>
      
    </>
  );
};