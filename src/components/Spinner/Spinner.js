
import './style.css';
import React from 'react';
import waiting from './../../../public/img/spinner/waiting.jpg';

function Spinner () {
    return (
        <div className="spinner wrapper">
            <h2 className="spinner__header">
                The page is loading, please wait!
            </h2>
            <img className="spinner__image" src={waiting} alt="waiting" />
        </div>
    );
}

export { Spinner };