import React from 'react';
import logoNetflix from './netflix.jpg';
import './Header.css';

export default () => {
    return (
        <header>
            <div className="header--logo">

            <img src={logoNetflix}/>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src=""/>
                    {/* comentario teste */}
                </a>
            </div>
        </header>
    );
}