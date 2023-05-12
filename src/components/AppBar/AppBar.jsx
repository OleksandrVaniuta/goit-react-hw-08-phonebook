import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      <h1>Phonebook</h1>
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
