import React, { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./GitHub.css";

const GitHub = () => {
  const [activeTab, setActiveTab] = useState('work');

  const usernames = {
    work: 'mdowais-techno',
    personal: 'owii8247'
  };

  return (
    <div>
      <h2 className="section__title different">DAYS I CODE</h2>
      
      <div className='github_tabs'>
        <button 
          className={`tab_button ${activeTab === 'work' ? 'active' : ''}`}
          onClick={() => setActiveTab('work')}
        >
          Work <span className='tab_username'>@{usernames.work}</span>
        </button>
        <button 
          className={`tab_button ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal <span className='tab_username'>@{usernames.personal}</span>
        </button>
      </div>
      
      <div className='github_Calender'>
        <GitHubCalendar 
          style={{margin:"auto"}}
          username={usernames[activeTab]}
        />
      </div>
    </div>
  )
}

export default GitHub