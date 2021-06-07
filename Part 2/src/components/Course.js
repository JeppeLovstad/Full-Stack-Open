import React, { useState } from "react";

const Courses = ({ contents }) => {
  console.log(contents);
  return (
    <div>
      {contents.map((content) => {
        return <Course key={content.name} content={content} />;
      })}
    </div>
  );
};

const Course = ({ content }) => {
  return (
    <div>
      <Header course={content.name} />
      <Content parts={content.parts} />
      <Total exercises={content.parts} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises }) => {
        return <Part key={name} part={name} exercise={exercises} />;
      })}
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Total = ({ exercises }) => {
  const t = exercises.reduce((total, currVal) => total + currVal.exercises, 0);

  return (
    <div>
      <p>Number of exercises {t}</p>
    </div>
  );
};

export default Courses;
