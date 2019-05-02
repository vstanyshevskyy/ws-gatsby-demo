import React from 'react';
import './index.less';

export default ({user}) => {
  return (<div className="user">
    <img className="user__photo" alt={user.name} width="78" src={user.picture.large} />
    <h2 className="user__name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
  </div>);
};
