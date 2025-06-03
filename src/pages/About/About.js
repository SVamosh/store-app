
import './style.css';
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { addReview } from './../../store/reviewsSlice';

function About() {
  const dispatch = useDispatch();
  const reviewsData = useSelector(state => state.reviews.reviews);
  const [review, setReview] = useState('');
  const logIn = localStorage.getItem('logIn');
  const mediaListData = [
    {
      iconName: <FacebookIcon />,
      link: '#',
      text: ' - Facebook',
    },
    {
      iconName: <TelegramIcon />,
      link: '#',
      text: ' - Telegram',
    },
    {
      iconName: <InstagramIcon />,
      link: '#',
      text: ' - Instagram',
    },
    {
      iconName: <XIcon />,
      link: '#',
      text: ' - X(twitter)',
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 35 });

  const scrollPrev = useCallback(() => {
    emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    emblaApi.scrollNext();
  }, [emblaApi]);

  const reviews = reviewsData.map(([userName, review], index) => {
    return (
      <div key ={index} className="embla__slide">
        <i>{review}</i>
        <p>{userName}</p>
      </div>
    );
  });

  const mediaList = mediaListData.map(({iconName, link, text}, index) => {
    return (
      <li key={index}>
        <a href={link}>
          {iconName}
          {text} 
        </a>
      </li>
    );
  });

  const writeReview = (text) => {
    (logIn === null) 
    ? alert('Please, log in so you can write reviews')
    : setReview(text);
  }

  const publishReview = () => {
    (logIn === null) 
    ? alert('Please, log in so you can publish reviews')
    : dispatch(addReview([logIn, review]));
    setReview('');
  } 

  return (
    <div className="about wrapper">
      <div className="about__description">
        <p className="about__text">
          Wear Store is an online space where fashion and modern technologies
          meet. We are pleased to offer you collections from the best world brands
          and help you choose the perfect wardrobe for all occasions. And also
          provide you with high-quality service, fast delivery and a profitable
          loyalty system. We were founded by a group of enthusiasts in 2021 and
          have since carved out our niche in the clothing and fashion accessories
          market.Every year we strive to improve the quality of our products and
          services. After all, our goal is the joy of our customers
        </p>

        <div className="social-media">
          <h3>For more information you can visit our social media:</h3>

          <ul className="social-media__list">
            {mediaList}
          </ul>
        </div>
      </div>
      
      <div className="reviews">
        <div className="reviews__slider">
          <h3>reviews from our clients</h3>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {reviews}
            </div>
            <button className="embla__prev" onClick={scrollPrev}>&#9668;</button>
            <button className="embla__next" onClick={scrollNext}>&#9658;</button>
          </div>
        </div>

        <div className="user__review">
          <h3>You can leave your review here: </h3>
          <form className="review__form">
            <TextField color="secondary" focused
              sx={{backgroundColor: '#FFFFFF', borderRadius: '4px'}}
              margin="dense" value={review}
              multiline minRows={6}
              type="text" fullWidth
              inputProps={{ maxLength: 200 }}
              helperText="maximum number of characters - 200"
              onChange={(event) => writeReview(event.target.value)}
            />
            <Button className="review__button" sx={{color: '#802580'}}
             onClick={publishReview}>
              PUBLISH
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { About };