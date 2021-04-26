import React from 'react';
import './input.css';

const Input = ({ placeholder, ...rest }) => <input className="input-field" placeholder={placeholder} {...rest} />;

export default Input;
