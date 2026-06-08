import React, { useState } from "react";
import "../Gitstat/Gitstat.css"

export const Gitstat = () => {
    const [activeTab, setActiveTab] = useState('work');

    const usernames = {
        work: 'mdowais-techno',
        personal: 'owii8247'
    };

    const currentUsername = usernames[activeTab];

    return (
        <div>
            <div className='gitstat_tabs'>
                <button 
                    className={`gitstat_tab_button ${activeTab === 'work' ? 'active' : ''}`}
                    onClick={() => setActiveTab('work')}
                >
                    Work <span className='gitstat_tab_username'>@{usernames.work}</span>
                </button>
                <button 
                    className={`gitstat_tab_button ${activeTab === 'personal' ? 'active' : ''}`}
                    onClick={() => setActiveTab('personal')}
                >
                    Personal <span className='gitstat_tab_username'>@{usernames.personal}</span>
                </button>
            </div>

            <div className="box1">
                <a href={`https://github.com/${currentUsername}`}>
                    <img
                        align="center"
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${currentUsername}`}
                        alt="streak"
                    />
                </a>
            </div>

            <div className="box2">
                <a href={`https://github.com/${currentUsername}`}>
                    <img
                        align="center"
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${currentUsername}`}
                        alt="stats"
                    />
                </a>
                <a href={`https://github.com/${currentUsername}`}>
                    <img
                        align="left"
                        src={`https://github-readme-stats.vercel.app/api?username=${currentUsername}&count_private=true&show_icons=true`}
                        alt="stats"
                    />
                </a>
            </div>
        </div>
    );
};