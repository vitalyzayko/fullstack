import { useState } from 'react';

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left +1)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right +1)
    setTotal(left + right)
  }

 return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>
      <p>{total}</p>
    </div>
  )
}


/*const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const Display = ({counter}) => <div>{counter}</div>

  const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

  const multiplyByTwo = () => {
    console.log('multiplying by two, value before', counter)
    setCounter(counter * 2)

  }
  const setToZero = () => {
    console.log('resetting the value, value before', counter)
    setCounter(0)
  }
  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text="increase"/>
      <Button onClick={multiplyByTwo} text="multiply"/>
      <Button onClick={setToZero} text="reset"/>
    </div>
  )
}

*/


/*const Hello = ({name, age}) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}




/*const App = () => {

  const course = 'Half Stack application development'
  const parts = [
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




  const course = {
    name: 'Half Stack application development',
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


  const Header = (props) => {
      return (
      <>
        <h1>{props.course.name}</h1>
      </>
      )
  }


  const Part = (props) => {


        return (

            <>
                <p>
                    {props.part.name} {props.part.exercises}
                </p>
            </>
        )
  }

  const Content = (props) => {
        /*let contentResponse = "<>"
          let i = 0
              props.parts.forEach(value => {
                  //console.log(i)
                  contentResponse += "<Part part={props.parts[" + i + "]} />"
                  i += 1
              })
          contentResponse += "</>"
          console.log(contentResponse)
          return Object.create(contentResponse)*/


/*
        return (
        <>
          <Part part={props.parts[0]} />
          <Part part={props.parts[1]} />
          <Part part={props.parts[2]} />
        </>
        )

    }

  const Total = (props) => {
        let sum = 0
        props.parts.forEach(value => {
            sum += value.exercises
        })

        return (
        <>
            <p>
                Number of exercises {sum}
            </p>
        </>
        )
  }


return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )

}*/



export default App