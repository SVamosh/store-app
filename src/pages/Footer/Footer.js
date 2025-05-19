
import './style.css';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__ info wrapper">
                <div className="footer__logo">
                    WEAR STORE
                </div>

                <div className="footer__contacts">
                    <div className="address">
                            <h3 className="address__header">you can visit us: </h3>
                            <div className="address__text">
                                <p>125475, Moscow</p>  
                                <p>NAO, Khovrino District</p>
                            </div>
                    </div>

                    <div className="work-time">
                        <h3 className="work-time__header">opening hours: </h3>
                        <div className="work-time__text">
                            <p>
                                Monday-Friday 10.00-21.00
                            </p>
                            <p>
                                Saturday-Sunday 10.00-17.00
                            </p>
                        </div>
                    </div>
                </div>

                <div className="social__links">
                    <a href="#">
                        <FacebookIcon sx={{fontSize: 35}}/>
                    </a>

                    <a href="#">
                        <TelegramIcon sx={{fontSize: 35}}/>
                    </a>

                    <a href="#">
                        <InstagramIcon sx={{fontSize: 35}}/>
                    </a>
                    <a href="#">
                        <XIcon sx={{fontSize: 35}}/>
                    </a>
                </div>

                <div className="copyright">
                    <p>&copy; SVamosh dev, {year}</p>
                </div>
            </div>
        </footer>
    );
}

export { Footer };