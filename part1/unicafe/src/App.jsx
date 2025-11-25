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
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback:</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}

export default App

