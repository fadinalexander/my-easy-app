import React from 'react';
import { Link } from 'react-router-dom';

const Friends = ({ serverData }) => {

    return (
        <div>
            <h1>Мои друзья</h1>
            <ul>
                { serverData.map(friend => {
                    return (
                        <li style={ { listStyle: 'none', textAlign: 'start' } } key={ friend.id }>
                            <Link style={ { textDecoration: 'none' } } to={ `${friend.id}` }>
                                <span style={ { color: 'green' } }>{ friend.name }</span>
                            </Link>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default Friends