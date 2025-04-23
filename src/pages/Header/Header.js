
import './style.css';
import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function Header() {
    const [open, setOpen] = useState(false);

    const openRegForm = () => {
        setOpen(true);
    }
    
    const closeRegForm = () => {
        setOpen(false);
    }

    return (
        <header className="header">
            <button className='registration-btn' onClick={openRegForm}>
                LOG IN<HowToRegIcon />
            </button>
            <Dialog open={open} onClose={closeRegForm} aria-labelledby="form-registration">
                <DialogTitle id="form-registration">
                    LOG IN
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Log in to shop
                    </DialogContentText>
                    <TextField autoFocus margin="dense"
                        id="name" label="Your Email"
                        type="email" fullWidth />
                    <TextField autoFocus margin="dense"
                        id="password" label="Password"
                        type="password" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeRegForm}>Cancel</Button>
                    <Button>Save</Button>
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
                        <NavLink className="navbar__link" to="/">wear store</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink className="navbar__link" to="/delivery">delivery</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink className="navbar__link" to="/cart">cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;