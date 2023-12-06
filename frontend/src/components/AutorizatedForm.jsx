/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import routes from '../hooks/routes.js';
import useAuth from '../hooks/index.jsx';

const AutorizatedForm = () => {
  const [error, setError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      username: yup.string().min(4, 'Слишком короткий ник').required('Напиши свой ник'),
      password: yup.string().min(5, 'Слишком короткий пароль').required('Забыл пароль'),
    }),
    onSubmit: ({ username, password }) => {
      setError(false);
      setFormSubmitted(true);
      axios.post(routes.loginPath(), { username, password })
        .then((response) => {
          localStorage.userId = JSON.stringify({ token: response.data.token });
          auth.loggedIn = true;
          navigate('/');
        })
        .catch((e) => {
          setError(true);
          console.error(e);
        });
    },
  });

  return (
    <form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4"> Войти </h1>
      <div className="form-floating mb-3">
        <input name="username" type="text" required placeholder="Ваш ник" id="username" className={`form-control ${(formik.touched.username && formik.errors.username) || (error && formSubmitted) ? 'is-invalid' : ''}`} value={formik.values.username} onChange={formik.handleChange} />
        <label htmlFor="username">Ваш ник</label>
      </div>
      <div className="form-floating mb-4">
        <input type="password" name="password" autoComplete="current-password" required id="password" placeholder="Пароль" className={`form-control ${(formik.touched.password && formik.errors.password) || error ? 'is-invalid' : ''}`} value={formik.values.password} onChange={formik.handleChange} />
        <label htmlFor="password">Пароль</label>
      </div>
      <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
    </form>
  );
};

export default AutorizatedForm;
