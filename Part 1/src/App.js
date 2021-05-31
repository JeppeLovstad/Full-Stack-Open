import React, { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>)
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(({key,exercise}) => {
      return < Part key={key} part={key} exercise={exercise}/>
      })}
    </div>
  )
}

const Total = ({exercises}) => {
  const t = exercises.reduce((total, currVal, index) => total + currVal.exercise, 0)
  
  return (
    <div>
      <p>Number of exercises {t}</p>
    </div>
  )
}

const ButtonDisplay = ({counter}) => <div>{counter}</div>


const Button = ({name, handler}) => {
  return (
    <button onClick={handler}>
    {name}
  </button>
  )
}

function App(props) {
  const now = new Date()
  const a = Math.random()
  const b = 20
  let [counter, setCounter] = useState(0)
  const course = {key:'Half Stack application development',
   parts:[
                {key:'Fundamentals of React', exercise:10},
                {key:'Using props to pass data', exercise:7},
                {key:'State of a component', exercise:14}]
   }

  // setTimeout( 
  //   () => setCounter(counter += 1),
  //   1000)
  
  const incrementOnClick = () => (setCounter(counter + 1))

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" width="100px" /> */}
        <p>
          {now.toUTCString()} <br/>
          {a} + {b} = {a + b}
        </p>
        <ButtonDisplay counter={counter} />
        <Button handler={incrementOnClick} name={"add 1"}/>


      < Header course={course.key}/>
      < Content parts={course.parts} />
      < Total exercises={course.parts}/>
      </header>
    </div>
  );
}

export default App;
