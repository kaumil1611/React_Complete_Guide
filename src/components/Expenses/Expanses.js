import React from 'react'
import ExpenseItem from './ExpenseItem';
import './expanses.css';
import Card from '../UI/Card';

function Expanses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expanses[0].title} amount={props.expanses[0].amount} date={props.expanses[0].date} />
            <ExpenseItem title={props.expanses[1].title} amount={props.expanses[1].amount} date={props.expanses[1].date} />
        </Card>
    )
}

export default Expanses;
           