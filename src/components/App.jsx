// import ContactsList from './ContactsList/ContactsList';
// import Filter from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { ContactMain } from './ContactsMain/ContactsMain';
import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <main className={css.box}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<p>Home</p>} />
          <Route path="/contacts" element={<ContactMain />} />
          <Route path="/register" element={<p>Reg</p>} />
          <Route path="/login" element={<p>Log in</p>} />
        </Route>
      </Routes>
    </main>
  );
}
// (
//   <div className={css.box}>
//     <h2>Phonebook</h2>
//     <ContactForm />
//     <h2>Contacts</h2>
//     <Filter />
//     <ContactsList />
//   </div>
// );
// }
