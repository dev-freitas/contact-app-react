import React, { useState } from 'react'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';

const ContactInput = () => {

  const {user} = UserAuth()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  })

  const {name, email, number} = formData;
  
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const docRef = doc(db,'users', `${user?.email}`);
        await updateDoc(docRef, {contactList: arrayUnion(formData)});
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Contact name</label>
              <input 
              onChange={handleChange} 
              className='border p-3' 
              type='text'
              value={name}
              id='name'
              name='name' 
              />
            </div>
            <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Contact Email</label>
              <input 
              onChange={handleChange} 
              className='border p-3' 
              type='email' 
              value={email}
              id='email'
              name='email'
              />
            </div>
            <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Contact Number</label>
              <input 
              onChange={handleChange}  
              className='border p-3' 
              type='number' 
              value={number}
              id='number'
              name='number'
              />
            </div>
            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
            Add new contact
            </button>
      </form>
    </div>
  )
}

export default ContactInput
