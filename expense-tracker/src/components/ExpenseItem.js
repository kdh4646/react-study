import './ExpenseItem.css';

/*
    A Component is React is just a JavaScript Function (returning JSX)
    
    Use "className" instead of "class"

    "{ ... }" for injection 
*/
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);  //2021-03-28
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
