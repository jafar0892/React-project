// import PropTypes from 'prop-types' when we delete feedback from function 
// then we don't need to have this. 
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackStats() {
 const {feedback} = useContext(FeedbackContext)

  let average =
    feedback.reduce((acc, cur) => {
      return acc +cur.rating
    }, 0)/feedback.length
  

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
    <h4>{feedback.length } Reviews</h4>
    <h4>Average rating: {isNaN(average)?0 : average}</h4>
    </div>
  )
}


// FeedbackStats.propTypes = {
//   Feedback: PropTypes.array,

// }

export default FeedbackStats