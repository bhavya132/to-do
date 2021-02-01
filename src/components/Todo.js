import React,{useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

function Todo({todos,completeTodo,removeTodo,updateTodo}) {
    const [edit,setEdit]=useState({
        id:null, value:''
    })
    // console.log(...todos)
    
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
    return todos.map((todo,index)=>(
        
        <div className={todo.isComplete?'todo-row complete':'todo-row'} key={index} >
             <div key={todo.id}  >
                {todo.text}
            </div>
            <div className="icons">
              <IoMdCheckmarkCircleOutline 
                onClick={() => completeTodo(todo.id)}
                 className='delete-icon'/>
                <RiCloseCircleLine 
                 onClick={()=>removeTodo(todo.id)}
                 className='delete-icon'/>
                <TiEdit 
                 onClick={()=>setEdit({id:todo.id, value:todo.text})}
                 className='edit-icon'/>
            </div>
        </div>
    ))
}


export default Todo
