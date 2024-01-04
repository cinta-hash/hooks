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

USEREDUCER
the useReducer is used when different states are altered in the same action. it keeps track of multiple pieces of state.
the useReducer is destructured into state(for all present states) and dispatch.
the useReducer takes a reducer function and the initial values of the states in your component
create the reducer function which takes 2 args. the first one is state which gives constant access to the value of state and the action which determines what we want to do with the state
we use a switch statement on the action type or the action that acts upon the state. case => name of action 
the return statement returns the new value of our state