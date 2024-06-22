import "./CoffeeOrder.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cappuccino2 from '/assets/img/cart/cappuccino-2.png';

export const CoffeeOrder = () => {
  const coffee_order = {
    image: Cappuccino2,
    title: "Cappuccino",
    desc: "With Steamed Milk",
    size: "M",
    price: "6.20",
    count: 1, 
  };

  const [count, setCount] = useState(coffee_order.count);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  // Оновлюємо ціну відповідно до кількості
  const totalPrice = (parseFloat(coffee_order.price) * count).toFixed(2);

  return (
    <section className="coffee-order">
      <img src={coffee_order.image} alt="Coffee" />

      <div className="coffee-order__group">
        <h2 className="coffee-order__title">{coffee_order.title}</h2>
        <p className="coffee-order__desc">{coffee_order.desc}</p>

        <div className="coffee-order__info">
          <p className="coffee-order__size">{coffee_order.size}</p>
          <p className="coffee-order__price">
            <span>$</span> {totalPrice}
          </p>
        </div>

        <div className="coffee-order__count">
          <button className="size__btn" onClick={decrementCount}>
            <span className="icon-minus"></span>
          </button>

          <p className="coffee-order__item">{count}</p>

          <button className="size__btn" onClick={incrementCount}>
            <span className="icon-plus"></span>
          </button>
        </div>
      </div>
    </section>
  );
};
