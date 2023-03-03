import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat'; 
import NotificationsIcon from '@material-ui/icons/Notifications'; 
function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder='Search'/>
            </div>

        </div>
        <div className="header__right">
        <HeaderOption Icon={HomeIcon} title ='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon}title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title ='My Jobs'/>
        <HeaderOption Icon={ChatIcon}title='Chat'/>
        <HeaderOption Icon={NotificationsIcon} title ='Notifications'/>
        <HeaderOption avatar="https://media.istockphoto.com/id/469769544/photo/sailing-in-boston.jpg?s=612x612&w=0&k=20&c=A5UjbfraYncMpb77w1ShUH1CiyWB-LEvWU3Nq0nV9fc=" title="Me" />
        

        </div>
    </div>
  )
}

export default Header