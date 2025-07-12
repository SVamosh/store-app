
import './style.css';
import React, { useState, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography, 
    Box, 
    InputLabel, 
    MenuItem, 
    FormControl, 
    Select,
    Tooltip,
    Drawer
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { Spinner } from './../../components/Spinner/index';
import { goodsCategories } from '../../services/goodsCategories';
import { getApiData } from './../../services/api';

function Catalog() {
    const [goodsList, setGoodsList] = useState([]);
    const [filteredAndSortedList, setFilteredAndSortedList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [searchThing, setSearchThing] = useState('');
    const [sorting, setSorting] = useState('');
    const dispatch = useDispatch();
    const logIn = localStorage.getItem('logIn');
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const loadCatalog = async () => {
            try {
                setLoading(true);
                const goods = await getApiData();
                setGoodsList(goods);
                setFilteredAndSortedList(goods);
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

    const chooseCategory = (category) => {
        if (category === 'all categories') {
            setFilteredAndSortedList(goodsList)
        } else {
            setFilteredAndSortedList(goodsList.filter(item => item.category === category));
        }
    }

    const filterButtons = goodsCategories.map(({index, category}) => {
        return (
            <Button key={index} id={index} sx={{color: '#FF7F50'}} className="filter__button"
             onClick={() => chooseCategory(category)}>
                {category}
            </Button>
        );
    });

    useMemo(() => {
        const copy = [...filteredAndSortedList];
        if (sorting === 'ascending') {
            setFilteredAndSortedList(copy.sort((a, b) => a.price - b.price));
        } else if (sorting === 'descending') {
            setFilteredAndSortedList(copy.sort((a, b) => b.price - a.price));
        } else if (sorting === '') {
            setFilteredAndSortedList(goodsList);
        }
    }, [sorting]);

    const changedData = useMemo(() => {
        return filteredAndSortedList.filter(thing => {
            return thing.title.toLowerCase().includes(searchThing.toLowerCase());
        })
    }, [filteredAndSortedList, searchThing]);

    const catalog = changedData.map(({id, title, price, description, category, image}) => {
        return <Card className="card" key={id} 
                sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title={title}
                />
                    <CardContent className="card__description">
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{color: '#802580'}}>
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
                        <Button size="small" sx={{color: '#802580'}}
                         onClick={() => addProductToCart(title, price)}>
                            BUY <ShoppingCartIcon />
                        </Button>

                        <Button size="small" sx={{color: '#802580'}}>
                            LIKE <FavoriteBorderIcon />
                        </Button>
                    </CardActions>
                </Card>
    }); 

    return (
        <div className="catalog wrapper">
            <Tooltip title="FILTER AND SORT GOODS">
                <Button onClick={() => setDrawerOpen(true)}
                 sx={{color: '#802580', border: '1px solid #802580', backgroundColor: '#FFFFFF'}}>
                    <DehazeIcon sx={{color: '#802580'}}/>
                </Button>
            </Tooltip>
            <Drawer
                anchor="left"
                open={drawerOpen}
                PaperProps={{
                    sx: {
                      width: { xs: '80%', sm: 260, md: 320 },
                    },
                }}
            >
                <Box sx={{ backgroundColor: '#FFFFFF' }}>
                    <FormControl sx={{width: '85%', margin: '10px'}}>
                        <InputLabel color="warning" id="demo-simple-select-label">
                            Sort Goods
                        </InputLabel>
                        <Select
                            labelId="demo-simple-label"
                            id="demo-simple-select"
                            value={sorting}
                            label="Sort Goods"
                            onChange={(event) => setSorting(event.target.value)}
                            color="warning"
                        >
                            <MenuItem className="sorting__item" 
                             value="">
                                WITHOUT SORTING
                            </MenuItem>
                            <MenuItem className="sorting__item" 
                             value={'ascending'}>
                                ASCENDING PRICE
                            </MenuItem>
                            <MenuItem className="sorting__item" 
                             value={'descending'}>
                                DESCENDING PRICE
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {filterButtons}
                <Button onClick={() => setDrawerOpen(false)}
                 sx={{color: '#802580'}}>
                    CLOSE<CloseIcon />
                </Button>
            </Drawer>
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