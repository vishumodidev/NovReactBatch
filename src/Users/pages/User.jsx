import React from 'react'
import UserList from '../components/UserList';

const User = () => {

    const USERS= [
      {
        id: 'u1',
      name: 'Harish',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3
    },
    {
      id: 'u2',
    name: 'Praveen',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    places: 1
  },
  {
    id: 'u3',
  name: 'Praveen',
  image:
    'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  places: 1
}
]
 
 
 
    return ( <UserList items={USERS} />)
}

export default User