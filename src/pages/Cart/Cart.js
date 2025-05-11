
import './style.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearCart } from '../../store/cartSlice';
import { Button } from '@mui/material';
import { UserCart } from './../../components/UserCart';

function Cart () {
    const dispatch = useDispatch();
    const cartTotalPrice = useSelector(state => state.cart.totalPrice);
    const logIn = localStorage.getItem('logIn');
    const userName = logIn === null ? 'please, log in' : logIn; 

    const makeOrder = () => {
        alert('Your order has been successfully created');
        dispatch(clearCart());
    }

    return (
        <div className="cart wrapper">
            <div className="cart__info">
                <div className="cart__user">
                    <h3 className="cart__header">Cart</h3>
                    <p>{userName}</p>
                </div>

                <UserCart />

                <div className="cart__order">
                    <div className="cart__price">
                        price: {cartTotalPrice}$
                    </div>
                        
                    <NavLink to="/" className="order__button">
                        <Button sx={{color: '#802580'}} onClick={() => makeOrder()}>
                            Order
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export { Cart };