
import './style.css';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import {handleChange, compareUserData} from './../../services/logFunctions';

function Registration() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className='reg-form wrapper'>
            <TextField autoFocus margin="dense"
                id="name" label="Your Name"
                type="name" fullWidth
                onChange={() => handleChange(event, setUserName, userName)}
            />
            <TextField autoFocus margin="dense"
                id="email" label="Your Email"
                type="email" fullWidth
                onChange={() => handleChange(event, setEmail, email)}
            />
            <TextField autoFocus margin="dense"
                id="password" label="Your Password"
                type="password" fullWidth
                helperText="The password length must be at least 8 characters"
                onChange={() => handleChange(event, setPassword, password)}
            />
            <Button variant="contained" sx={{
                width: 120,
                marginTop: 5,
            }}
                onClick={() => compareUserData(userName, email, password)}>
                    SAVE
            </Button>
        </form>
    );
}

export default Registration;
