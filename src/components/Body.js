import RestaurantCard from "./RestaurantCard";
import dessertsData from '../utils/mockData';
import { useState } from "react";

const Body = () => {

    // const overallRestaurantData = dessertsData.map(restaurant => (
    //     <RestaurantCard key={restaurant.info.id} dessert={restaurant} />
    // ))


    const [data, setData] = useState(dessertsData);
    const [search, setSearch] = useState('');

    // const handleClick = () => {
    //     const filteredData = data.filter(resturant => resturant.info.avgRating > 4.7)
    //     setData(filteredData)
    // }

    const handleOnChange = (e) => {
        setSearch(e.target.value.toLowerCase());
        // const searchResults = data.filter(restaurant => restaurant.info.name.toLowerCase().includes(search));
        // console.log('searchResults: ', searchResults);
        // if (!search)
        //     setData(dessertsData);
        // else
        //     setData(searchResults);
    }

    const handleSearch = () => {
        const searchResults = data.filter(restaurant => restaurant.info.name.toLowerCase().includes(search));
        if (!search)
            setData(dessertsData);
        else
            setData(searchResults);
    }

    return (
        <div className="app-body">
            <div className="search">
                <form>
                    <input type="text" name="search" onChange={handleOnChange} />
                    <button type="button" onClick={handleSearch}>Search</button>
                </form>
            </div>
            {/* <button onClick={handleClick}>
                Top Restraunts
            </button> */}
            <div className="res-container">
                {data && data.length > 0 ? (
                    data.map(restaurant => (
                        <RestaurantCard key={restaurant?.info?.id} dessert={restaurant} />
                    ))
                ) : (
                    <h3>Sorry! No Data Found!</h3>
                )
                }
            </div>
        </div>
    )
}

export default Body;