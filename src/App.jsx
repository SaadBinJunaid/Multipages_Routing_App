import { useState } from 'react'
import { Link } from 'react-router'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />

      <div className="hero">
        <h1 className="hero-title">
          One Project, <span className="hero-title-highlight">Three Pages</span>
        </h1>
        <p className="hero-text">
          Simple React Router example with a landing page, a blog app and a
          voting app.
        </p>

        <div className="hero-actions">
          <Link to="/blog" className="btn btn-primary">Open Blog</Link>
          <Link to="/voting" className="btn btn-outline">Open Voting</Link>
          <button className="btn btn-count" onClick={() => setCount(count + 1)}>
            Clicked {count} times
          </button>
        </div>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3 className="feature-title">Blog App</h3>
          <p className="feature-text">
            Add blogs, like, dislike and remove them.
          </p>
          <Link to="/blog" className="feature-link">Go to Blog</Link>
        </div>

        <div className="feature-card">
          <h3 className="feature-title">Voting App</h3>
          <p className="feature-text">
            Answer a random question and see the vote history.
          </p>
          <Link to="/voting" className="feature-link">Go to Voting</Link>
        </div>

        <div className="feature-card">
          <h3 className="feature-title">Routing</h3>
          <p className="feature-text">
            Every page has its own path inside the router.
          </p>
          <Link to="/" className="feature-link">Go Home</Link>
        </div>
      </div>
    </div>
  )
}

export default App
