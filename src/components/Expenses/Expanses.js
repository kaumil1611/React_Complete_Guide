import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./expanses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expanses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");
  const onSelectDropDownData = (SelectedYear) => {
    setFilterYear(SelectedYear);
    console.log(SelectedYear);
    console.log("Expanses js file");
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSelectDropDown={onSelectDropDownData}
        />
        {props.expanses.map((expanse)=> <ExpenseItem key={expanse.id} title={expanse.title} amount={expanse.amount} date={expanse.date} />)}
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
