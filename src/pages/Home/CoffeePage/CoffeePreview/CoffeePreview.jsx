import "./CoffeePreview.scss";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../../../shared/ui/BackIcon/BackIcon";
import { FavoritesIcon } from "../../../../shared/ui/FavoritesIcon/FavoritesIcon";

export const CoffeePreview = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const addToFavorites = () => {
    navigate("/favorites");
  };

  const backgroundImageUrl = "/src/assets/img/home/coffee-bg.jpg";

  const CoffeeBG = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  const c_preview = {
    title: "Cappuccino",
    origin: "With Steamed Milk",
    rating: 4.5,
    ratingCount: "6,879",
    categorie: "Medium Roasted",
  };

  return (
    <section className="c-preview" style={CoffeeBG}>
      <div className="c-preview__icons">
        <div className="back">
          <BackIcon goBack={goBack} />
        </div>
        <div className="favorites">
          <FavoritesIcon addToFavorites={addToFavorites} />
        </div>
      </div>
      <div className="c-preview__group">
        <div className="c-preview__info">
          <h5 className="c-preview__info-title">{c_preview.title}</h5>
          <p className="c-preview__info-origin">{c_preview.origin}</p>
          <div className="c-preview__info-rating">
            <span className="icon-star"></span>
            {c_preview.rating}
            <span>({c_preview.ratingCount})</span>
          </div>
        </div>

        <div className="c-preview__tags">
          <div className="c-preview__tags-group">
            <div className="c-tag">
              <span className="icon-coffee"></span>Coffee
            </div>
            <div className="c-tag">
              <span className="icon-water"></span>Milk
            </div>
          </div>
          <p className="c-tag-categorie">{c_preview.categorie}</p>
        </div>
      </div>
    </section>
  );
};
