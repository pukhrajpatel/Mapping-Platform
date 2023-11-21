import React, { useState } from 'react'
import './NavBar.css'
import logoPic from '../../Assets/profile-logo.png';

import { useContext } from 'react';
import { ThemeContext } from '../../pages/MyContext';

function NavBar(){
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const nameV = isDarkMode ? 'dark' : 'light';
    const nameV1 = isDarkMode ? 'light' : 'dark';
    return (
        <div className={`nav-bar-container ${isDarkMode?'dk':'lt'}`} style={{position:'fixed'}}>
            <img
                src={`https://assets.ccbp.in/frontend/react-js/website-logo-${nameV}-theme-img.png`}
                className="website-logo"
                alt="website logo"
            />
            <ul className="middle-items">
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={logoPic} alt="" width="32" height="32" class="rounded-circle me-2" />
                        <strong className={`${isDarkMode?'lk-dark':'lk-light'}`}>Prithviraj Chouhan</strong>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style={{ marginRight: '10rem'}}>
                        <li><a class="dropdown-item" href="#">Log out</a></li>
                    </ul>
                </div>
            </ul>
            <button
                type="button"
                className="theme-button"
                testid="theme"
                onClick={toggleTheme}
            >
                <img
                    src={`https://assets.ccbp.in/frontend/react-js/${nameV1}-theme-img.png`}
                    className="theme-img"
                    alt="theme"
                />
            </button>
        </div>
    )

    // const [isDarkTheme, setIsDarkTheme] = useState(false);
    // const toggleTheme=()=>{
    //     setIsDarkTheme(!isDarkTheme)
    // }
    // return(
    //     <div style={{position:'fixed', width:'100vw', top:0, zIndex:9999}}>
    //     {!isDarkTheme? (
    //         <div className="nav-bar-container-light">
    //             <img
    //                 src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
    //                 className="website-logo"
    //                 alt="website logo"
    //             />
    //             <ul className="middle-items">
    //                 <div class="dropdown">
    //                     <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
    //                         <img src={logoPic} alt="" width="32" height="32" class="rounded-circle me-2" />
    //                         <strong className='lk-light'>Prithviraj Chouhan</strong>
    //                     </a>
    //                     <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style={{ marginRight: '10rem'}}>
    //                         <li><a class="dropdown-item" href="#">Log out</a></li>
    //                     </ul>
    //                 </div>
    //             </ul>
    //             <button
    //                 type="button"
    //                 className="theme-button"
    //                 testid="theme"
    //                 onClick={toggleTheme}
    //             >
    //                 <img
    //                     src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
    //                     className="theme-img"
    //                     alt="theme"
    //                 />
    //             </button>
    //         </div>
    //     ) : (
    //         <div className="nav-bar-container-dark">
    //             <img
    //                 src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
    //                 className="website-logo"
    //                 alt="website logo"
    //             />
    //             <ul className="middle-items">
    //                 <div class="dropdown">
    //                     <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
    //                         <img src={logoPic} alt="" width="32" height="32" class="rounded-circle me-2" />
    //                         <strong className='lk-dark'>Prithviraj Chouhan</strong>
    //                     </a>
    //                     <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style={{ marginRight: '10rem' }}>
    //                         <li><a class="dropdown-item" href="#">Log out</a></li>
    //                     </ul>
    //                 </div>
    //             </ul>
    //             <button
    //                 type="button"
    //                 className="theme-button"
    //                 testid="theme"
    //                 onClick={toggleTheme}
    //             >
    //                 <img
    //                     src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
    //                     className="theme-img"
    //                     alt="theme"
    //                 />
    //             </button>
    //         </div>
    //     )}
    //     </div>
    // )
}
export default NavBar;