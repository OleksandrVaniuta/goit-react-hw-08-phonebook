// import css from './App.module.css';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import css from './pagesStyle/Contacts.module.css';

export default function ContactMain() {
  return (
    <div className={css.contactBox}>
      <ContactForm />
      <h2 className={css.contactTitle}>Your contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
