import { useEffect, useState } from "react"


const useRestaurantMenu = (restaurantId) => {

    const [menu, setMenu] = useState(null);

    const fetchRestaurantMenuData = async () => {
        const response = await fetch(`http://localhost:7143/getRestaurantMenu?restaurantId=${restaurantId}`)
        const json = await response.json();

        setMenu(json);
    }

    useEffect(() => {
        fetchRestaurantMenuData();
    }, [])

    return menu
}

export default useRestaurantMenu;