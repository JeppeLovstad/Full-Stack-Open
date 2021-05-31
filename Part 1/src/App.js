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
      <p>{props.part} {props.exercise}</p>
    </div>)
}

const Part2 = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>)
}

const Part3 = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>)
}

const Content = (props) => {
  return (
    <div>
      < Part1 part={props.parts[0].name} exercise={props.parts[0].exercise}/>
      < Part2 part={props.parts[1].name} exercise={props.parts[1].exercise}/>
      < Part3 part={props.parts[2].name} exercise={props.parts[2].exercise}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
    </div>
  )
}

function App() {
  const now = new Date()
  const a = Math.random()
  const b = 20
  const course = {name:'Half Stack application development',
   parts:[
                {name:'Fundamentals of React', exercise:10},
                {name:'Using props to pass data', exercise:7},
                {name:'State of a component', exercise:14}]
   }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" width="100px" /> */}
        <p>
          {now.toUTCString()} <br/>
          {a} + {b} = {a + b}
        </p>
      < Header course={course.name}/>
      < Content parts={course.parts} />
      < Total parts={course.parts}/>
      </header>
    </div>
  );
}

export default App;
