import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  return (
    <header>
      <Navigation />
      <h1>Phonebook</h1>
      <AuthNav />
    </header>
  );
};
