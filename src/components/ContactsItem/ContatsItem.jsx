import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
// import { FaRegTrashAlt } from 'react-icons/fa';
import css from './ContactsItem.module.css';

function ContactsItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.item}>
      <p className={css.contact}>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={e => {
          dispatch(deleteContact(id));
          e.target.textContent = 'deteling....';
        }}
        className={css.button}
      >
        {/* <FaRegTrashAlt size={16} className={css.button_icon} /> */}
        delete
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
