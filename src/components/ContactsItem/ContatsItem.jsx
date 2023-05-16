import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';

import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import css from './ContactsItem.module.css';
import { toast } from 'react-toastify';

function ContactsItem({ id, name, number }) {
  const dispatch = useDispatch();

  const telNum = `tel:+${{ number }}`;
  return (
    <li key={id} className={css.item}>
      <p className={css.contact}>
        {name}: {number}
      </p>
      <div>
        <a href={telNum} className={css.contactsLink}>
          <PhoneIcon className={css.call} />
        </a>
        <DeleteIcon
          onClick={() => {
            dispatch(deleteContact(id));
            toast.info(`${name} removed from your contacts`, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          }}
          className={css.trashIcon}
        />
      </div>
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
