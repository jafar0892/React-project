import {v4 as uuidv4} from 'uuid'
import { createContext,  useState } from "react"


const FeedbackContext = createContext()

export const FeedbackProvider =({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "this item is from context",
            rating: 10
        }
        , {
            id: 2,
            text: "this is a feedback items",
            rating: 9
        }
        , {
            id: 3,
            text: "this is a feedback items",
            rating: 7
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false 
    })

     //add feedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4() //with uuidv4 it generate new id for text
        setFeedback([newFeedback, ...feedback])
    }  // The way to make a new comment or the comment display.
        // we should remember to add the addFeedback in to return below.

           //delete feedback 
    const deleteFeedback =(id)=>{
        if(window.confirm("are you sure you want to delete")){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }
    // Update feedback item 
    const updateFeedback =(id,upItem) =>{
        setFeedback(
            feedback.map((item) =>(item.id) === id ? {...item, ...upItem} : item)
        )
    }

    // set item to be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item, 
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext