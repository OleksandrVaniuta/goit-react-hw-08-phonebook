import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/Auth/AuthSelectors';
import { logout } from 'redux/Auth/AuthOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
