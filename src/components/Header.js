import React from 'react';
import './Header.css';

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">

                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png" />
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-5002-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfzF0jDEyIDMIDllHkqhvicWlZC7P8rzWjtfRGasxpJ_44a-snOxTjfnfsMIkrxhTLsSOtEj-NPwaEbxRnw2cuRU6bZi.png?r=071)%22%3E%20%3C/div%3E" />
                </a>
            </div>
        </header>
    );
}