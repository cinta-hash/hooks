useState deals with data that changes
state-logic, UI, variables
react rerenders every time the value changes
useState-write const, create the name of the variable you want to create and an updater function or the function that will change or update the value and set the useState with the initial value/state in this case we want to count from 0
example 
const [counter, setCounter] = useState(0)

the counter and setCounter are destructured from the useState
this state is private to the component and is responsible for governing its behavior throughout its life.
the setCounter function is used to mutate the state variable
whatever value is put inside the setCounter function will be that value
example 
setCounter(8)=> the value will be 8(fixed value)
setCounter(counter + 1)=> the value of counter will increase by 1 every time the button is clicked. this causes react to rerender every time a value changes to show the new value.

for input values, you want to update each change at every key stroke. you can use the onchange property
the onchange should call a function inside of it at every single key stroke and cause a rerender
the onchange property should have the event type.
the new value being typed should be accessible using the event.target.value
then set the setInputValue to the newValue. REMEMBER to add the name of the function that updates the ne value, passed into onChange.