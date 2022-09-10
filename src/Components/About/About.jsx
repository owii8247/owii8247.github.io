import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
import { Introduction } from "./Introduction";
// import PublicIcon from "@material-ui/icons/Public";

// import Button from "@mui/material/Button";
export const About = () => {
    return (
        <>
            <div className="about center">
                <h1 data-aos="fade-right" className="mobileHead">
                    Hello, I am <span className="about__name">Md Owais Athar</span>
                </h1>
                <Type />
                <p className="about__desc" data-aos="fade-right">
                    Aspiring Full Stack Web Developer- Team player with leadership quality, Quick learner, 
                    working extensively on React and Redux, looking forward to working on a product-based company.
                    Attired with a variety of tools & technologies and keen to
                    learn new one.
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
                </div>

                <button
                    className="btnResume"
                    onClick={() => {
                        window.open(
                            "https://drive.google.com/file/d/1a2ljP0HbQyz26CnnjuvDzoPCSDApvjyF/view?usp=sharing"
                        );
                    }}
                >
                    Resume
                </button>
            </div>
            <Introduction />

        </>
    );
};