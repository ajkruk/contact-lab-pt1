import { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Contact from './Contact';
import './Home.css'

function Home() {
  
    const contactArr: Contact[] = [
        {
            firstName: 'Matthew',
            lastName: 'Kruk',
            phoneNumber: 5555555555,
            isFavorite: true

        },
        {
            firstName: 'Brodie',
            lastName:   'Matthew', 
            phoneNumber: 5555555556,
            isFavorite: true

        },
        {
            firstName:  'Matai',
            lastName:   'Kruk',
            phoneNumber: 5555555557,
            isFavorite: true

        },
        {
            firstName:  'Remy', 
            lastName:   'Josiah',
            phoneNumber: 5555555558, 
            isFavorite: true

        },
        {
            firstName:  'Baxter', 
            lastName:   'Dog',
            phoneNumber: 5555555558, 
            isFavorite: true

        },

    ]
    const [contacts, setContacts] = useState<Contact[]>(contactArr);

    return (
        <div className="main-items">
            <div className="contact-form">
            <ContactForm /> 
            </div>
            <div className="contact-list">
            <ContactList contactsArr={contacts}/>
            </div>
       </div>
    );
};

export default Home