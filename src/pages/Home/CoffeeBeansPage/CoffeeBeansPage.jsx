import "./CoffeeBeansPage.scss";
import { CoffeeBeansPreview } from "./CoffeeBeansPreview/CoffeeBeansPreview";
import { CoffeeBeansInfo } from "./CoffeeBeansInfo/CoffeeBeansInfo";

export const CoffeeBeansPage = () => {
  return (
    <section className="cb__page">
      <CoffeeBeansPreview />
      <CoffeeBeansInfo />
    </section>
  );
};
