import React from 'react';
import './listItem.scss';

const ListItem = ({ id, label }) => (
  <div className="list-item" key={id}>
    <a href={id} target="_blank" rel="noreferrer">
      {label}
    </a>
    <p>{id}</p>
  </div>
);

export default ListItem;
