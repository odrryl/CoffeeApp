import "./CoffeeBeansOrder.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import CoffeeBeans1 from '/assets/img/cart/coffee-beans-1.png';

export const CoffeeBeansOrder = () => {
  const cb_order = {
    image: CoffeeBeans1,
    title: "Robusta Beans",
    desc: "From Africa",
    size: "250gm",
    price: "6.20",
    count: 1,
  };

  const [count, setCount] = useState(cb_order.count);

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
  const totalPrice = (parseFloat(cb_order.price) * count).toFixed(2);

  return (
    <section className="cb-order">
      <img src={cb_order.image} alt="Coffee" />

      <div className="cb-order__group">
        <h2 className="cb-order__title">{cb_order.title}</h2>
        <p className="cb-order__desc">{cb_order.desc}</p>

        <div className="cb-order__info">
          <p className="cb-order__size">{cb_order.size}</p>
          <p className="cb-order__price">
            <span>$</span> {totalPrice}
          </p>
        </div>

        <div className="cb-order__count">
          <button className="size__btn" onClick={decrementCount}>
            <span className="icon-minus"></span>
          </button>

          <p className="cb-order__item">{count}</p>

          <button className="size__btn" onClick={incrementCount}>
            <span className="icon-plus"></span>
          </button>
        </div>
      </div>
    </section>
  );
};
