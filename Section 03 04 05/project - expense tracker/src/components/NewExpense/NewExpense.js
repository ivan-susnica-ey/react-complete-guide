import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
  const [formOpen, setFormOpen] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormOpen(false);
  };

  const formOpenHandler = () => {
    setFormOpen(true);
  };

  const formCloseHandler = () => {
    setFormOpen(false);
  };

  return (
    <div className="new-expense">
      {!formOpen && <button onClick={formOpenHandler}>Add New Expense</button>}
      {formOpen && (
        <ExpenseForm
          formCloseHandler={formCloseHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
