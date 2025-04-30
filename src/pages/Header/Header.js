
import './style.css';
import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { handleChange, compareUserData, validatePassword } from './../../services/logFunctions';

function Header() {
    const [open, setOpen] = useState(false);
    const logIn = localStorage.getItem('logIn');
    const value = useSelector(state => state.goodsCounter.value);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openRegForm = () => {
        setOpen(true);
    }
    
    const closeRegForm = () => {
        setOpen(false);
    }

    const logOut = () => {
        localStorage.removeItem('logIn');
        location.reload();
    }

    return (
        <header className="header">
            {logIn ? 
            <button className="registration-btn"
                onClick={logOut}>
                {logIn + ' / LOG OUT'}<HowToRegIcon />
            </button> 
            : 
            <button className="registration-btn" 
                onClick={openRegForm}>
                LOG IN<HowToRegIcon />
            </button>}
            <Dialog open={open} onClose={closeRegForm} aria-labelledby="form-registration">
                <DialogTitle id="form-registration">
                    LOG IN
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Log in to shop
                    </DialogContentText>
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
                        id="password" label="Password"
                        type="password" fullWidth 
                        onChange={() => handleChange(event, setPassword, password)}
                    />
                </DialogContent>
                <DialogActions>
                    <div className='log-buttons'>
                    <Button onClick={closeRegForm}>
                        <NavLink className="regFormButton" to="/registration">
                            Registration
                        </NavLink>
                    </Button>

                    <Button onClick={() => {validatePassword(password); compareUserData(userName, email, password);}}>
                        Log in
                    </Button>

                    <Button onClick={closeRegForm}>
                        Cancel
                    </Button>
                    </div>
                </DialogActions>
            </Dialog>
            <nav className="navigation wrapper">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink className="navbar__link" to="/catalog">catalog</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink className="navbar__link" to="/about">about us</NavLink>
                    </li>
                    <li className="logo">
                        <NavLink className="navbar__link" to="/">
                            wear store
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink className="navbar__link" to="/delivery">delivery</NavLink>
                    </li>
                    <li className="navigation__item cart">
                        <NavLink className="navbar__link" to="/cart">cart</NavLink>
                        {logIn && <div className="count">
                            <ShoppingCartIcon fontSize="small" />
                            <span>{value}</span>
                        </div>}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };