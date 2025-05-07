
import './style.css';
import React from 'react';
import { removeFromCart, clearCart } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Cart () {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cart);
    const cartTotalPrice = useSelector(state => state.cart.totalPrice);
    const logIn = localStorage.getItem('logIn');
    const userName = logIn === null ? 'please, log in' : logIn; 
    const violetBase = '#802580';
    const theme = createTheme({
    palette: {
        violet: {
        main: violetBase,
        },
    },
    });

    const makeOrder = () => {
        alert('Your order has been successfully created');
        dispatch(clearCart());
    }

    const userCart = cartItems.map(([id, title, price]) => {
        return <li key={id}>
                    <div className="cart__item">
                        <p>
                            {title + ': ' + price + '$'}
                        </p>
                        <Button onClick={() => dispatch(removeFromCart([id, price]))}
                         color="violet">
                            DELETE FROM CART
                        </Button>
                    </div>
                </li>
    });

    return (
        <div className="cart wrapper">
            <ThemeProvider theme={theme}>
                <div className="cart__info">
                    <div className="cart__user">
                        <h3 className="cart__header">Cart</h3>
                        <p>{userName}</p>
                    </div>

                    <ol className="cart__list">
                        {userCart}
                    </ol>

                    <div className="cart__order">
                        <div className="cart__price">
                            price: {cartTotalPrice}$
                        </div>
                        
                        <NavLink to="/" className="order__button">
                            <Button color="violet" onClick={() => makeOrder()}>
                                Order
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}

export { Cart };