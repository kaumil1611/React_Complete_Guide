import React, { useState } from "react";
import "./expenseform.css";

const ExpenseForm = (props) => {
  // one way
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  // one way end

  // Second way
  // const [userInput,setUserInput]=useState({
  //   enterTitle : '',
  //   enterAmount : '',
  //   enterDate : '',
  // });
  // Second way end

  const titleChangeHandler = (e) => {
    // one way
    setEnterTitle(e.target.value);
    // one way end

    // Second way
    // setUserInput((prevState) =>{
    //   return {
    //     ...prevState,
    //     enterTitle : e.target.value
    //   }
    // });
    // Second way end
  };
  const amountChangeHandler = (e) => {
    // one way
    setEnterAmount(e.target.value);
    // one way end

    // Second way
    // setUserInput((prevState) =>{
    //   return {
    //     ...prevState,
    //     enterAmount: e.target.value,
    //   }

    // });
    // Second way end

    // third way
    // setUserInput({
    //   ...userInput,
    //   enterTitle:e.target.value,
    // });
    // third way end
  };
  const dateChangeHandler = (e) => {
    // one way
    setEnterDate(e.target.value);
    // one way end

    // Second way
    // setUserInput((prevState) =>{
    //   return{
    //     ...userInput,
    //     enterDate: e.target.value,
    //   }
    // });
    // Second way end
  };

  const formSubmitChangeHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    console.log(expenseData);
    props.onSaveExpanseFormData(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  };

  return (
    <form onSubmit={formSubmitChangeHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control ">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="text">Add Expanse</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
