import { useState } from 'react';

const StatisticLine = (props) => <p>{props.text} {props.value}</p>

//const AllStates = (props) => <p>{props.text} {props.value}  </p>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {

  const sum_states = good + neutral + bad
  const average_feedback = (good * 1 + neutral * 0 + bad * (-1))/sum_states
  const positive_feedback = (good/sum_states*100) + "%"
  
  //console.log(sum_states)

  if (sum_states === 0) {
    return (
      <>
        <h2>No feedback given</h2>
      </>
    )
  }

  return (
    <>
      <h2>Statistics:</h2>
      <StatisticLine text="good" value={good} />    
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={sum_states}/>
      <StatisticLine text="average" value={average_feedback}/>
      <StatisticLine text="positive" value={positive_feedback}/>
    
    </>
  )
}

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, addVote] = useState(new Array(anecdotes.length).fill(0))

  console.log("votes initialized: ", votes)
  //console.log("selected initialized:", selected)
  
  const addNewVotes = (votes, selected) => {
    const copy = [...votes]
    //console.log("votes copy - before: ", copy)
    //console.log("selected:", selected)
    copy[selected] +=1
    //console.log("votes copy - after: ", copy)
    //console.log("selected in function addNewVotes: ", selected)
    addVote(copy)
    //console.log("votes added", votes)
  }  

  const maxVotes = (votes) => votes.indexOf(Math.max(...votes))
  console.log(maxVotes(votes))
  console.log(anecdotes[maxVotes(votes)])
  console.log(votes[maxVotes(votes)])


  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <p>{anecdotes[selected]}</p> 
      <p>has {votes[selected]} votes </p>
      <Button onClick={() => addNewVotes(votes, selected)} text="vote"/>
      <Button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} text="next anecdote"/>  

      <h1>The Anecdote with most votes is: </h1>
      <p>{anecdotes[maxVotes(votes)]}</p> 
      <p>has {votes[maxVotes(votes)]} votes </p>

      <h1>Give Feedback:</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}

export default App

/*
const Display = (props) => <div>{props.value}</div>

const Button =(props) => <button onClick={props.onClick}>{props.text}</button>
  

const App = () => {
  const [value, setValue] = useState(10)
  

const setToValue = (newValue) => {
    setValue(newValue)
}

return (
  <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="thousand"/>
      <Button onClick={() => setToValue(0)} text="reset"/>
      <Button onClick={() => setToValue(value + 1)} text="increment"/>
    </div>
  )
}
*/

/*
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    console.log("left before", left)
    setLeft(updatedLeft)
    console.log("left after", left)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    console.log("right before", right)
    setRight(updatedRight)
    console.log("right after", right)
    setTotal(updatedRight + left)
  }
 return (
    <div>
      {left}
      
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}
*/

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



