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
                . As an Experienced Full Stack Developer, I specialize in web, Android, and iOS development with a <span className="different">
                  1+ year
                </span>  of hands-on experience at
                {" "}
                <span className="different">
                  Explore & Do Technologies Pvt Ltd, Hyderabad
                </span>

                <span className="different"></span>  on frontend and backend technologies.
                My expertise lies in a range of technologies including MERN Stack,
                React, React Native, JavaScript, PHP, Laravel, Node.js, Express.js, MySQL, MongoDB, Chakra UI, Material UI and various Node Package Manager. Looking forward to exploring and diving deeper into the world of technology!

              </h4>


            </div>

          </div>

        </div>
      </section>

    </>
  );
};