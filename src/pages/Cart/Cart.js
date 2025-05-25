
import './style.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearCart } from '../../store/cartSlice';
import { addOrder } from '../../store/ordersSlice';
import { Button } from '@mui/material';
import { UserCart } from './../../components/UserCart';

function Cart () {
    const dispatch = useDispatch();
    const cartTotalPrice = useSelector(state => state.cart.totalPrice);
    const order = useSelector(state => state.cart.cart);
    const logIn = localStorage.getItem('logIn');
    const userName = logIn === null ? 'please, log in' : logIn; 

    const makeOrder = () => {
        if (logIn !== null) {
            alert('Your order has been successfully created');
            dispatch(addOrder(order));
            dispatch(clearCart());
        } else {
            alert('To make an order, please log in');
        }
    }

    return (
        <div className="cart wrapper">
            <div className="orders__list">
                    <NavLink to="/orders" className="orders__link">
                        <Button sx={{color: '#802580', fontWeight: '700'}}>
                            Purchase history
                        </Button>
                    </NavLink>
            </div>

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
                        
                    <Button sx={{color: '#802580'}} onClick={makeOrder}>
                        Order
                    </Button>
                </div>
            </div>
        </div>
    );
}

export { Cart };