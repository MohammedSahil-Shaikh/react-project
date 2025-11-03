import { useEffect, useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1)
    // console.log('props: ', props);


    useEffect(()=> {
        const timer = setInterval(()=> {
            console.log('Interval Running...');
        }, 1500);

        return ()=>{
            clearInterval(timer);
        }
    }, [])

    let name, location;
    if (props) {
        name = props?.name;
        location = props?.location;
    }


    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count 1: {count2}</h1>
            <h2>Name: {name || 'Temp Name'}</h2>
            <h3>Location: {location || 'Temp loc'}</h3>
            <h4>Contact: sahil@gmail.com</h4>
        </div>
    )
}

export default User;