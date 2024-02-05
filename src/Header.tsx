import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

function Header() {

    return (
        <body>
            <div className="menu-bar">
                <h1>Contacts App</h1>
                <button className="menu-button" style={{ border: 'none', background: 'transparent' }}><FontAwesomeIcon className="menu-icon" icon={faBars} style={{color: '#e36940' }}/></button>
            </div>
            </body>    
    );
};
    

export default Header