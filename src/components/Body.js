import RestaurantCard from "./RestaurantCard";
import dessertsData from '../utils/mockData';
import { useEffect, useState } from "react";
import ShimmerUI from './ShimmerUI';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    const onlineStatus = useOnlineStatus();

    const fetchData = async () => {
        try {
            // setTimeout(async () => {
            const response = await fetch('http://localhost:7143/getAllRestaurantCards');

            // Parse JSON directly
            const data = await response.json();  // <-- this reads and parses the body
            
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

    if(!onlineStatus){   
        return <h1> It appears as if you're offline. Please check you internet connection and try again!</h1>
    }

    return (
        data.length === 0 ? (
            <ShimmerUI />
        ) : (
            <div className="app-body">
                <div className="search flex">
                    <form>
                        <input className=" h-8 p-2 border-2 rounded-lg m-4" type="text" name="search" onChange={handleOnChange} value={search} />
                        <button className="bg-amber-400 px-4 py-1.5 rounded-lg cursor-pointer hover:bg-amber-50 text-black border-1 border-amber-400" type="button" onClick={handleSearch} value={search}>Search</button>
                    </form>
                </div>
                <div className="res-container flex flex-wrap">
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