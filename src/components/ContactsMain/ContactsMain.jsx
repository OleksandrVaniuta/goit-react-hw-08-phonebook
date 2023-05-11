// import css from './App.module.css';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';

export const ContactMain = () => {
  return (
    <div
    //   className={css.box}
    >
      {/* <h2>Phonebook</h2> */}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
