import React,{useState} from "react";
import Expanses from "./components/Expenses/Expanses";
import NewExpense from "./components/NewExpense/newExpense";

// import Demo from './components/childprops/demo';
// import ExpenseItem from './components/ExpenseItem';
const Dummy_expanses = [
    {id:'e1', title: "car insurance", amount: 294.47, date: new Date(2019,8,21) },
    {id:'e2', title: "car dilivery", amount: 94.47, date: new Date(2021, 5, 12) },
    {id:'e3', title: "car washing", amount: 10.47, date: new Date(2021, 10, 10) },
  ];

const App = () => {

    const [expanses,setExpanses]=useState(Dummy_expanses);
    
  const addExpenseHandler = (expanseData) => {
    /* console.log("app.js");
    console.log(expanseData); */
    setExpanses(prevExpanses =>{
        return [expanseData,...prevExpanses];
    });
  };
  // const response =  expanses.map((expanse) => {

  //     return <ExpenseItem key={expanse.title} title={expanse.title} amount={expanse.amount} date={expanse.date} />
  // })
  return (
    <div>
      {/* <Demo /> */}
      <h2>Let's get started</h2>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expanses expanses={expanses} />
      {/* {response} */}
      {/* <ExpenseItem title={expanses[0].title} amount={expanses[0].amount} date={expanses[0].date} />
            <ExpenseItem title={expanses[1].title} amount={expanses[1].amount} date={expanses[1].date} /> */}
    </div>
  );
};

export default App;
