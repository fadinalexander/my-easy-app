import React from 'react';

import './Dashboard.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div >
            <h1>Emoji Critic — всё об эмодзи</h1>
            <p>#1 среди авторов обзоров на эмодзи в этом году!</p>
            <Link to='/reviews'>
                Нажми сюда чтобы перейти по ссылке
            </Link>
        </div>
    )
}

export default Dashboard