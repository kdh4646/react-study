//import ExpenseItem.js for usage
import ExpenseItem from './components/ExpenseItem';

/*
  JSX (JavaScript XML)
  
  Only works because there are transformation steps running behind scenes.
  (npm start process transform JavaScript code to more browser friendly code)
*/
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
