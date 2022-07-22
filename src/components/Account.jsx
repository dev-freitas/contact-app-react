import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import ContactInput from './ContactInput';
import ContactsList from './ContactsList';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[600px] mx-auto my-5 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>
      <ContactInput />
      <ContactsList />
      <button onClick={handleLogout} className='px-6 py-2 my-4 border-2 border-gray-500 ..."'>
        Logout
      </button>
    </div>
  );
};

export default Account;
