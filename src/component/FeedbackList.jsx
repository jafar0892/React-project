//  import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
//  import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
  
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }

    return (
      <div className="feedback-list">
      {/* <AnimatePresence> */}
      {feedback.map((item) =>(
        <FeedbackItem key={item.id} item={item} 
          />
      ))}
      {/* </AnimatePresence> */}
      </div>
    )

  // return (
  //   <div className="feedback-list">
  //   {feedback.map((item) =>(
  //     <FeedbackItem key={item.id} item={item} 
  //       handelDelete = {handelDelete} />
  //   ))}
  //   </div>
  // )
}


// FeedbackList.propType = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,

//     })
//   )
// }
export default FeedbackList