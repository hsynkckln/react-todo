import React from 'react'
import { useState,useEffect } from 'react'

function Form({addContacts,contacts}) {
    const [input,setInput]=useState("");
    const [id,setId]=useState(0)

    useEffect(()=>{
        setInput("")
    },[contacts])

    const onChange=(e)=>{
        setInput(e.target.value)
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        setId(id+1);

        if(input===""){
            return false
        }

        addContacts([...contacts,{id:id,text:input,completed:false}]);
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            
            <input name='inputs' value={input}  className="new-todo" placeholder="What needs to be done?" onChange={onChange} autoFocus />
           
        </form>
    </div>
  )
}

export default Form