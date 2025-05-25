
import './style.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Orders() {
    const orders = useSelector(state => state.orders.orders);
    const ordersList = orders.flat().map(([index, name, price]) => {
        return (
            <ListItem key={index} className="orders__list-item">
                <ListItemAvatar>
                    <Avatar sx={{backgroundColor: '#802580'}}>
                        <CheckCircleOutlineIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{color: '#000000'}}
                 primary={name} secondary={price + ' $'} />
            </ListItem>
        );
    });

    return (
        <div className="orders wrapper">
            <h3 className="orders__header">
                Purchase history
            </h3>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {ordersList}
            </List>
        </div>
    );
}

export { Orders };