import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.scss";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectionChangeHandler = (choiceYear) => {
    setSelectedYear(choiceYear);
  };

  const filteredExpenses = props.items.filter((e) => {
    return e.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expense found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((e) => {
      return (
        <ExpenseItem
          title={e.title}
          amount={e.amount}
          date={e.date}
          key={e.id}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onYearSelected={selectionChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
