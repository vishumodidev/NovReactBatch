import './placelist.css'
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from '../components/PlaceItem'


const PlaceList = props =>{
    if (props.items.length === 0) {
        return (
          <div className="place-list center">
            <Card>
              <h2>No places found. Maybe create one?</h2>
              <button>Share Place</button>
            </Card>
          </div>
        );
      }

      return (
        <ul className='place-list'>
         {
            props.items.map(place =>(
                <PlaceItem
                key={place.id}
                id={place.id}
                image= {props.image}
                title={props.title}
                description={props.description}
                address={props.address}
                creatorId={props.creator}
                coordinates={props.location}

                />
            ))
         }
        </ul>
      )
}


export default PlaceList;