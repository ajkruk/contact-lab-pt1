import React from 'react';
import './ContactForm.css'

function ContactForm() {
    return (
        
        <form>
            <div className='text-inputs'>
                <label id="text-box">First Name:</label>
                <input type='text' id="text-box" style={{height: '20px'}}></input>
                <label id="text-box">Last Name:</label>
                <input type='text'id="text-box" style={{height: '20px'}}></input>
                <label id="text-box">Phone Number:</label>
                <input type='tel' className='phone-number' id="text-box" style={{height: '20px'}}></input>               
            </div>
            <div id='row-inputs'>
                <label>Set as Favorite?
                <input type='checkbox'></input>
                </label>
                <button type='submit' style={{fontSize: '15px', padding: '.5em', backgroundColor: 'black', borderColor: '#e36940', color: '#e36940', borderRadius: '30px'}}>Add Contact</button>
            </div>
            </form>
        
    )
};

export default ContactForm

