import { useDispatch } from 'react-redux';
import { login } from 'redux/Auth/AuthOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const hebdleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={hebdleSubmit} className={css.form}>
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
        Log in
      </button>
    </form>
  );
};
