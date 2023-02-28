
import PropsTypes from "prop-types"

function Header({text, bgColor, textColor}) {
    const headerStyle = {
        backgroundColor:  bgColor, 
        color: textColor,
        fontSize: '20px',
    }
  return (
    <header style={headerStyle}>
    {/* we can also choose the above line before return like or 
    like this: style = {{ backgroundColor: 'blue', color: 'red'}}*/}
        <div className="container">
        {text}
        </div>
    </header>
    
  )
}

Header.defaultProps = {
    text: <h1>Feedback UI</h1>,
    bgColor : 'red',
    textColor: 'blue',
}

Header.propsTypes = {
text : PropsTypes.string,
bgColor : PropsTypes.string,
textColor : PropsTypes.string,
}
export default Header