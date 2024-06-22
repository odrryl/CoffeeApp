import "./CoffeeBeansPreview.scss";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../../../shared/ui/BackIcon/BackIcon";
import { FavoritesIcon } from "../../../../shared/ui/FavoritesIcon/FavoritesIcon";

export const CoffeeBeansPreview = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const addToFavorites = () => {
    navigate("/favorites");
  };

  const backgroundImageUrl = "/src/assets/img/home/coffee_beans-bg.png";

  const CoffeeBeansBG = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  const cb_preview = {
    title: "Robusta Beans",
    origin: "From Africa",
    rating: 4.5,
    ratingCount: "6,879",
    categorie: "Medium Roasted",
  };

  return (
    <section className="cb-preview" style={CoffeeBeansBG}>
      <div className="cb-preview__icons">
        <div className="back">
          <BackIcon goBack={goBack} />
        </div>
        <div className="favorites">
          <FavoritesIcon addToFavorites={addToFavorites} />
        </div>
      </div>
      <div className="cb-preview__group">
        <div className="cb-preview__info">
          <h5 className="cb-preview__info-title">{cb_preview.title}</h5>
          <p className="cb-preview__info-origin">{cb_preview.origin}</p>
          <div className="cb-preview__info-rating">
            <span className="icon-star"></span>
            {cb_preview.rating}
            <span>({cb_preview.ratingCount})</span>
          </div>
        </div>

        <div className="cb-preview__tags">
          <div className="cb-preview__tags-group">
            <div className="tag">
              <span className="icon-coffee"></span>Bean
            </div>
            <div className="tag">
              <span className="icon-location"></span>Africa
            </div>
          </div>
          <p className="tag-categorie">{cb_preview.categorie}</p>
        </div>
      </div>
    </section>
  );
};
