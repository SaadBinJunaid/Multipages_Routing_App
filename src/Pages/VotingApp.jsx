
import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar.jsx'

function VotingApp() {

  const [username, setUsername] = useState("")
  const [records, setRecords] = useState([])

  let polls = [
    "Kya weekend par picnic karni chahiye?",
    "Kya online classes useful hoti hain?",
    "Kya aap roz exercise karte hain?",
    "Kya mobile games time waste karti hain?",
    "Kya coding students ke liye important hai?"
  ]

  const [poll, setPoll] = useState(
    () => polls[Math.floor(Math.random() * polls.length)]
  )

  let saveVote = (answer) => {

    if (username == "") {
      alert("Please Enter Your Name")
      return
    }

    let voteData = {
      username: username,
      answer: answer,
      polling: poll
    }

    setRecords([...records, voteData])
    setPoll(polls[Math.floor(Math.random() * polls.length)])
    setUsername("")
  }

  return (
    <>
      <Navbar />

      <div className="app">
        <h1 className="question">{poll}</h1>

        <input
          className="name-input"
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="btn btn-yes" onClick={() => saveVote("Yes")}>Yes</button>
        <button className="btn btn-no" onClick={() => saveVote("No")}>No</button>
      </div>

      <div className="history">
        {records.map((item, index) => {
          return (
            <div key={index} className="vote-item">
              <h2>{item.polling}</h2>
              <p>{item.username} selected {item.answer}</p>
            </div>
          )
        })}
      </div>
      <br />
    </>
  )
}

export default VotingApp
