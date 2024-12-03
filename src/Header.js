import React from 'react'
import './Header.css'
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { signOut } from "firebase/auth";
import {auth} from './firebase';
import SearchIcon from '@material-ui/icons/Search';
import linkedinLogo from './assets/icons/linkedin.png';
import HeaderOption  from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"

function Header() {
  const dispatch = useDispatch();

const logoutOfApp = () => {
  signOut(auth)
    .then(() => {
      dispatch(logout());
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
};
  return (
    <div className = 'header'>

        <div className='header__left'>
            <img src = {linkedinLogo} alt = ""/>

        <div className='header__search'>
            {/* Search icon */}
            <SearchIcon/>
            <input placeholder = 'Search' type = "text"></input>
        </div>  
        </div>

        <div className='header__right'>
            <HeaderOption Icon = {HomeIcon} title = "Home"/>
            <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network"/>
            <HeaderOption Icon = {BusinessCenterIcon} title = "Jobs"/>
            <HeaderOption Icon = {ChatIcon} title = "Messaging"/>
            <HeaderOption Icon = {NotificationsIcon} title = "Notifications"/>
            <HeaderOption avatar={BusinessCenterIcon} title = 'me' />
        </div> 
    </div>
  )
}

export default Header
