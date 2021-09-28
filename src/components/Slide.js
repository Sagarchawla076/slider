import React, { useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
const Slide = ({ person, index, setIndex, personIndex, people }) => {
  const { id, image, name, title, quote } = person;
  let position = "nextSlide";
  if (personIndex === index) {
    position = "activeSlide";
  }
  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === people.length - 1)
  ) {
    position = "prevSlide";
  }
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index > lastIndex) setIndex(0);
    if (index < 0) setIndex(lastIndex);
  }, [index]);
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className={`slide ${position} `}>
      <slide className="slide__img">
        <img src={image} alt={name} />
      </slide>
      <div className="slide__name">
        <span className="slide__name--name">{name} </span>
        <span className="slide__name--title">{title}</span>
      </div>

      <div className="slide__text">{quote}</div>
      <FaQuoteRight className="slide__icon" />
    </div>
  );
};

export default Slide;
