import "/src/shared/components/NotFound/NotFound.scss";
import { Link } from "react-router-dom"
import Logo from '/assets/img/logo/logo.png';

export const Payment = () => {
  return (
    
    <div className="notfound">
    <img src={Logo} alt="Logo" className="notfound__logo"/>
    <h2 className="notfound__title">Time to PAY! :D</h2>
    <p>We are still working on this page...</p>
  </div>
  )
}
