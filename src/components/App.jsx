import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/Auth/AuthOperations';

const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ConstactsPage = lazy(() => import('../pages/Сontacts'));
const HomePage = lazy(() => import('../pages/Home'));

export default function App() {
  const dispatch = useDispatch();
  // const refteshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <main className={css.box}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<HomePage />} />
          <Route path="/contacts" element={<ConstactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </main>
  );
}
