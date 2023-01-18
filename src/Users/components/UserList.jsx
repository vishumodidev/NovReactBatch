import React from 'react'
import UsetItem from '../components/UserItem';
import './userlist.css'
import Card from '../../shared/components/UIElements/Card';

const UserList = props => {
  if(props.items.length === 0)
  {
    return ( <Card className="center">
    <h2>No users found.</h2>
  </Card> )
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