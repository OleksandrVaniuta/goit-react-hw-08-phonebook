import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/Auth/AuthSelectors';
import { logout } from 'redux/Auth/AuthOperations';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import css from './UsrMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenuBox}>
      <p className={css.User}>
        <PersonIcon /> {user.name}
      </p>
      {/* <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button> */}
      <LogoutIcon
        className={css.Logout}
        onClick={() => dispatch(logout())}
        sx={[
          {
            fontSize: 32,
            color: '#91d5f3',
          },
          { '&:hover': { color: '#ffffff' } },
        ]}
      />
    </div>
  );
};
