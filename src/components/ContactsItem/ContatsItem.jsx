import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
// import { FaRegTrashAlt } from 'react-icons/fa';
import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import css from './ContactsItem.module.css';

function ContactsItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.item}>
      <p className={css.contact}>
        {name}: {number}
      </p>
      {/* <button
        type="button"
        onClick={e => {
          dispatch(deleteContact(id));
          e.target.textContent = 'deteling....';
        }}
        className={css.button}
      >
        delete
      </button> */}
      <DeleteIcon
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        className={css.trashIcon}
      />
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
