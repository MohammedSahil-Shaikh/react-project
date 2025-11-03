import  CDN_URL  from '../utils/constants';
// import  * as entire  from '../utils/constants';

const RestaurantCard = (props) => {
    
    const { name, cloudinaryImageId, cuisines, areaName, locality, costForTwo, avgRating, sla } = props?.dessert?.info;

    return (
        <div className="res-card p-2 w-50 mx-4 bg-gray-100 rounded-lg hover:bg-amber-400">
            <img alt="card-image" className="food-picture w-48" src={`${CDN_URL+cloudinaryImageId}`} />
            <h3 className='py-2 font-bold text-lg'>{name}</h3>
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