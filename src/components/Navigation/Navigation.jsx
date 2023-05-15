import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import css from './Navigation.module.css';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav className={css.Nav}>
      <NavLink to="/">
        <HomeIcon
          className={css.Home}
          sx={[
            {
              fontSize: 40,
              color: '#91d5f3',
              mt: 1,
              mr: 1,
            },
            { '&:hover': { color: '#ffffff' } },
          ]}
        />
      </NavLink>
      {/* {isLoggedIn && ( */}
      <NavLink to="/contacts">
        <PermContactCalendarIcon
          className={css.Contacts}
          sx={[
            {
              fontSize: 36,
              color: '#91d5f3',
              mt: 1,
            },
            { '&:hover': { color: '#ffffff' } },
          ]}
        />
      </NavLink>
      {/* )} */}
    </nav>
  );
};
