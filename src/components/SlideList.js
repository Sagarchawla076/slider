import React from "react";
import Slide from "./Slide";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const SlideList = ({ people, index, setIndex }) => {
  const renderList = people.map((person, personIndex, people) => {
    return (
      <Slide
        person={person}
        index={index}
        setIndex={setIndex}
        personIndex={personIndex}
        people={people}
      />
    );
  });

  return (
    <div className="slide-list">
      <div className="btn-left" onClick={() => setIndex(index - 1)}>
        <FaChevronLeft />
      </div>
      {renderList}
      <div className="btn-right" onClick={() => setIndex(index + 1)}>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default SlideList;
