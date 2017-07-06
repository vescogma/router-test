import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/counter">Counter</Link></li>
  </ul>
);
