
import './style.css';
import React, { useState, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Spinner } from './../../components/Spinner/index';
import { getApiData } from './../../services/api';

const violetBase = '#802580';

const theme = createTheme({
  palette: {
    violet: {
      main: violetBase,
    },
  },
});

function Catalog() {
    const [goodsList, setGoodsList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [searchThing, setSearchThing] = useState('');
    const dispatch = useDispatch();
    const logIn = localStorage.getItem('logIn');

    useEffect(() => {
        const loadCatalog = async () => {
            try {
                setLoading(true);
                const goods = await getApiData();
                setGoodsList(goods);
                setLoading(false);
            } catch (error) {
                console.log(error.name + ': ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        loadCatalog();
    }, []);

    const addProductToCart = (title, price) => {
        if (logIn !== null) {
            dispatch(addToCart([nanoid(8), title, price]));
        } else {
            alert('To make a purchase, please log in');
        }
    }

    const filteredGoods = useMemo(() => {
        return goodsList.filter(thing => {
            return thing.title.toLowerCase().includes(searchThing.toLowerCase());
        })
    }, [goodsList, searchThing]);

    const catalog = filteredGoods.map(({id, title, price, description, category, image}) => {
        return <Card className="card" key={id} 
                sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title={title}
                />
                    <ThemeProvider theme={theme}>
                        <CardContent className="card__description">
                            <Typography gutterBottom variant="h6" component="div">
                                {title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" color="violet">
                                Price: {price}$
                            </Typography>
                            <Typography gutterBottom component="div">
                                #{category}
                            </Typography>

                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions className="card__buttons">
                            <Button size="small" color="violet"
                             onClick={() => addProductToCart(title, price)}>
                                BUY <ShoppingCartIcon />
                            </Button>

                            <Button size="small" color="violet">
                                LIKE <FavoriteBorderIcon />
                            </Button>
                        </CardActions>
                    </ThemeProvider>
                </Card>
    }); 

    return (
        <div className="catalog wrapper">
            <input className="catalog__search"
             onChange={e => setSearchThing(e.target.value)}
             value={searchThing}
             placeholder="enter the name of thing"
            />

            <div className='catalog__info'>
                {isLoading ? <Spinner /> : catalog}
            </div>
        </div> 
    );
}

export { Catalog };