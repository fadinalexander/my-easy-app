import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './Friend.css'

const Friend = ({ serverData }) => {

    let { idw } = useParams()
    const friend = serverData.find(f => f.id === idw)

    const navigate = useNavigate()

    const navigateButton = () => {
        navigate(-1)
    }

    return (
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>Местоположение: {friend.location}</p>
            <p>Количество домашних попугаев: {friend.parrotsOwned.length}</p>
            <p>Любимое высказывание о птицах: "{friend.favBirdQuote}"</p>
            <button style={{alignSelf: 'flex-end', width: 100}} onClick={navigateButton}>Назад</button>
        </div>
    )
}

export default Friend