import React from 'react';

import './style.css';

import { first_text, second_text } from './explicacao';

export const InfoContainer = () => {
    return (
        <div className="info-container">
            <h1>Operações Binárias</h1>
            <p>{first_text}</p>
            <p>{second_text}</p>
        </div>
    );
}

export default InfoContainer;