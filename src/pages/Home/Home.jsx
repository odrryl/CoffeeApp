import { SearchInput } from "../../shared/ui/Input/SearchInput";
import "./Home.scss";
import { Categories } from "./components/Categories/Categories";
import { CoffeeBeans } from "./components/CoffeeBeans/CoffeeBeans";
import { Coffee } from "./components/Coffee/Coffee";

export const Home = () => {
  const handleSearchSubmit = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className="home">
      <h1 className="title">
        Find the best <br />
        coffee for you
      </h1>
      <SearchInput onSubmit={handleSearchSubmit} />
      <Categories />
      <Coffee />
      <CoffeeBeans />
    </section>
  );
};
