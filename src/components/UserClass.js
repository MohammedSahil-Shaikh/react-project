
import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: 'Dummy Data',
                location: 'Dummy Location'
            }
        }
        // this.state = {
        //     count: 0,
        //     count2: 2,
        //     email: 'amaan@gmail.com'
        // }

        console.log(`Child Constructor`);
    }

    // async componentDidMount() {
    //     console.log(`Child componentDidMount Called!`);

    //     const response = await fetch(`https://api.github.com/users/MohammedSahil-Shaikh`);
    //     console.log('response: ', response);

    //     const json = await response.json();
    //     console.log('json: ', json);

    //     this.setState({
    //         userInfo: json
    //     })
    // }


    // componentDidMount() {
    //     console.log(`Child componentDidMount Called!`);

    //     const promise = fetch('https://api.github.com/users/MohammedSahil-Shaikh');

    //     promise.then(response => {
    //         console.log('response: ', response);
            
    //         const data = response.json();

    //         data.then(json => {
    //             console.log('json: ', json);
    //             this.setState({
    //                 userInfo: json
    //             })
    //         })

    //     }).catch(err => {
    //         console.log('Error Occured while fetchung user: ', err);

    //     })
    // }

    componentDidMount() {
        console.log(`Child componentDidMount Called!`);
        this.timer = setInterval(() => {
            console.log(`Interval Running...`);
        }, 2000)
    }

    componentDidUpdate() {
        console.log(`Child componentDidUpdate Called!`);
    }

    componentWillUnmount() {
        console.log('Called before the component unmounted...');
        clearInterval(this.timer);
        console.log('Interval Cleared Before Unmounting!');
    }

    render() {
        console.log(`Child Render`);

        const { name, location } = this.state.userInfo;

        return (
            <div className="user-card" >
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                {/* <h4>Contact: {email} </h4> */}
            </div>
        )
    }

    // render() {
    //     const { name, location } = this.props
    //     const { count, count2, email } = this.state;

    //     console.log(`${name} Child Render`);

    //     return (
    //         <div className="user-card">
    //             <h1>Count: {count}</h1>
    //             <button onClick={
    //                 () => {
    //                     this.setState({
    //                         count: count+1,
    //                         // count2: count2+1
    //                     })
    //                 }
    //             }
    //             >
    //                 Increment Counter
    //             </button>
    //             <h1>Count2: {count2}</h1>
    //             <h2>Name: {name}</h2>
    //             <h3>Location: {location}</h3>
    //             <h4>Contact: {email} </h4>
    //         </div>
    //     )
    // }
}

export default UserClass;