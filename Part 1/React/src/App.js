import logo from './logo.svg';


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, how are {props.rand}</p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
    </div>)
}

const Part2 = (props) => {
  return (
    <div>
      <p>{props.part2} {props.exercises2}</p>
    </div>)
}

const Part3 = (props) => {
  return (
    <div>
      <p>{props.part3} {props.exercises3}</p>
    </div>)
}

const Content = (props) => {
  return (
    <div>
      < Part1 part1={props.part1} exercises1={props.exercises1}/>
      < Part2 part2={props.part2} exercises2={props.exercises2}/>
      < Part3 part3={props.part3} exercises3={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

function App() {
  const now = new Date()
  const a = Math.random()
  const b = 20
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" width="100px" /> */}
        <p>
          {now.toUTCString()} <br/>
          {a} + {b} = {a + b}
        </p>
      < Header course={course}/>
      < Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      < Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      </header>
    </div>
  );
}

export default App;
