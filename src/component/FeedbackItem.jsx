// import {useState} from 'react' 
import {FaTimes, FaEdit} from 'react-icons/fa' 
// import PropTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

function FeedbackItem({item}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    // // const [rating] = useState(7)
    // // const [text] = useState('this is an example of feedback dispaly')
    
    // // /* // const handleClick = () =>{
    // //     setRating((prevs) =>{
    // //         console.log(prevs)
    // //         return prevs +1
    // //     })
    // } 
    // Here we can increment the the value each time we click on the button.
    // */
  return (
    <Card> {/* Here we will choose card instead of div and 
    change it to card */}
    <div className='num-display'>{item.rating}</div>
    <button onClick={()=>deleteFeedback(item.id)} className='close'>
      <FaTimes color = "purple"/>
    </button>
     <button onClick={() => editFeedback(item)} className='edit'>
      <FaEdit color='purple' />
     </button>
    <div className="text-display"> {item.text}</div>
    
  
    {/* <button onClick ={handleClick}>Click</button> */}
    
    </Card>
  )
}


export default FeedbackItem