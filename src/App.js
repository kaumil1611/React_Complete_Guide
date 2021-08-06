import React from 'react';
import Expanses from './components/Expenses/Expanses';
// import Demo from './components/childprops/demo';
// import ExpenseItem from './components/ExpenseItem';

const App = () => {
    const expanses = [
        {title:'car insurance',amount: 294.47 ,date: new Date()},
        {title:'car dilivery',amount: 94.47 ,date: new Date(2021,5,12)},
        {title:'car washing',amount: 10.47 ,date: new Date(2021,10,10)},
    ];
    // const response =  expanses.map((expanse) => {

    //     return <ExpenseItem key={expanse.title} title={expanse.title} amount={expanse.amount} date={expanse.date} />
    // })
    return (
        <div>
            {/* <Demo /> */}
            <h2>Let's get started</h2>
            <Expanses  expanses={expanses}/>
            {/* {response} */}
            {/* <ExpenseItem title={expanses[0].title} amount={expanses[0].amount} date={expanses[0].date} />
            <ExpenseItem title={expanses[1].title} amount={expanses[1].amount} date={expanses[1].date} /> */}
        </div>
    )
}

export default App;
