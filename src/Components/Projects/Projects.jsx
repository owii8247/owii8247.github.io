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
    SiNetlify,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiJsonwebtokens
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
                                        src="https://private-user-images.githubusercontent.com/100846987/611320096-34946027-8ef8-442d-9c5e-75fb45b1d5d4.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODIxNDYxNDMsIm5iZiI6MTc4MjE0NTg0MywicGF0aCI6Ii8xMDA4NDY5ODcvNjExMzIwMDk2LTM0OTQ2MDI3LThlZjgtNDQyZC05YzVlLTc1ZmI0NWIxZDVkNC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDYyMiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA2MjJUMTYzMDQzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZDcyOTkxYTgwZTQ2MGEyODZhMjZjZTMzZjFlNTI5NGEyY2ExN2NlNTNmNjExMmViOGYyZWEwOTk4MjUxMzNlNiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGanBlZyJ9.MUcRFXYDK58qB9J12zHNV4usDuo87Od8cstP7sst61E"
                                        alt="premium-website"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Premium Website</h2>
                                <p>
                                    Modern Transportation & Logistics Platform English & Arabic Support (RTL/LTR), Dark & Light Themes
                                </p>
                                <div>
                                    <SiMongodb />
                                    <SiExpress />
                                    <FaReact />
                                    <SiNodedotjs />
                                    <SiJsonwebtokens />
                                    <SiChakraui />
                                    <SiSwiper />
                                    <SiVercel />
                                </div>
                                <div>
                                    <a
                                        href="https://premium-webdesign.lovable.app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/owii8247/premium-webdesign"
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
                                        src="https://private-user-images.githubusercontent.com/100846987/611326383-808ee863-0dcc-49ec-a6cb-d536a10be919.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODIxNDcwMzAsIm5iZiI6MTc4MjE0NjczMCwicGF0aCI6Ii8xMDA4NDY5ODcvNjExMzI2MzgzLTgwOGVlODYzLTBkY2MtNDllYy1hNmNiLWQ1MzZhMTBiZTkxOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDYyMlQxNjQ1MzBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZmQwZDg1OTliNmI3YTFkYWYyMGVmMTY2OTI2YTk5NTg5YTQ1ZTQwMmUyNjU5M2Y3YTE2NjA1Y2I3ZjRiMGY5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.iQjFUh0CB-xDnojyX7y-TTt-FE8eEgkWmTFHY1FWr40"
                                        alt="wood-cabinet-factory"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Wood Cabinet Factory</h2>
                                <p>
                                    Wood Cabinet Factory is a Full Stack MERN Website with CRUD functionalities at Admin Dashboard.
                                </p>
                                <div>
                                    <SiMongodb />
                                    <SiExpress />
                                    <FaReact />
                                    <SiNodedotjs />
                                    <SiJsonwebtokens />
                                    <SiChakraui />
                                    <SiSwiper />
                                    <SiVercel />
                                </div>
                                <div>
                                    <a
                                        href="https://wood-cabinet-factory.lovable.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/owii8247/ember-catalog.git"
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
                                        src="https://user-images.githubusercontent.com/100846987/212459270-e62d3bd1-d9ff-4b83-9fb2-bfb3d9c32734.PNG"
                                        alt="foundit"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>foundit (Monster)</h2>
                                <p>
                                    foundit, formerly Monster, foundit is Full Stack MERN Website
                                    with CRUD functionalities at Admin Dashboard.
                                </p>
                                <div>
                                    <SiMongodb />
                                    <SiExpress />
                                    <FaReact />
                                    <SiNodedotjs />
                                    <SiJsonwebtokens />
                                    <SiChakraui />
                                    <SiSwiper />
                                    <SiVercel />
                                </div>
                                <div>
                                    <a
                                        href="https://monster-gamma.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/owii8247/foundit_clone"
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
                                        src="https://user-images.githubusercontent.com/101389401/194386115-bb71c308-ceeb-41a2-a9bf-700defde1c18.png"
                                        alt="Fraazo"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Urban Company</h2>
                                <p>
                                    Urban Company is Asia's largest online home service platform.
                                    Collaborative project with team of 4 members completed in 5days.
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
                                        href="https://urban-company-kappa.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/sonuprasad66/tense-visitor-349"
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
                    {/* <div className="projects_container" data-aos="fade-right">
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
                    </div> */}
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
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img
                                        src="https://user-images.githubusercontent.com/100846987/171915023-44e6b950-8616-46b9-ad83-d5a6b67e75ad.PNG"
                                        alt="Shopbop"
                                    />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Youtube Mini</h2>
                                <p>
                                    YouTube Mini App is small application which work similarly as YouTube without any add.
                                    You can search anything available on YouTube.

                                </p>
                                <div>
                                    <SiHtml5 />
                                    <DiCss3 />
                                    <SiJavascript />

                                </div>
                                <div>
                                    <a
                                        href="https://superb-panda-f470b5.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span type="button" className="btns onbt">
                                            Go Live
                                        </span>
                                    </a>
                                    <a
                                        href="https://github.com/owii8247/YouTube_Mini_App"
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