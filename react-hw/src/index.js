import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const User = ({ name, skills, like }) => {
  const [score, setScore] = useState(0)
  const handleClick = () => {
    setScore(score + 1)
  }
  return (
    <>
      <h3>{name}</h3>
      <ul>
        <li>{skills}</li>
        <li>{like}</li>
      </ul>
      <p>Score:{score}</p>
      <button type="button"
        onClick={handleClick}
      >
        加点
      </button>
    </>
  )
}


const App = () => {
  const users = {
    hoshi: {
      name: "星",
      skills: "野球",
      like: "プロレス"
    }
  }
  return (
    <>
      <h1>こんにちは！</h1>
      <User name={users.hoshi.name} skills={users.hoshi.skills} like={users.hoshi.like} />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
