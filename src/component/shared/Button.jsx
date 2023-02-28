import React from 'react'
import PropType from 'prop-types'

function Button({children, version, type,isDisable}) {
  return (
    <button type={type} disabled = {isDisable} 
    className = {`btn btn-${version}`}>
    {children}
    </button>
  )
}

Button.defaultProps ={
     version: "primary",
     type: "button",
     isDisable : false
}

Button.propTypes ={
children: PropType.node.isRequired,
type: PropType.string,
version: PropType.string,
isDisable: PropType.bool,

}
export default Button