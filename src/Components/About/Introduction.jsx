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
                . As an Experienced Full Stack Developer, I specialize in web, Android, and iOS development with nearly about <span className="different">
                  3+ year's
                </span>  of hands-on experience. Currently, I am working as a Full Stack Developer at
                {" "}
                <span className="different">
                  Technocrats Horizons Pvt Ltd, Hyderabad.
                </span>

                <span className="different"></span>
                I specialize in end-to-end architecture, backend systems design, scalable frontend development, third-party integrations, AI/LLM Integration, Prompt Engineering and delivering highly performant, secure, production-ready applications. My toolbelt includes Node.js, Express.js, React, TypeScript, MongoDB, Redis, AWS, Docker, Microservices, and CI/CD, Material UI and various Node Package Manager. Looking forward to exploring and diving deeper into the world of technology!  
                <span className="different"> </span>  
                Beyond engineering, I'm a Naukri Creator Hub and YouTube Tech Creator with a 7.2K+ LinkedIn community - sharing tales of perseverance, learning, and building in public.
              </h4>


            </div>

          </div>

        </div>
      </section>

    </>
  );
};