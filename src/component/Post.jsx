import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {
    const status = 200

    const navigate = useNavigate()

    const onClick =() =>{
        console.log('Hello')
        navigate('/about')
    }

    if(status === 404){
        return <Navigate to = '/not Found'/>
    }

  return (
    <div>
    <h1>Post </h1>
    <button onClick={onClick}>Click</button>
    <Routes>
        <Route path='/show' element={
            <>
             <h1>Hello world</h1>
             <p>This is something which explain about the main project</p>
             <button>Send</button>
             </>
             } />
    </Routes>
    
    </div>
  )
}

export default Post