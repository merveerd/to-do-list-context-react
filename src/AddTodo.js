import React, {useState} from 'react';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    return(
        <form>
           <input type='text' name ='title'></input> 
        </form>
    )
}

export default AddTodo;