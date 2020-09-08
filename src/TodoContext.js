import React, {useState, createContext} from 'react';

export const TodoContext = createContext(); 
export const TodoProvider = props => {
    const [todos, setTodos] = useState([
        {
          title: "Do your stuff",
          id: 1,
          completed: false
        },
        {
            title: "Sleep well",
            id: 2,
            completed: false
          },
        {
            title: "Work hard",
            id: 3,
            completed: false
          },
      ]);
    
      /*const  todos = [];
    
    useEffect(() => {
    const fetchData = async() => {
       const result =  await axios.get('https://jsonplaceholder.typicode.com/todos')
       .then(res => console.log(res.data)
        )}
    })  */
return(
    <TodoContext.Provider value = {[todos, setTodos]}>
        {props.children}
    </TodoContext.Provider>

)
}

