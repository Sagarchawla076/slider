import React, { useState, useEffect } from "react";
import { fiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./Data";
import "../styles/main.scss";
import SlideList from "./SlideList";
import Heading from "./Heading";
const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <Heading />
      <SlideList people={people} index={index} setIndex={setIndex} />
    </div>
  );
};
export default App;
