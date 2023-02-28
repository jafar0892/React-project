

function Card({children, reverse}) {
  return (
    // {/* <div className={`card ${reverse && 'reverse'}`}>
    // {children}
    // </div> */}

    <div className="card" style={{
        backgroundColor: reverse ? 'black' : 'white',
        // now for color and we write an if condition. it contiues below
        // if reverse then we want text color white else we want text color be black
        color: reverse ? 'white' : 'balck'
    }}>
        {children}
    </div>

  )
}

Card.defaultProps= {
    reverse: "false"
}


export default Card