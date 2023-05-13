import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.AuthBox}>
      <NavLink to="/register" className={css.AuthReg}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.AuthLogIn}>
        Log in
      </NavLink>
    </div>
  );
};
