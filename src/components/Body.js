import RestaurantCard from "./RestaurantCard";
import dessertsData from '../utils/mockData';
import { useEffect, useState } from "react";
import ShimmerUI from './ShimmerUI';

const Body = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    const fetchData = async () => {
        try {
            // setTimeout(async () => {
            const response = await fetch('https://api.allorigins.win/raw?url=https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api');
            // console.log(response);

            // Parse JSON directly
            const data = await response.json();  // <-- this reads and parses the body
            // console.log('data: ', data);
            setData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                        <input type="text" name="search" onChange={handleOnChange} value={search}/>
                        <button type="button" onClick={handleSearch} value={search}>Search</button>
                    </form>
                </div>
                <div className="res-container">
                    {
                        filteredData.map(restaurant => (
                            <RestaurantCard key={restaurant?.info?.id} dessert={restaurant} />
                        ))
                    }
                </div>
            </div>
        )
    )
}

export default Body;