import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>
        This is Home Page :)
      </h2>
      <p>
       Happy to learning React-Router-dom 
      </p>
      <p>
       Here using useNavigate
      </p>
      <Link to="/contact">Go to Contact</Link>
      <br/>
      <button>
      Go to User
      </button>
      <br/>
      <button>
      Go to Filter
      </button>
    </div>
  )
}
