import React from 'react'
import './ExpansesList.css';
import ExpenseItem from "./ExpenseItem";
const ExpansesList = (props) => {
  
  if(props.item.length === 0){
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
    return (
        <ul className="expenses-list">
            {
              props.item.map((expanse) => (
                <ExpenseItem
                  key={expanse.id}
                  title={expanse.title}
                  amount={expanse.amount}
                  date={expanse.date}
                />
              ))
            }
        </ul>
    )
}

export default ExpansesList
