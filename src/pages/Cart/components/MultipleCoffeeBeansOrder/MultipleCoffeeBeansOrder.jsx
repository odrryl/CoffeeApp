import "./MultipleCoffeeBeansOrder.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MultipleCoffeeBeansOrder = () => {
  const multiple_cb = {
    image: "/src/assets/img/cart/coffee-beans-2.png",
    title: "Liberica Coffee Beans",
    desc: "With Steamed Milk",
    tag: "Medium Roasted",
  };

  const size_item = [
    {
      size: "250gm",
      price: "4.80",
      count: 1,
    },
    {
      size: "500gm",
      price: "4.80",
      count: 1,
    },
    {
      size: "1Kg",
      price: "4.80",
      count: 1,
    },
  ];

  const [counts, setCounts] = useState(size_item.map(item => item.count));

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

  const totalPrice = size_item.reduce((acc, item, index) => {
    return acc + parseFloat(item.price) * counts[index];
  }, 0).toFixed(2);

  return (
    <section className="multiple-cb">
      <div className="multiple-cb__item">
        <div className="multiple-cb__preview">
          <img src={multiple_cb.image} alt="Cappuccino" />
          <div className="multiple-cb__info">
            <h2 className="multiple-cb__title">{multiple_cb.title}</h2>
            <p className="multiple-cb__desc">{multiple_cb.desc}</p>
            <p className="multiple-cb__tag">{multiple_cb.tag}</p>
          </div>
        </div>
        <div className="multiple-cb__size">
          {size_item.map((item, index) => (
            <div key={index} className="size__item">
              <p className="size__tag-2">{item.size}</p>
              <p className="size__price">
                <span>$</span> {item.price}
              </p>
              <button className="size__btn btn-minus" onClick={() => decrementCount(index)}>
                <span className="icon-minus"></span>
              </button>
              <p className="size__count">{counts[index]}</p>
              <button className="size__btn btn-minus" onClick={() => incrementCount(index)}>
                <span className="icon-plus"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};
