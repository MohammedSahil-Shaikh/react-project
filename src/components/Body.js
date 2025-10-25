import RestaurantCard from "./RestaurantCard";
import dessertsData from '../utils/mockData';
import { useEffect, useState } from "react";
import ShimmerUI from './ShimmerUI';
import { Link } from "react-router-dom";

const Body = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    const fetchData = async () => {
        try {
            // setTimeout(async () => {
            const response = await fetch('http://localhost:7143/getAllRestaurantCards');
            console.log('my server response: ', response);

            // Parse JSON directly
            const data = await response.json();  // <-- this reads and parses the body

            console.log('data: ', data);
            setData(data);
            setFilteredData(data);
            // setData(data?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setFilteredData(data?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // }, 5000);

        } catch (error) {
            console.log('Error while fetching data: ', error);
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleOnChange = (e) => {
        setSearch(e.target.value);
        // if(!search){
        //     console.log('fetch data called again!');
        //     fetchData();
        // }
    }

    const handleSearch = () => {
        const searchResults = data.filter(restaurant => restaurant.info.name.toLowerCase().includes(search.toLowerCase()));
        if (!search)
            setFilteredData(data); // setData(dessertsData);  
        else
            setFilteredData(searchResults);
    }

    return (
        data.length === 0 ? (
            <ShimmerUI />
        ) : (
            <div className="app-body">
                <div className="search">
                    <form>
                        <input type="text" name="search" onChange={handleOnChange} value={search} />
                        <button type="button" onClick={handleSearch} value={search}>Search</button>
                    </form>
                </div>
                <div className="res-container">
                    {
                        filteredData.map(restaurant => (
                            <Link className="res-card-item" key={restaurant?.info?.id} to={`/restaurant/${restaurant?.info?.id}`}>
                                <RestaurantCard dessert={restaurant} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    )
}

export default Body;