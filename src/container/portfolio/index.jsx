import React from "react";
import PageHeaderContent from "../../component/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/first.png";
import ImageTwo from "../../images/chatbot.png";
import ImageThree from "../../images/secondicon.png";
import ImageFour from "../../images/chat mern app.png";
import ImageFive from "../../images/company.png"
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Food-Ordering-Website",
    image: ImageOne,
    link: "https://swigato-food-ordering.netlify.app",
  },
  {
    id: 2,
    name: "Chatbot using openai",
    link: "https://github.com/DeepakKumarSolanki/Chat-gpt-clone.git",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Chat-Mern App",
    image: ImageFour,
    
    link: "https://github.com/DeepakKumarSolanki/Chat-app-mern.git",
  },
  {
    id: 3,
    name: "Amazon Clone",
    image: ImageThree,
    link: "https://amazon-clonewebs.netlify.app",
  },
  {
    id: 3,
    name: "Bootstrap Company Website",
    image: ImageFive,
    link: "https://github.com/DeepakKumarSolanki/Bootstrap-company-website.git",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = (props) => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>
                    <a href={item.link}>
                    Visit
                    </a>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;