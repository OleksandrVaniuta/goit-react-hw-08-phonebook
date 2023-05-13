import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';

export const AppBar = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.headerNAv}>
      <Navigation />
      <h1 className={css.title}>Phonebook</h1>
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
