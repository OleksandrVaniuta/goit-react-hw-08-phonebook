import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import css from './Navigation.module.css';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav className={css.Nav}>
      <NavLink to="/">
        <HomeIcon className={css.Home} />
      </NavLink>
      {/* {isLoggedIn && ( */}
      <NavLink to="/contacts">
        <PermContactCalendarIcon className={css.Contacts} />
      </NavLink>
      {/* )} */}
    </nav>
  );
};
