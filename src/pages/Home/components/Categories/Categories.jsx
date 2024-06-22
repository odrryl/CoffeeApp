import { useState } from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

export const Categories = ({ setActiveCategory }) => {
  const [activeCategory, setActiveCategoryLocal] = useState("all");

  const handleCategoryClick = (category) => {
    setActiveCategoryLocal(category);
    setActiveCategory(category);
  };

  return (
    <section className="categories">
      <ul className="categories-ul">
        <li className="categories-li">
          <Link
            to="#"
            className={`categories-a ${
              activeCategory === "all" ? "active-link" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick("all");
            }}
          >
            All
          </Link>
        </li>
        <li className="categories-li">
          <Link
            to="#"
            className={`categories-a ${
              activeCategory === "cappuccino" ? "active-link" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick("cappuccino");
            }}
          >
            Cappuccino
          </Link>
        </li>
        <li className="categories-li">
          <Link
            to="#"
            className={`categories-a ${
              activeCategory === "espresso" ? "active-link" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick("espresso");
            }}
          >
            Espresso
          </Link>
        </li>
        <li className="categories-li">
          <Link
            to="#"
            className={`categories-a ${
              activeCategory === "americano" ? "active-link" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick("americano");
            }}
          >
            Americano
          </Link>
        </li>
        <li className="categories-li">
          <Link
            to="#"
            className={`categories-a ${
              activeCategory === "macchiato" ? "active-link" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick("macchiato");
            }}
          >
            Macchiato
          </Link>
        </li>
      </ul>
    </section>
  );
};
