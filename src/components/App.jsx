import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/Auth/AuthOperations';
import { selectIsRefreshing } from 'redux/Auth/AuthSelectors';
import { PrivateRoute } from './PriviteRoute';
import { PublicRoute } from './PublicRoute';
// import Loader from 'components/loader';
import Loader from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ConstactsPage = lazy(() => import('../pages/Сontacts'));
const HomePage = lazy(() => import('../pages/Home'));

export default function App() {
  const dispatch = useDispatch();
  const refteshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return refteshing ? (
    <Loader />
  ) : (
    <main className={css.box}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ConstactsPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
