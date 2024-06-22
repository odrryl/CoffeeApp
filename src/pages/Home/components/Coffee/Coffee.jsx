import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Coffee1 from '/assets/img/home/coffee-1.png';
import Coffee2 from '/assets/img/home/coffee-2.png';

export const Coffee = () => {
  const [price] = useState(4.2);

  const coffeeData = [
    {
      image: Coffee1,
      title: "Cappuccino",
      desc: "With Steamed Milk",
      id: 1,
    },
    {
      image: Coffee2,
      title: "Cappuccino",
      desc: "With Foam",
      id: 2,
    },
    {
      image: Coffee1,
      title: "Cappuccino",
      desc: "With Steamed Milk",
      id: 3,
    },
  ];

  return (
    <section className="list">
      {coffeeData.map((item) => (
        <NavLink to="/coffee" className="item">
          <img src={item.image} className="item__img" alt="Coffee" />
          <h3 className="item__title">{item.title}</h3>
          <p className="item__desc">{item.desc}</p>
          <div className="item__id">{item.id}</div>
          <div className="item__price">
            <p className="price">
              <span>$</span> {price.toFixed(2)}
            </p>
            <span className="icon-plus"></span>
          </div>
        </NavLink>
      ))}
    </section>
  );
};
