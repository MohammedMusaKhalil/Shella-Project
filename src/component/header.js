import React, { useState, useEffect } from 'react';
import './css/landingpage.css';
import logo from './img/Shellalogo.png';
import Flag from './img/saudiarabia.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [showHeader, setShowHeader] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
            <div className="logo">
                <img src={logo} alt="Shella company logo" />
            </div>
            <div className="header-btn">
                <img src={Flag} alt="Flag of Saudi Arabia" />
                <span>العربية</span>
                <button aria-label="تغيير اللغة">
                    <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '24px', color: '#2ecc71' }} />
                </button>
            </div>
        </header>
    );
}

export default Header;
