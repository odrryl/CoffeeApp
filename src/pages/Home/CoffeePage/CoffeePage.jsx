import "./CoffeePage.scss";
import { CoffeePreview } from "./CoffeePreview/CoffeePreview";
import { CoffeeInfo } from "./CoffeeInfo/CoffeeInfo";


export const CoffeePage = () => {
  return (

    <section className="c__page">
    <CoffeePreview />
    <CoffeeInfo />
    </section>
   );
 };