/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MessageSideBar from './MessageSideBar.jsx';
import ChannelsSideBar from './ChannelsSideBar.jsx';
import getAuthHeader from '../../scripts/getAuthHeader.js';
import getData from '../../scripts/getData.js';
import NavBar from '../NavBar.jsx';
import { initialData, connect } from '../../slices/messageSlice.js';

// todo: #5 Убрать двойной рендер
// todo: #9 Обработать ошибку 401 при прогрузке страницы. Чтобы она ничего не выдавала

const MainPage = () => {
  const navigate = useNavigate();
  const header = getAuthHeader();
  const messages = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const { channels, currentChannelId, loading } = messages;

  const data = async (dispatches) => {
    const datas = await getData();
    dispatches(initialData(datas));
  };

  useEffect(() => {
    if (Object.keys(header).length === 0) {
      navigate('/login');
    }
    data(dispatch);
    dispatch(connect());
  }, []);

  useEffect(() => {
    data(dispatch);
  }, [loading]);

  console.log(messages);

  return (
    <div className="h-100" id="chat">
      <div className="d-flex flex-column h-100">
        <NavBar />
        <div className="container h-100 my-4 overflow-hidden rounded shadow">
          <div className="row h-100 bg-white flex-md-row">
            <ChannelsSideBar channels={channels} currentChannelId={currentChannelId} />
            <MessageSideBar dispatch={dispatch} state={messages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
