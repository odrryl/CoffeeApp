import "/src/shared/components/NotFound/NotFound.scss";
import Logo from '/assets/img/logo/logo.png';
import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    
    <div className="notfound">
    <img src={Logo} alt="Logo" className="notfound__logo"/>
    <h2 className="notfound__title">404 - Page Not Found</h2>
    <p className="notfound__desc">Sorry, the page you are looking for does not exist.</p>
    <p className="notfound__desc">
      Return to <Link to="/"><span>Home Page</span></Link>.
    </p>
  </div>
  )
}
