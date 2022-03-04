import React from 'react'
import PropTypes from 'prop-types'

export const TodoForm = props => { 
    return(
        <form onSubmit={props.handleSubmit}>
            <input 
             type="text" value={props.currentTodo} 
             onChange={props.handleOnchangeInput} 
             placeholder = "What do you want to do today ?"/>
          </form>
    )
}

TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleOnchangeInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}