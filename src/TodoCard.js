import React from 'react'

const buttonStyle = {
    color: "#fca311",
    fontSize: "30px"
}
function TodoCard(props) {
    const {title, clickToRemove, index} = props
    return (
        <li style={{ color: "#FCA311" }}>{title}
        <button style={buttonStyle} onClick={() => {clickToRemove(index)}}>Remove</button>
        </li>  
    )
}

export default TodoCard