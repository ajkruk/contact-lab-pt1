import ContactList from './ContactList'
import Contact from './Contact'
import FaveButton from './FaveButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./ContactCard.css"




function ContactCard(props: Contact) {

    
    return(
        <div className="card">
            <div className="name">{props.firstName} {props.lastName}</div>
            <div className="number-buttons">
                <div className="phone-number">{props.phoneNumber}</div>
                <div className="icon-buttons">
                    <FaveButton/>
                    <button className="trash-button" style={{ border: 'none', background: 'transparent' }}><FontAwesomeIcon icon={faTrash} className="trash-icon" style={{ color: "#5a7d7c"}}/></button>
                </div>
            </div>
        </div>
    )
};


export default ContactCard
