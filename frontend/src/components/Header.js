import React from 'react';
import './Header.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
  return (
    <header id="main-header">
         <div className="header-content">
            <a href="/Feed">
                <img src={logo} alt="InstaRocket"/>
            </a>
            <a href="/New">
                <img src={camera} alt="Enviar Publicação"/>
            </a>
         </div>
    </header>
  );
}
