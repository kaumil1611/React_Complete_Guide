import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpanseDate from './ExpanseDate';
import './style.css';

const ExpenseItem = (props) =>{

   const [title,setTitle] = useState(props.title);
    const onChangeTitleHandler = (e) =>{
            setTitle('hello');
    };
    return (
        <Card className="expense-item">
            {/* <div>{props.date.toDateString()}</div> */}
           <ExpanseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>
                    {title}
                </h2>
                <div className="expense-item__price">${props.amount} </div>
            </div>
            <button onClick={onChangeTitleHandler}>Change Title!</button> 
        </Card>
    );
}

export default ExpenseItem;
