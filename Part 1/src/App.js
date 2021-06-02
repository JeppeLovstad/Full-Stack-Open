import React, { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ key, exercise }) => {
        return <Part key={key} part={key} exercise={exercise} />;
      })}
    </div>
  );
};

const Total = ({ exercises }) => {
  const t = exercises.reduce(
    (total, currVal, index) => total + currVal.exercise,
    0
  );

  return (
    <div>
      <p>Number of exercises {t}</p>
    </div>
  );
};

const ButtonDisplay = ({ counter }) => <div>{counter}</div>;

const Button = ({ name, handler }) => {
  return <button onClick={handler}>{name}</button>;
};

const Statistic = ({ value }) => {
  return <div>{value}</div>;
};

const FeedbackStatistics = ({ good, neutral, bad }) => {
  const all = bad + good + neutral;

  if (bad + good + neutral === 0) {
    return (
      <div>
        <h1>Feedback Statistics</h1>
        Gotta give some feedback
      </div>
    );
  }

  return (
    <div>
      <h1>Feedback Statistics</h1>
      <Statistic value={"good: " + good} />
      <Statistic value={"Neutral: " + neutral} />
      <Statistic value={"bad: " + bad} />
      <Statistic value={"all: " + all} />
      <Statistic value={"average: " + (good - bad) / all} />
      <Statistic value={"positive: " + (good / all) * 10 + " %"} />
    </div>
  );
};

const Anecdote = ({ anecdotes, votes, selectedAnecdote }) => {
  return (
    <div>
      Current Anecdote:
      <p>{anecdotes[selectedAnecdote]}</p>
      <p>has {votes[selectedAnecdote.toString()]} votes</p>
    </div>
  );
};

const AnecdoteWinner = ({ anecdotes, votes }) => {
  let max = [0, 0];
  Object.entries(votes).forEach((arr) => {
    if (arr[1] > max[1]) {
      max = arr;
    }
  });
  if (max[1] === 0) {
    return <div>No Votes given, get to it</div>;
  }
  console.log(votes, max);
  return (
    <div>
      Current Anecdote winner:
      <p>{anecdotes[max[0]]}</p>
      <p>With {votes[max[0].toString()]} votes</p>
    </div>
  );
};

function App(props) {
  const now = new Date();
  const b = 20;
  let [counter, setCounter] = useState(0);

  let [bad, setBad] = useState(0);
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];
  // console.log(anecdoteVotes);

  let t = {};
  for (let index = 0; index < anecdotes.length; index++) {
    t[index.toString()] = 0;
  }
  let [anecdoteVotes, setAnecdoteVotes] = useState(t);
  // console.log(anecdoteVotes);
  // setAnecdoteVotes(t);

  let [selectedAnecdote, setSelectecAnecdote] = useState(0);
  // const a =
  const pickRandomAnecdote = () => () =>
    setSelectecAnecdote(Math.round(Math.random() * (anecdotes.length - 1)));

  const voteForCurrentAnecdote = () => () => {
    const votesCopy = { ...anecdoteVotes };
    votesCopy[selectedAnecdote.toString()] += 1;
    setAnecdoteVotes(votesCopy);
  };

  const course = {
    key: "Half Stack application development",
    parts: [
      { key: "Fundamentals of React", exercise: 10 },
      { key: "Using props to pass data", exercise: 7 },
      { key: "State of a component", exercise: 14 },
    ],
  };

  const incrementOnClick = () => () => setCounter(counter + 1);
  const goodFeedbackClick = () => () => setGood(good + 1);
  const neutralFeedbackClick = () => () => setNeutral(neutral + 1);
  const badFeedbackClick = () => () => setBad(bad + 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fun anecdotes!</h1>
        <Anecdote
          anecdotes={anecdotes}
          selectedAnecdote={selectedAnecdote}
          votes={anecdoteVotes}
        />
        <Button handler={pickRandomAnecdote()} name={"Pick Random Anecdote"} />
        <Button handler={voteForCurrentAnecdote()} name={"Vote"} />
        <h3>Anecdote Winner!</h3>
        <AnecdoteWinner anecdotes={anecdotes} votes={anecdoteVotes} />
        <h1>Statistics!</h1>
        <p>Oh Yes it's feedback time</p>

        <Button handler={goodFeedbackClick()} name={"Good"} />
        <Button handler={neutralFeedbackClick()} name={"Neutral"} />
        <Button handler={badFeedbackClick()} name={"Bad"} />
        <FeedbackStatistics good={good} neutral={neutral} bad={bad} />

        <p>
          {now.toUTCString()} <br />
          {b} + {b} = {b + b}
        </p>
        <ButtonDisplay counter={counter} />
        <Button handler={incrementOnClick()} name={"add 1"} />

        <Header course={course.key} />
        <Content parts={course.parts} />
        <Total exercises={course.parts} />
      </header>
    </div>
  );
}

export default App;
