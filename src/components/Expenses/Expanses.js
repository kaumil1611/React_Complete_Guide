import React, { useState } from "react";

import ExpansesList from "./ExpansesList";
import "./expanses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expanses = (props) => {
  const [filterYear, setFilterYear] = useState("All");

  const onSelectDropDownData = (SelectedYear) => {
    setFilterYear(SelectedYear);
    // console.log(SelectedYear);
    // console.log("Expanses js file");
  };
  // console.log(`heloo ${filterYear}`);
  let Filter_Year = "";
  filterYear === "All"
    ? (Filter_Year = props.expanses)
    : (Filter_Year = props.expanses.filter(
        (year) => year.date.getFullYear().toString() === filterYear
      ));

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
        {/* same code as line 25 to 35 */}
        {/* {Filter_Year.length === 0 ? (
          ExpensesContent
        ) : (
          Filter_Year.map((expanse) => (
            <ExpenseItem
              key={expanse.id}
              title={expanse.title}
              amount={expanse.amount}
              date={expanse.date}
            />
          ))
        )} */}
        <ExpensesChart expenses={Filter_Year} />
        {/* end same code as line 25 to 35 */}
        <ExpansesList item={Filter_Year} />
        {/* {ExpensesContent} */}

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
