import { useState } from "react";
import "./CoffeeBeans.scss";
import { Link } from "react-router-dom";

export const CoffeeBeans = () => {
  const [price] = useState(4.2);

  const coffeeData = [
    {
      image: "/src/assets/img/home/coffee_beans-1.png",
      title: "Robusta Beans",
      desc: "Medium Roasted",
      id: 4,
    },
    {
      image: "/src/assets/img/home/coffee_beans-2.png",
      title: "Robusta Beans",
      desc: "Medium Roasted",
      id: 5,
    },
    {
      image: "/src/assets/img/home/coffee_beans-1.png",
      title: "Robusta Beans",
      desc: "Medium Roasted",
      id: 6,
    },
  ];

  return (
    <div>
      <h5 className="coffee-beans__title">Coffee beans</h5>
      <section className="list">
        {coffeeData.map((item) => (
          <Link to={`/product/${item.id}`} className="item" key={item.id}>
            <img src={item.image} className="item__img" alt="Coffee Beans" />
            <h3 className="item__title">{item.title}</h3>
            <p className="item__desc">{item.desc}</p>
            <div className="item__id">{item.id}</div>
            <div className="item__price">
              <p className="price">
                <span>$</span> {price.toFixed(2)}
              </p>
              <span className="icon-plus"></span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
