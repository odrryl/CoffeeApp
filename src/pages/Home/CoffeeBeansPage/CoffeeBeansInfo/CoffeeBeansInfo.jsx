import "./CoffeeBeansInfo.scss";
import React, { useState } from "react";

export const CoffeeBeansInfo = () => {
  const [activeButton, setActiveButton] = useState(null); // Стейт для зберігання активної кнопки

  const handleButtonClick = (size) => {
    setActiveButton(size); // Встановлюємо активну кнопку при натисканні
  };

  const cb_info = {
    title_1: "Description",
    desc: "Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ",
    title_2: "Size",
    title_3: "Price",
    categorie: "Medium Roasted",
    btn: "Add to Cart",
    price: "10.50",
    size_1: "250gm",
    size_2: "500gm",
    size_3: "1000gm",
  };

  return (
    <section className="cb-info">
      <h2 className="cb-info__title">{cb_info.title_1}</h2>
      <p className="cb-info__desc">{cb_info.desc}</p>
      <h2 className="cb-info__title">{cb_info.title_2}</h2>
      <div className="cb-info__group">
        <button
          className={`cb-info__size-btn ${
            activeButton === cb_info.size_1 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(cb_info.size_1)}
        >
          {cb_info.size_1}
        </button>
        <button
          className={`cb-info__size-btn ${
            activeButton === cb_info.size_2 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(cb_info.size_2)}
        >
          {cb_info.size_2}
        </button>
        <button
          className={`cb-info__size-btn ${
            activeButton === cb_info.size_3 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(cb_info.size_3)}
        >
          {cb_info.size_3}
        </button>
      </div>

      <div className="cb-info__add">
        <div className="cb-info__price-group">
          <h3 className="cb-info__price-title">{cb_info.title_3}</h3>
          <p className="cb-info__price">
            <span>$</span> {cb_info.price}
          </p>
        </div>

        <button className="btn cb-info__btn">{cb_info.btn}</button>
      </div>
    </section>
  );
};
