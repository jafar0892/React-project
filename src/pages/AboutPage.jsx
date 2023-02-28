import { Link } from 'react-router-dom'
import Card from '../component/shared/Card'

function AboutPage() {
  return (
    <Card>

        <ul style={{display: "flex", color: "red" ,justifyContent: "space-around" }}>
            <li>
                Home
            </li>
            <li>About</li>
            <li>Contact</li>
            <li>Us</li>
            <li>Find</li>
        </ul>


      <Card className='about'>
          <h1>About the project</h1>
          <p>this is react project which we learn how react is working</p>
          <p>Version: 0.0.1</p>
          <p>
            <Link to='/'>Back to homepage</Link>
          </p>
      </Card>

    </Card>
    
  )
}

export default AboutPage