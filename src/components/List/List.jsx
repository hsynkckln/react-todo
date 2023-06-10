import React, { useState } from 'react'

function List({contacts,setContacts}) {

    const handleRemoveItem = (id) => {

        const removeItem=contacts.filter(item=>item.id!==id)
        setContacts(removeItem)
        
    }
    const onCheck=(id)=>{
        setContacts(contacts.map((item)=>
            item.id===id ? {...item,completed:!item.completed} : item
        ))
    }

    const clearCompleted=()=>{
        setContacts(contacts.filter(todo=>!todo.completed && todo.completed))
    }

    const [filter,setFilter]=useState("all");

    const onFilter=(newFilter)=>{
        setFilter(newFilter)
    }

    if(filter==='active'){
        contacts=contacts.filter(item=>!item.completed)
    }
    else if(filter==='completed'){
        contacts=contacts.filter(item=>item.completed)
    }

    
    return (
        <div>
            <ul className="todo-list">
                {contacts.map((item,index)=>(
                    <li key={index} className={`${item.completed ? "completed" : ""}`}>
                        <div className="view">
                            <input className="toggle" type="checkbox" onClick={()=>onCheck(item.id)} checked={item.completed}/>
                            <label >{item.text}</label>
                            <button className="destroy" onClick={()=>handleRemoveItem(item.id)}></button>
                        </div>
                    </li>
                ))}
            </ul>

            <footer className="footer">
                <span className="todo-count">
                    <strong>{contacts.length} </strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                    <a href="#/" className="selected" onClick={()=>onFilter("all")}>All</a>
                    </li>
                    <li>
                    <a href="#/"  onClick={()=>onFilter("active")}>Active</a>
                    </li>
                    <li>
                    <a href="#/"  onClick={()=>onFilter("completed")}>Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={clearCompleted}>
                    Clear completed
                </button>
            </footer>
        </div>
    )
}

export default List