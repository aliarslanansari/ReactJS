import React from "react"
import "./App.css"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                id={props.item.id}
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <label for={props.item.id} className={props.item.completed?"completed":null}>{props.item.text}</label>
        </div>
    )
}

export default TodoItem