/* eslint-disable react/prop-types */
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Mikhail'
  const age = 28
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name={name} age={age}/>
    </div>
  )
}

export default App