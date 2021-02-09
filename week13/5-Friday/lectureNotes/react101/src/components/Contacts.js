import React from 'react'

const Contacts = (props) => {

    console.log(props)
    return (
        <>

        <h1> {props.firstName} {props.lastName} </h1>
        

        <h3>{props.phone}</h3>
        <h3>{props.email}</h3><br/>
        </>
  )
}

export default Contacts
