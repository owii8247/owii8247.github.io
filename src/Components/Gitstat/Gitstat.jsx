import React from "react";
import "../Gitstat/Gitstat.css"


export const Gitstat = () => {
    return (

        <div >
            <div className="box1" >
                <a href="https://github.com/owii8247">
                    <img

                        align="center"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=owii8247"
                        alt="streak"
                    />
                </a>
            </div>

            <div className="box2">
                <a href="https://github.com/owii8247">
                    <img
                        align="center"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=owii8247"
                        alt="stats"
                    />
                </a>
                <a href="https://github.com/owii8247">
                    <img
                        align="left"
                        src="https://github-readme-stats.vercel.app/api?username=owii8247&count_private=true&show_icons=true"
                        alt="stats"
                    />
                </a>
            </div>
        </div>
    );
}; 