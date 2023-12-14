import React from 'react';
import NavBar from './NavBar';

const NotFound = () => (
  <div className="h-100">
    <div className="h-100" id="chat">
      <div className="d-flex flex-column h-100">
        <NavBar />
        <div className="text-center my-auto">
          <h1 className="h4 text-muted">Cтраницы не найдено</h1>
          <p>
            Но ты можешь перейти на&nbsp;
            <a href="/">главную страницу</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
