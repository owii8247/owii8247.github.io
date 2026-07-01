import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import GetAppIcon from '@material-ui/icons/GetApp';
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import Skills from "./Skills";
import resume from "../../assets/Md-Owais-Athar-Resume.pdf"
import { Journey } from "./Journey";
import { FaHubspot, FaInstagram, FaSuitcase, FaYoutube } from "react-icons/fa";
import { LAST_UPDATED } from "../../utils/lastUpdated";


export const About = () => {
    return (
        <>
            <div className="about center">
                <h1 data-aos="fade-right" className="mobileHead">
                    Hello, I am <span className="about__name">Md Owais Athar</span>
                </h1>
                <Type />
                <p className="about__desc" data-aos="fade-right">
                    Experienced Full Stack Developer proficient in MERN, React Native, Android & IOS Development. Demonstrated exceptional time-management and leadership skills, leading teams to successful project completion. A quick learner, consistently keeping up with the latest industry trends and technologies. Proven ability to collaborate effectively as a team player while also showcasing strong leadership qualities. Seeking opportunities to leverage skills and experience in a dynamic and innovative environment.
                </p>
                <p className="about__updated">
                    🚀 Last updated: {LAST_UPDATED}
                </p>
                <div className="about__contact center">
                    <a
                        href="https://github.com/owii8247"
                        aria-label="github"
                        target="_blank"
                        rel="noreferrer"
                        className="link link--icon"
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href="mailto:owais.athar.8092@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="mail"
                        className="link link--icon"
                    >
                        <EmailIcon />
                    </a>
                    <a
                        href="tel:+91-8510805467"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="phone"
                        className="link link--icon"
                    >
                        <PhoneIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-owais-athar-a16337a2/"
                        aria-label="linkedin"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://twitter.com/Owii8247"
                        aria-label="twitter"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TwitterIcon />
                    </a>
                    <a
                        href="https://www.naukri.com/minis/creator-dashboard"
                        aria-label="Naukri Creator Hub"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaSuitcase />
                    </a>
                    <a
                        href="https://www.youtube.com/@owii_codes"
                        aria-label="YouTube"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://www.instagram.com/owii_codes"
                        aria-label="Instagram"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram />
                    </a>
                </div>
                <a href={resume} download>
                    <button className="btnResume">
                        Resume <GetAppIcon className="resume-dwnld" />
                    </button>
                </a>
            </div>

            <Introduction />



            <section>
                <Journey />
            </section>

            <section id="techstack">

                <Techstacks />
            </section>

            <section id="skills">

                <Skills />
            </section>


        </>
    );
};