import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./expanses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expanses = (props) => {
  const [filterYear, setFilterYear] = useState("All");
  const onSelectDropDownData = (SelectedYear) => {
    setFilterYear(SelectedYear);
    console.log(SelectedYear);
    console.log("Expanses js file");
  };
  console.log(`heloo ${filterYear}`);
  let Filter_Year= '';
  (filterYear === 'All'?  Filter_Year = props.expanses : Filter_Year = props.expanses.filter(year => year.date.getFullYear().toString() === filterYear))  
  // if(filterYear === 'All'){
  //    const Filter_Year = props.expanses;
  // }
  // else{
  //    const Filter_Year = props.expanses.filter(year => year.date.getFullYear().toString() === filterYear);
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSelectDropDown={onSelectDropDownData}
        />
        {/* {props.expanses.map((expanse)=> <ExpenseItem key={expanse.id} title={expanse.title} amount={expanse.amount} date={expanse.date} />)} */}
        
        {Filter_Year.map((expanse)=> <ExpenseItem key={expanse.id} title={expanse.title} amount={expanse.amount} date={expanse.date} />)}
        {/* <ExpenseItem
          title={props.expanses[0].title}
          amount={props.expanses[0].amount}
          date={props.expanses[0].date}
        />
        <ExpenseItem
          title={props.expanses[1].title}
          amount={props.expanses[1].amount}
          date={props.expanses[1].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expanses;
