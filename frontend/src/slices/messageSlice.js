/* eslint-disable functional/no-let */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';

const initialState = {
  channels: [],
  messages: [],
  currentChannelId: 1,
  user: {
    username: null,
  },
  loading: false,
};

let socket = null;

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    connect: () => {
      socket = io('/');
      socket.on('connect', () => console.log(socket.id));
    },
    newMessage: (state, action) => {
      const newDataSendenMessages = {
        body: action.payload, channelId: state.currentChannelId, user: state.user,
      };
      socket.emit('newMessage', newDataSendenMessages);
      state.loading = !state.loading;
    },
    initialData: (state, action) => {
      state.user.username = localStorage.getItem('user');
      Object.assign(state, action.payload);
    },
  },
});

export const {
  connect, newMessage, initialData,
} = messageSlice.actions;

export default messageSlice.reducer;
