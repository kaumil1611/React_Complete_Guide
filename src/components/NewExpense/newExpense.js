import React from 'react'
import expenseForm from './expenseForm';
import './newExpense.css';

const newExpense = () => {
    return (
        <div className="new-expense">
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__controls "></div>
                </div>
            </form>
        </div>
    )
}

export default newExpense;
