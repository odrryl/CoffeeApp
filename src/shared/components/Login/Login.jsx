import "/src/shared/components/Login/Login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login">
      <img
        src="/src/assets/img/logo/logo.png"
        alt="logo"
        className="login__logo"
      />
      <div class="login__form">
        <div class="login__title">Login</div>
        <input type="text" placeholder="Username" class="form-control" />
        <input type="password" placeholder="Password" class="form-control" />

        <label class="checkbox-label">
          <input type="checkbox" /> Remember Me
        </label>
        <button class="btn login__btn">Login</button>
      </div>
    </div>
  );
};
