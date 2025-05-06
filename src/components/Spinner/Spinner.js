
import './style.css';
import React from 'react';
import { CircularProgress } from '@mui/material';

function Spinner () {
    return (
        <div className="spinner wrapper">
            <h2 className="spinner__header">
                The page is loading, please wait!
            </h2>
            <div className="spinner__image">
                <CircularProgress size="35px" />
                <CircularProgress size="45px" />
                <CircularProgress size="55px" />
            </div>
        </div>
    );
}

export { Spinner };