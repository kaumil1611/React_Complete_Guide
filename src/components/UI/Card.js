import React from 'react';
import './Card.css';
// import Expanses from './Expanses';

function Card(props) {
    const classes = `card ${props.className}`
    return (
        <div className={classes}>
            {props.children}
        </div>
   )
}

export default Card;
