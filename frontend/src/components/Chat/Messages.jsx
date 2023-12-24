import React from 'react';

const Messages = (data) => {
  const { state } = data;

  return (state.messages.map((message) => (
    <div className="text-break mb-2" key={message.id}>
      <b>{message.user.username}</b>
      :
      {' '}
      {message.body}
    </div>
  )));
};

export default Messages;
