import React from "react";
import "./Techstacks.css";
import { FaReact } from "react-icons/fa";
import {
    SiRedux,
    SiHtml5,
    SiChakraui,
    SiSwiper,
    SiNetlify,
    SiVercel,
    SiNodedotjs,
    SiNodemon,
    SiPostman,
    SiExpress,
    SiMongodb,
    SiRailway,SiAndroidstudio ,SiXcode, 
    SiTypescript,
    SiNextdotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiHeroku,SiMysql  } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { FaPhp,FaLaravel,FaNpm   } from "react-icons/fa";
export const Techstacks = () => {
    return (
        <>
        
            <div className="section main" data-aos="fade-right">
                <h2 className="section__title different">TECH STACKS</h2>
                <div className="techsection">

                    <div>
                        <SiHtml5 />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <DiCss3 />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <SiJavascript />
                        <h5>Javascript</h5>
                    </div>
                    <div>
                        <FaReact />
                        <h5>React</h5>
                    </div>
                    <div>
                        <FaReact />
                        <h5>React Native</h5>
                    </div>
                    <div>
                        <SiRedux />
                        <h5>Redux</h5>
                    </div>
                    <div>
                        <FaPhp />
                        <h5>Php</h5>
                    </div>
                    <div>
                        <FaLaravel  />
                        <h5>Laravel</h5>
                    </div>
                    <div>
                        <SiMysql  />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <SiAndroidstudio  />
                        <h5>Android Studio</h5>
                    </div>
                    <div>
                        <SiXcode  />
                        <h5>XCode</h5>
                    </div>
                    <div>
                        <SiChakraui />
                        <h5>Chakra UI</h5>
                    </div>
                    <div>
                        <VscGithub />
                        <h5>Github</h5>
                    </div>
                    <div>
                        <SiSwiper />
                        <h5>Swiper JS</h5>
                    </div>
                    <div>
                        <BsBootstrap />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <SiNetlify />
                        <h5>Netlify</h5>
                    </div>
                    <div>
                        <SiVercel />
                        <h5>Vercel</h5>
                    </div>
                    
                    <div>
                        <SiTypescript />
                        <h5>Typescript</h5>
                    </div>
                    <div>
                        <FaNpm  />
                        <h5>NPM</h5>
                    </div>
                    <div>
                        <SiNodedotjs />
                        <h5>Node Js</h5>
                    </div>
                    <div>
                        <SiNextdotjs />
                        <h5>Next Js</h5>
                    </div>
                    <div>
                        <SiPostman />
                        <h5>Postman</h5>
                    </div>
                    <div>
                        <SiExpress />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <SiMongodb />
                        <h5>MongoDB</h5>
                    </div>
                    

                    

                </div>
            </div>
            
        </>
    );
};