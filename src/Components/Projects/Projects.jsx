import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
    SiHtml5,
    SiJavascript,
    SiChakraui,
    SiSwiper,
    SiHeroku,
    SiVercel,
    SiNetlify
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
// import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
    return (
        <>
            <div className="section">
                <h2 className="section__title different">Projects</h2>
                <div className="allProjects">
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="https://user-images.githubusercontent.com/100846987/187068221-894765e4-7b1c-46af-b61c-cce751225e26.PNG"
                                        alt="Fraazo"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Fraazo Website</h2>
                                <p>
                                    Fraazo is a fresh fruits and vegetables online grocery website.
                                    Worked Individually on this project and completed in 5days.
                                </p>
                                <div>

                                    <FaReact />
                                    <SiChakraui />
                                    <SiSwiper />
                                    <VscJson />
                                    <SiHeroku />
                                    <SiVercel />
                                </div>
                                <div>
                                    <a
                                        href="https://project-fraazo.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/owii8247/cumbersome-order-6762"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="https://user-images.githubusercontent.com/100846987/180617186-325a1514-9bba-4656-9051-3adfd89c8df2.PNG"
                                        alt="Shine"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Shine Website</h2>
                                <p>
                                    Shine is the most innovative and second largest online
                                    Job portal in India. Worked Individually on this project and completed in 5days.
                                </p>
                                <div>
                                    <FaReact />
                                    <SiChakraui />
                                    <SiSwiper />
                                    <SiVercel />
                                </div>
                                <div>
                                    <a
                                        href="https://shine-kappa.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/owii8247/delicious-thunder-1104"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="https://user-images.githubusercontent.com/100846987/174234398-f67e7d0f-4038-43f8-a060-34b4b45ec6f7.PNG"
                                        alt="Shopbop"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Shopbop Website</h2>
                                <p>
                                Shopbop is the global online retail destination 
                                offering women and men a curated selection of ready-to-wear.
                                
                                </p>
                                <div>
                                    <SiHtml5 />
                                    <DiCss3 />
                                    <SiJavascript />
                                    <VscJson />
                                    <SiHeroku />
                                    <SiNetlify />
                                </div>
                                <div>
                                    <a
                                        href="https://cheerful-smakager-7369c5.netlify.app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/owii8247/Project_Shopbop_Website"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="https://user-images.githubusercontent.com/100846987/167412414-ae5bde53-d768-4b19-a244-67ea6109defb.PNG"
                                        alt="Overstock"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Overstock Website</h2>
                                <p>
                                We connect people with products and services in new and unexpected ways.
                                Collaborative project with team of 6 and completed in 5days.
                                </p>
                                <div>
                                    <SiHtml5 />
                                    <DiCss3 />
                                    <SiJavascript />
                                    <SiNetlify />
                                </div>
                                <div>
                                    <a
                                        href="https://radiant-fairy-66db6d.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/owii8247/Unit3_Overstock_Project"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};