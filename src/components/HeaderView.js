import React from 'react'
import { Link } from 'react-router-dom'

const HeaderView = ({ main }) => {
  return (
    <header>
      <h1>FORUM</h1>
      {main ? (
        <Link to={'/'}>Ana Sayafaya Dön</Link>
      ) : (
        <Link to={'/add-post'}>Yeni Post At</Link>
      )
      }
    </header>
  );
};

export default HeaderView