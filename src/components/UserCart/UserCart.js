
import './style.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { removeFromCart } from './../../store/cartSlice';

function UserCart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cart);

    const userCart = cartItems.map(([id, title, price]) => {
        return <li key={id} className="cart__item">
                    <div>
                        <p>
                            {title + ': ' + price + '$'}
                        </p>
                        <Button onClick={() => dispatch(removeFromCart([id, price]))}
                         sx={{color: "#802580"}}>
                            DELETE FROM CART
                        </Button>
                    </div>
                </li>
    });

    return (
        <ol className="cart__list">
            {userCart}
        </ol>
    );
}

export { UserCart };