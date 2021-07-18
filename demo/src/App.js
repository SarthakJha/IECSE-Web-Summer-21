import Counter from './Counter';
import CounterFunc from './CounterFunction';
// Note the name of the file and imported component need not be the same

// This is the root component that create-react-app creates.

// This is a functional component
function App() {
  return (
    // This is JSX (JavaScript XML). It is very similar to HTML.
    // A difference which is immediately evident is "class" becomes "className" in JSX
    <div className="app">
      <h1 id="main-heading">Demo</h1>
      {/* Here the Counter component imported in Counter.jsx is being rendered  */}
      {/* It can be used multiple times with different initalCount */}
      {/* We can make our components modular and reusable through props */}
      <Counter initialCount={0} />
      <hr />
      <Counter initialCount={5} />
      <hr />
      <CounterFunc initialCount={10} />
    </div>
  );
}

export default App;
