import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const NewExpense = (props) => {
  const [isEditing ,setIsEditing] = useState(false);
  const saveExpanseFormDataHandler = (enterExpanseFormData) =>{
      const expanseData ={
        ...enterExpanseFormData,
        id: Math.random().toString(),
      };
      // console.log(expanseData);
      props.onAddExpenseData(expanseData);
  };

  const startEditingHandler =()=>{
      setIsEditing(true);
    }
    const Editing = (e) =>{
      setIsEditing(e);
    }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
     {isEditing && <ExpenseForm onSaveExpanseFormData={saveExpanseFormDataHandler} isEditing={Editing}/>}
    </div>
  );
};

export default NewExpense;
