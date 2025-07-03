import React from 'react'

function HooksNameObj() {

const [name, setName] = React.useState({firstName: '', lastName: ''});

  return (
    <div>
        <input type="text" value={name.firstName} onChange={e => setName(prevName => ({...prevName, firstName: e.target.value}))} placeholder='FirstName' />&nbsp;
        <input type="text" value={name.lastName} onChange={e => setName(prevName => ({...prevName,  lastName: e.target.value}))} placeholder='FirstName' />
        <h5>{name.firstName} &nbsp; {name.lastName}</h5>
    </div>
  )
}
export default HooksNameObj;