import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';

export default function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h2>Hello i am your home page</h2>
      {!isLoggedIn && <p>Please, to get your contacts sign in or sign up</p>}
    </div>
  );
}
