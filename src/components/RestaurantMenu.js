import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {

    const [menu, setMenu] = useState();
    const param = useParams();
    const { restaurantId } = param;

    const fetchRestaurantMenuData = async () => {
        const response = await fetch(`http://localhost:7143/getRestaurantMenu?restaurantId=${restaurantId}`);
        const restaurantMenu = await response.json();
        setMenu(restaurantMenu)
    };

    // const fetchRestaurantData = async () => {

    //     const proxies = {
    //         "https": "scraperapi:c05b9784bdab922977b3e8aead3c0216@proxy-server.scraperapi.com:8001"
    //     }
    //     const proxyUrl = "https://api.allorigins.win/raw?url=";
    //     const targetUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.0458752&lng=78.8382644&restaurantId=234875";
    //     const response = await fetch(encodeURIComponent(targetUrl), proxies=proxies);
    //     console.log('reponseObj: ',response);

    //     const contentType = response.headers.get("content-type");

    //     if (contentType && contentType.includes("application/json")) {
    //         console.log('inside if...');
    //         const restaurantJson = await response.json();
    //         console.log("restaurantJson:", restaurantJson);
    //     } else {
    //         console.log('inside else...');
    //         const text = await response.text();
    //         console.log("Received non-JSON response:", text);
    //     }
    //     // console.log('response: ', response);
    //     // const restuarantJson = await response.text();
    //     // console.log('resaturantJson: ', restuarantJson);
    //     // setRestaurantDetails(restuarantJson);
    // }

    useEffect(() => {
        fetchRestaurantMenuData();
    }, [])

    return (
        <div>
            <h1>{menu?.name || 'Data Not Available. Please Check Again Later'} </h1>
            <h2>Menu</h2>
            <h3>Item 1</h3>
            <h3>Item 2</h3>
            <h3>Item 3</h3>
        </div>
    )
}

export default ResturantMenu;