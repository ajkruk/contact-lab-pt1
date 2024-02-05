import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const FaveButton = () => {
    const [favorite, setFavorite] = useState(false);

    const toggleFave = () => {
        setFavorite(!favorite);
    };

        return (
            <button onClick={toggleFave} style={{ border: 'none', background: 'transparent' }}>
              <FontAwesomeIcon icon={favorite ? solidHeart : regularHeart} style={{ color: '#e36940' }} />
            </button>
        );
    };

export default FaveButton