const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.parts.name} {props.parts.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part parts={props.parts[0]}></Part>
      <Part parts={props.parts[1]}></Part>
      <Part parts={props.parts[2]}></Part>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const courseInfo = {
    name: 'Half Stack application development.',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={courseInfo}/>
      <Content parts={courseInfo.parts}/>
      <Total parts={courseInfo.parts}/>
    </div>
  )
}

export default App
