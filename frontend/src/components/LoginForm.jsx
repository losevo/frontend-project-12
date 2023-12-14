/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import AutorizatedForm from './AutorizatedForm';

const LoginForm = () => (
  <div className="h-100" id="chat">
    <div className="d-flex flex-column h-100">
      <NavBar />
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">
            <div className="card shadow-sm">
              <div className="card-body row p-5">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img src={`${process.env.PUBLIC_URL}/image.jpg`} height="256px" width="256px" alt="Join" className="rounded-circle" />
                </div>
                <AutorizatedForm />
              </div>
              <div className="card-footer p-4">
                <div className="text-center">
                  <span> Нет аккаунта? </span>
                  <Link to="/signup">Регистрация</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginForm;
