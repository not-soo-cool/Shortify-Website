import React from 'react'
import './Sidebar.css'
import test21 from "../../LandingPage/Assets/test21.png"
import logobg1 from "../../LandingPage/Assets/logo-bg.png"
import logobg from "../../LandingPage/Assets/logobg.jpeg"
import logobg2 from "../../LandingPage/Assets/logobg2.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FlagIcon from '@mui/icons-material/Flag';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { ButtonBase } from '@mui/material';

const Sidebar = () => {
  return (
    <div className='bodyn'>
        <aside className="sidebar" style={{
                borderRight: '2px solid black'
            }}>
            <ButtonBase>
            <div className="logo" >
                <img src={logobg2} alt="logo" />
                {/* <img src={logo} alt="logo" /> */}
                {/* <h2>CodingNepal</h2> */}
            </div>
            </ButtonBase>
            <ul className="links" >
                <h4>Main Menu</h4>
                <li >
                <span 
                className="material-symbols-outlined"><DashboardIcon style={{
                        color: 'black'
                    }}/></span>
                <a href="#" >Dashboard</a>
                </li>
                <li>
                <span className="material-symbols-outlined">
                    <ShowChartIcon style={{
                        color: 'black'
                    }}/>
                </span>
                <a href="#">Revenue</a>
                </li>
                <li>
                <span className="material-symbols-outlined">
                    <FlagIcon style={{
                        color: 'black'
                    }}/>
                </span>
                <a href="#">Reports</a>
                </li>
                <hr/>
                <h4>Advanced</h4>
                <li>
                <span className="material-symbols-outlined">
                    <PersonOutlineIcon style={{
                        color: 'black'
                    }}/>
                </span>
                <a href="#">Designer</a>
                </li>
                <li>
                <span className="material-symbols-outlined">
                    <PeopleAltIcon style={{
                        color: 'black'
                    }}/>
                </span>
                <a href="#">Developer </a>
                </li>
                {/* <li>
                <span className="material-symbols-outlined">ambient_screen</span>
                <a href="#">Magic Build</a>
                </li> */}
                {/* <li>
                <span className="material-symbols-outlined">pacemaker</span>
                <a href="#">Theme Maker</a>
                </li> */}
                <li>
                <span className="material-symbols-outlined">
                    <AnalyticsIcon style={{
                        color: 'black'
                    }}/>
                </span>
                <a href="#">Analytic</a>
                </li>
                <hr/>
                <h4>Account</h4>
                <li>
                <span className="material-symbols-outlined">
                    <BarChartIcon style={{
                        color: 'black'
                    }}/>
                </span>
                <a href="#">Overview</a>
                </li>
                <li>
                <span className="material-symbols-outlined">
                    <MailOutlineIcon style={{
                        color: 'black'
                    }}/>
                </span>
                <a href="#">Message</a>
                </li>
                <li>
                <span className="material-symbols-outlined">
                    <SettingsIcon style={{
                        color: 'black'
                    }}/>
                </span>
                <a href="#">Settings</a>
                </li>
                <li className="logout-link">
                <span className="material-symbols-outlined">
                    <LogoutIcon style={{
                        color: 'black'
                    }}/>
                </span>
                <a href="#">Logout</a>
                </li>
            </ul>
        </aside>
    </div>
  )
}

export default Sidebar
