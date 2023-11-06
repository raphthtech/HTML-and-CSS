//app.js
import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Heading firstName="Bob" />
      <Heading firstName="Any name other than Bob" />
    </div>
  );
}

export default App;

//heading.js
function Heading(props) {
    return (
        <h1>Hello, {props.firstName}</h1>
    )
}

export default Heading;


//THE STEPS
Step 1: First, you passed the props object as a parameter to the Heading component in the 'Heading.js' file.  
function Heading(props) {
    return (
        <h1>Hello, </h1>
    )
}

export default Heading;

Step 2: Next, inside the Heading component’s body, you located the return statement, and added a JSX expression that accesses the firstName property of the props object, inside the return statement's h1, after Hello. 
function Heading(props) {
    return (
        <h1>Hello, {props.firstName}</h1>
    )
}

export default Heading;

Step 3: Then, inside the App component's return statement, you located the <Heading /> JSX element, and added the attribute of firstName and give it the value of Bob. 
import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Heading firstName="Bob" />
    </div>
  );
}

export default App;

Step 4: You saved all your changes and ran the app to preview the updates in the browser, and confirm that the page shows an h1 element with the text that reads "Hello, Bob". 

Step 5: Then, you changed firstName to any name other than ‘Bob’ and see how the page updates with the new name.
import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Heading firstName="Any name other than Bob" />
    </div>
  );
}

export default App;

Step 6: Finally, you added a second <Heading /> after the first one.  Again, adding the firstName attribute and choosing another name for this value.
import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Heading firstName="Any name other than Bob" />
      <Heading firstName="Jack" />
    </div>
  );
}

export default App;
