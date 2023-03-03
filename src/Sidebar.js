import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItems = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1570304816841-906a17d7b067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMHNreWxpbmV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Kevin Daliri</h2>
            <h4>kevindaliri@gmail.com</h4>
        </div>

        <div className="sidebar__stats"> 
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">
                    1,738
                </p>
            </div>
            <div className="sidebar__stat">
            <p>Views on post</p>
                <p className="sidebar__statNumber">
                    1,192
                </p>
                
            </div>
             
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItems('react.js')}
            {recentItems('front-end')}
            {recentItems('UX/UI')}
            {recentItems('webdesign')}
        </div>
        </div>
  )
}

export default Sidebar