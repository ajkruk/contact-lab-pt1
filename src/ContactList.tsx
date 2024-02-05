import Contact from "./Contact";
import ContactCard from "./ContactCard";
import './ContactList.css'

interface Props {
    contactsArr: Contact[]

};

function ContactList(props: Props) {

    return (
        <div>{props.contactsArr.map((contact) => {
            return (<ContactCard firstName={contact.firstName} lastName={contact.lastName} phoneNumber={contact.phoneNumber} isFavorite={contact.isFavorite}/>)
        })}
        </div>
    );

}

export default ContactList