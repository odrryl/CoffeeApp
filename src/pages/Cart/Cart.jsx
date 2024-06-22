import { MultipleCoffeeOrder } from "./components/MultipleCoffeeOrder/MultipleCoffeeOrder";
import { MultipleCoffeeBeansOrder } from "./components/MultipleCoffeeBeansOrder/MultipleCoffeeBeansOrder";
import { CoffeeOrder } from "./components/CoffeeOrder/CoffeeOrder";
import { CoffeeBeansOrder } from "./components/CoffeeBeansOrder/CoffeeBeansOrder";
import "./Cart.scss";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const cart = {
    title: "Total Price",
    count: "10.40",
    btn: "Pay",
  };

  return (
    <section className="cart">
      <MultipleCoffeeOrder />
      <CoffeeOrder />
      <CoffeeBeansOrder />
      <MultipleCoffeeBeansOrder />

      <div className="cart__pay">
        <div className="cart__price">
          <h3 className="cart__price-title">{cart.title}</h3>
          <p className="cart__price-count">
            <span>$</span> {cart.count}
          </p>
         
        </div>

        <NavLink to="/payment">
        <button className="btn cart__btn" >{cart.btn}</button>
      </NavLink>

        
      </div>
    </section>
  );
};
