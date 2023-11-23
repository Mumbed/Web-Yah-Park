import React from 'react';
import images from './images';
import './style/Slider.css';

const Slider = ({ title, slides }) => {
    const [slideNumber, setSlideNumber] = React.useState(0);
    const sliderRef = React.useRef(null);
    const nextArrow = React.useRef(null);
  
    const navigationHandle = (direction) => {
      let newSlideNumber;
      const totalNoofSlides = sliderRef.current.children.length - 1;
      direction === "left"
        ? (newSlideNumber = slideNumber === 0 ? totalNoofSlides : slideNumber - 1)
        : (newSlideNumber =
            slideNumber === totalNoofSlides ? 0 : slideNumber + 1);
      setSlideNumber(newSlideNumber);
  
      // adding/removing active class from slides
      Array.from(sliderRef.current.children).forEach((slide) =>
        slide.classList.remove("active")
      );
      sliderRef.current.children[newSlideNumber].classList.add("active");
    };
  
    // autoplay
    React.useEffect(() => {
      const interval = setInterval(() => {
        nextArrow.current.click();
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    // checking if no slides available
    if (slides.length <= 0) {
      return "No slides available..";
    }
  
    return (
      <div className="sliderWrapper">
        {title && <h3 className="sliderTitle">{title}</h3>}
        <button className="prevArrow" onClick={() => navigationHandle("left")}>
          «
        </button>
        <div className="slider" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div className={`slide${index === 0 ? " active" : ""}`} key={index}>
              {slide.source && (
                <img
                  src={slide.source}
                  alt={slide.title}
                  loading="lazy"
                  draggable={false}
                />
              )}
              {slide.title && <h3>{slide.title}</h3>}
            </div>
          ))}
        </div>
        <button
          className="nextArrow"
          onClick={() => navigationHandle("right")}
          ref={nextArrow}
        >
          »
        </button>
        <div className="sliderPagination">
          {slideNumber + 1} / {slides.length}
        </div>
      </div>
    );
};

export default Slider;
