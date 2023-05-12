import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/AuthOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label className={css.contactName}>
        Name
        <input type="text" name="name" className={css.contactNameInput} />
      </label>
      <label className={css.contactName}>
        Email
        <input type="email" name="email" className={css.contactNameInput} />
      </label>
      <label className={css.contactTel}>
        Password
        <input
          type="password"
          name="password"
          className={css.contactNameInput}
        />
      </label>
      <button type="submit" className={css.createBtn}>
        Register
      </button>
    </form>
  );
};
