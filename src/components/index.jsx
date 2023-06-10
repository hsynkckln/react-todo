import React from 'react'
import { useState,useEffect } from 'react'
import Form from './Form/Form.jsx'
import List from './List/List.jsx'

function Index() {
    const [contacts,setContacts]=useState([]);

    useEffect(()=>{
        console.log(contacts)
    },[contacts])
  return (
    <div>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <Form addContacts={setContacts} contacts={contacts}></Form>
            </header>

            <section className="main">
                <List contacts={contacts} setContacts={setContacts}></List>
            </section>
            
      </section>

      
    </div>
  )
}

export default Index