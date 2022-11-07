// Use import to aquire assets from other files in vscode.
import "./App.css"
import { useState } from "react"

function App() { 
// initially, I need to set the value of numbers to be zero.
// I want these values to change only after something is input.
// To do this I will need to assign multiple variables to a single value.
// Declare a const that can be ammended when varying data is input.
let total = 0
const [numOne, setValueOne] = useState("0")
const [numTwo, setValueTwo] = useState("0")
// Assign arithmatic with a starting value of add.
// Apply a variable that will allow arithmatic to change dependant on onClick entry
const [maths, applyMaths] = useState("+")
// create a function thats responsive to the onClick and sets
// the value of newNumOne as the output of the Add function.
// use the current number and the new value entered and apply setValueOne
// to display new value
const setDisplayOne = (num) => {
const newNumOne = Add(numOne, num)
setValueOne(newNumOne)
}
const setDisplayTwo = (num) => {
const newNumTwo = Add(numTwo, num) 
setValueTwo(newNumTwo)
}
// create a function that will display zero until values are entered
// Use function to determine if a value entered from "onClick" will be added
// to the page or if the value will remain the same
const Add = (current, next) => {
// use if statement to display zero initially
if (current === "0") {
// use if statement to display zero when zero is entered on one of the
// displays.
if (next === "0") {
// return the current data entered
return current
}
return next
}
// display the new value
return (current + next)
}
// enter values of each math symbol and how they will be applied when
// diff numerical values have been entered.
// use if statement to set the function of value "+" and how it will 
// behave when two numerical values are added.
if (maths === "+") {
total = Number(numOne) + Number(numTwo)
}
// use if statement to set the function of value "-" and how it will 
// behave when two numerical values are added.
if (maths === "-") {
total = Number(numOne) - Number(numTwo)
}
// use if statement to set the function of value "*" and how it will 
// behave when two numerical values are added.
if (maths === "*") {
total = Number(numOne) * Number(numTwo)
}
// use if statement to set the function of value "÷" and how it will 
// behave when two numerical values are added.
if (maths === "÷") {
total = Number(numOne) / Number(numTwo)
}
// set numerical values to buttons and the text that will display in 
// each button.
// apply a function to the clear button that will return the value to zero
return (
// create a div class called calculator(named in css)
<div className="calculator">
{/* create a div class for a section of the calculator by referring to the css */}
<div className="panel">
{/* assign updated values to the p element */}
<p>{numOne}</p>
<div className="numbers">
{/*assign values and functions to buttons  */}
<button onClick={() => setDisplayOne("1")}>1</button>
<button onClick={() => setDisplayOne("2")}>2</button>
<button onClick={() => setDisplayOne("3")}>3</button>
<button onClick={() => setDisplayOne("4")}>4</button>
<button onClick={() => setDisplayOne("5")}>5</button>
<button onClick={() => setDisplayOne("6")}>6</button>
<button onClick={() => setDisplayOne("7")}>7</button>
<button onClick={() => setDisplayOne("8")}>8</button>
<button onClick={() => setDisplayOne("9")}>9</button>
<button onClick={() => setDisplayOne("0")}>0</button>
<button onClick={() => setValueOne("0")}>Clear</button>
</div>
</div>
{/* Assign functions to buttons in the middle panel
    And assign text to appear in each button */}
<div className="panel">
{/* use p element to display the updated value */}
<p>{maths}</p>
<div className="numbers">
<button onClick={() => applyMaths("+")}>+</button>
<button onClick={() => applyMaths("-")}>-</button>
<button onClick={() => applyMaths("*")}>*</button>
<button onClick={() => applyMaths("÷")}>/</button>
</div>
</div>
{/* Assign values to buttons on the right side of the screen.
    Assign the text that will appear in the buttons 
    Assign the clear button to reset the display to zero whenever
    it is clicked */}
<div className="panel">
{/* use p element ro display updated value */}
<p>{numTwo}</p>
<div className="numbers">
{/* assign values to buttons */}
<button onClick={() => setDisplayTwo("1")}>1</button>
<button onClick={() => setDisplayTwo("2")}>2</button>
<button onClick={() => setDisplayTwo("3")}>3</button>
<button onClick={() => setDisplayTwo("4")}>4</button>
<button onClick={() => setDisplayTwo("5")}>5</button>
<button onClick={() => setDisplayTwo("6")}>6</button>
<button onClick={() => setDisplayTwo("7")}>7</button>
<button onClick={() => setDisplayTwo("8")}>8</button>
<button onClick={() => setDisplayTwo("9")}>9</button>
<button onClick={() => setDisplayTwo("0")}>0</button>
<button onClick={() => setValueTwo("0")}>Clear</button>
</div>
</div>
{/* create a div to contain the section to the right of the screen
    have it display the total when data is entered into the two panels
    use a p element to display the answer\ */}
<div className="panel answer">
<p>{total}</p>
</div>
</div>
)
}
// use export default to refer to expose assets to the App.
export default App
