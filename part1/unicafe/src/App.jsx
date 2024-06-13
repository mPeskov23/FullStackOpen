/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Feedback = ({stats}) => {
  const { good, neutral, bad, setGood, setNeutral, setBad } = stats
  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)
  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClick={handleGood}/>
      <Button text="neutral" onClick={handleNeutral}/>
      <Button text="bad" onClick={handleBad}/>
    </div>
  )
}

const Statistics = ({stats}) => {
  const { good, neutral, bad } = stats
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <p> Good {good} </p>
      <p> Neutral {neutral} </p>
      <p> Bad {bad} </p>
      <p> Total {total} </p>
      <p> Average {average} </p>
      <p> Positive {positive} % </p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stats = {good, neutral, bad, setGood, setNeutral, setBad }
  
  return (
    <div>
      <Feedback stats={stats}/>
      <Statistics stats={stats}/>
    </div>
  )
}

export default App