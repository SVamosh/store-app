
import { nanoid } from 'nanoid';

import slide1 from './../../public/img/slider/01.jpg';
import slide2 from './../../public/img/slider/02.jpg';
import slide3 from './../../public/img/slider/03.jpg';

const mainSlides = [
    {
        id: nanoid(10),
        img: slide1,
    },

    {
        id: nanoid(10),
        img: slide2,
    },

    {
        id: nanoid(10),
        img: slide3,
    },
];

export { mainSlides };