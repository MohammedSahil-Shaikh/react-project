import  CDN_URL  from '../utils/constants';
// import  * as entire  from '../utils/constants';

const RestaurantCard = (props) => {
    
    const { name, cloudinaryImageId, cuisines, areaName, locality, costForTwo, avgRating, sla } = props?.dessert?.info;

    return (
        <div className="res-card">
            <img alt="card-image" className="food-picture" src={`${CDN_URL+cloudinaryImageId}`} />
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating}</p>
            <div className="res-address">
                <p>{locality}</p>
                <p>{areaName}</p>
            </div>
            <p>{costForTwo}</p>
            <p>{sla.deliveryTime} minutes</p>
        </div>
    )
}

export default RestaurantCard;