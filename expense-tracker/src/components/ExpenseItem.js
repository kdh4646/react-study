import './ExpenseItem.css';

/*
    A Component is React is just a JavaScript Function (returning JSX)
    
    Use "className" instead of "class"

    "{ ... }" for injection 

    One parameter "props" for receiving data, key and value pairs
*/
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
