import React from 'react';

const Todo = ({name, id}) => {
    return(
        <div>
        <h3>{name}</h3>
        <p>{id}</p>
    </div>
    )
   
}

export default Todo;