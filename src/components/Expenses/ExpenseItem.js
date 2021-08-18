import React from 'react';
import Card from '../UI/Card';
import ExpanseDate from './ExpanseDate';
import './style.css';

const ExpenseItem = (props) =>{
    // justfor demo
   /* const [title,setTitle] = useState(props.title);
    const onChangeTitleHandler = (e) =>{
            setTitle('hello');
    }; */
    // just for demo end
    return (
        <li>
            <Card className="expense-item">
                {/* <div>{props.date.toDateString()}</div> */}
            <ExpanseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>
                        {props.title}
                    </h2>
                    <div className="expense-item__price">${props.amount} </div>
                </div>
                {/* just for demo */}
                {/* <button onClick={onChangeTitleHandler}>Change Title!</button>  */}
                {/* just for demo end */}
            </Card>
        </li>
    );
}

export default ExpenseItem;
