import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const newExpense = () => {
  const saveExpanseFormDataHandler = (enterExpanseFormData) =>{
      const expanseData ={
        ...enterExpanseFormData,
        id: Math.random().toString(),
      };
      console.log(expanseData);
  }
  return (
    <div className="new-expense">
     <ExpenseForm onSaveExpanseFormData={saveExpanseFormDataHandler}/>
    </div>
  );
};

export default newExpense;
