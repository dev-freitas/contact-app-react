import React, { useState,useEffect } from 'react'
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';

const ContactsList = () => {
    const [contact, setContact] = useState([]);
    const { user } = UserAuth();



    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setContact(doc.data()?.contactList);
        });
      }, [user?.email]);


  return (
      
            <div className="cflex flex-col py-2">
                <div className="row justify-center">
                    <div className="section_title text-center pb-6">
                        <h5 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl mt-4">Your contacts</h5>
                        <h4 className="services_title text-grey text-xl md:text-2xl lg:text-xl xl:text-3xl">{user.email}</h4>
                    </div> 
                </div> 
                <div className="flex flex-col py-2 mt-2">
                    {contact.map((user) =>
                    { return (
                        <div className='mt-5 p-3 rounded border-2 border-blue-500 ...'>
                            <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">{user.name}</h3>
                            <p className="mt-4 text-xl md:text-xl lg:text-lg xl:text-2xl">{user.email}</p>
                            <p className="mt-4 text-xl md:text-xl lg:text-lg xl:text-2xl">{user.number}</p>
                        </div>
                    )})}
                </div>
            </div>
)
}

export default ContactsList

// <div className='grid grid-cols-4 gap-4'>
//     {contact.map((user) => {
    //       return (
        //         <div id={user.id} key={user.id}>
        //             <h2>{user.name}</h2>
        //             <p>{user.email}</p>
        //             <p>{user.number}</p>
        //         </div>
        //       )
        //     })}
        // </div>
        
        // {/* <div id="services" className='services_area pt-120 pb-120'> 
        //     <div className="container justify-center">
        //         <div className="row justify-center">
        //             <div className="section_title text-center pb-6">
        //                 <h5 className="sub_title">What We Do</h5>
        //                 <h4 className="main_title">Our Services</h4>
        //             </div> 
        //         </div> 
        //         <div className="row flex">
        //             {contact.map((user) =>
        //             { return (
        //                 <div >
        //                     <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">{user.name}</h3>
        //                     <p className="mt-4 ">{user.email}</p>
        //                     <p className="mt-4">{user.number}</p>
        //                 </div>
        //             )})}
        //         </div>
        //     </div>
        // </div> */}
