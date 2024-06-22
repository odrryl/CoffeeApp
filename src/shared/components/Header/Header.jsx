import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "/src/shared/components/Header/Header.scss";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";
import { getPageTitleFromPath } from "../../ui/PageTitle/PageTitle";
import { NavLink } from "react-router-dom";





export const Header = () => {
  const [navIsActive, setNavIsActive] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const title = getPageTitleFromPath(location.pathname);
    setPageTitle(title);
  }, [location.pathname]);

  


  return (
    <div className="header">
      <div className="menu" onClick={() => setNavIsActive(true)}>
        <span className="icon-menu"></span>
      </div>
      <div className="page-title">{pageTitle}</div>

      <NavLink to="/login"className="user">
        <span className="icon-coffee"></span>
      </NavLink>

      <HeaderMenu navIsActive={navIsActive} navClose={() => setNavIsActive(false)} />
    </div>
  );
};
