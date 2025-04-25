
import './style.css';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { mainSlides } from '../../services/mainSlides';


function Main() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 35 });

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    const slider = mainSlides.map(({id, img}) => {
        return (
            <div key={id}>
                <img src={img} className="slide__image" />
            </div>
        );
    })

    return (
        <main className='main wrapper'>
            <div className="embla container">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slider}
                    </div>
                </div>

                <button className="embla__prev" onClick={scrollPrev}>&#9668;</button>
                <button className="embla__next" onClick={scrollNext}>&#9658;</button>
            </div>
        </main>
    );
}

export { Main };