import React from 'react'
import UsetItem from '../components/UserItem';
import './userlist.css'

const UserList = props => {
  if(props.items.length === 0)
  {
    return ( <div className="center">
    <h2>No users found.</h2>
  </div> )
  }
 

  return(
    <ul className="users-list">
      {props.items.map(user => (
        <UsetItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  )

}

export default UserList