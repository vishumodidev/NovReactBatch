import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom';



const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://images.pexels.com/photos/5518542/pexels-photo-5518542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    },
    {
      id: 'p3',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u3'
    }
  ];
  

const UserPlace =()=>{

  const userId= useParams().userId;
  console.log(userId)
  const loadPlaces= DUMMY_PLACES.filter(place=> place.creator === userId)
  
    return <PlaceList items={loadPlaces} />
    
}


export default UserPlace;