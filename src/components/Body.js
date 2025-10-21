import RestaurantCard from "./RestaurantCard";
import dessertsData from '../utils/mockData';
import { useEffect, useState } from "react";
import ShimmerUI from './ShimmerUI';

const Body = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const fetchData = async () => {
        try {
            // setTimeout(async () => {
            const response = await fetch('https://api.allorigins.win/raw?url=https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api');
            // console.log(response);

            // Parse JSON directly
            const data = await response.json();  // <-- this reads and parses the body
            // console.log('data: ', data);
            setData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

            // }, 5000);

        } catch (error) {
            console.log('Error while fetching data: ', error);
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleOnChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    const handleSearch = () => {
        const searchResults = data.filter(restaurant => restaurant.info.name.toLowerCase().includes(search));
        if (!search)
            fetchData(); // setData(dessertsData);  
        else
            setData(searchResults);
    }

    if (data.length === 0) {
        return <ShimmerUI />
    }

    return (
        data.length === 0 ? (
            <ShimmerUI />
        ) : (
            <div className="app-body">
                <div className="search">
                    <form>
                        <input type="text" name="search" onChange={handleOnChange} />
                        <button type="button" onClick={handleSearch}>Search</button>
                    </form>
                </div>
                <div className="res-container">
                    {
                        data.map(restaurant => (
                            <RestaurantCard key={restaurant?.info?.id} dessert={restaurant} />
                        ))
                    }
                </div>
            </div>
        )
    )
}

export default Body;