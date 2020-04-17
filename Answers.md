# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS does one thing really well, render to the DOM!

1. Describe component state.

A component state , has to parts, 1st a variable that you set the initial state to in useState("initial"), the second being a callback function that manipulates the initial state, setInitialState("newState")

1. Describe props.

props is the information/data being passed into a component.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

sideEffects rerender the page based on something happening in your first argument which is a function, syncing is based on your second argument, if you want to sync with something you put it inside an array

useEffect(()=> {

}, ["what to watch for" `your useEffect will fire when this state changes`])
