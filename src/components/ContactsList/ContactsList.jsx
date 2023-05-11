import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import Loader from 'components/loader';
import {
  selectIsLoading,
  selectError,
  selectContacts,
  selectFiltredContacts,
} from 'redux/selectors';

import css from './ContactList.module.css';
import ContactsItem from 'components/ContactsItem/ContatsItem';

function ContactsList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const visibleEl = useSelector(selectFiltredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
      {contacts.length > 0 &&
        visibleEl.map(({ id, name, phone }) => {
          return <ContactsItem key={id} id={id} name={name} number={phone} />;
        })}
    </ul>
  );
}

export default ContactsList;
