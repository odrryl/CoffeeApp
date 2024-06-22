import "./MultipleCoffeeOrder.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cappuccino1 from '/assets/img/cart/cappuccino-1.png';

export const MultipleCoffeeOrder = () => {
  const multiple_c = {
    image: Cappuccino1,
    title: "Cappuccino",
    desc: "With Steamed Milk",
    tag: "Medium Roasted",
  };

  const size_item = [
    {
      size: "S",
      price: "4.20",
      count: 1,
    },
    {
      size: "M",
      price: "4.20",
      count: 1,
    },
    {
      size: "L",
      price: "4.20",
      count: 1,
    },
  ];

  const [counts, setCounts] = useState(size_item.map((item) => item.count));

  const decrementCount = (index) => {
    if (counts[index] > 0) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  const incrementCount = (index) => {
    if (counts[index] < 10) {
      const newCounts = [...counts];
      newCounts[index] += 1;
      setCounts(newCounts);
    }
  };

  const totalPrice = size_item
    .reduce((acc, item, index) => {
      return acc + parseFloat(item.price) * counts[index];
    }, 0)
    .toFixed(2);

  return (
    <section className="multiple-c">
      <div className="multiple-c__item">
        <div className="multiple-c__preview">
          <img src={multiple_c.image} alt="Cappuccino" />
          <div className="multiple-c__info">
            <h2 className="multiple-c__title">{multiple_c.title}</h2>
            <p className="multiple-c__desc">{multiple_c.desc}</p>
            <p className="multiple-c__tag">{multiple_c.tag}</p>
          </div>
        </div>
        <div className="multiple-c__size">
          {size_item.map((item, index) => (
            <div key={index} className="size__item">
              <p className="size__tag">{item.size}</p>
              <p className="size__price">
                <span>$</span> {item.price}
              </p>
              <button
                className="size__btn btn-minus"
                onClick={() => decrementCount(index)}
              >
                <span className="icon-minus"></span>
              </button>
              <p className="size__count">{counts[index]}</p>
              <button
                className="size__btn btn-minus"
                onClick={() => incrementCount(index)}
              >
                <span className="icon-plus"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
