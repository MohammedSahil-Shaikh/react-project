
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends Component {

    constructor(props) {
        super(props);
        console.log('Parent Constructor');
        
    }

    componentDidMount() {
        console.log('Parent componentDidMount Called!');
    }


    render() {

        console.log('Parent Render');

        return (
            <div className="about-us">
                <h1>About Us Page</h1>
                {/* {User({name: 'Afee', location: 'Mumbra'})} */}
                {/* <User name= {'Mohammed Sahil Shaikh'} location='Mumbai'/> */}
                <User />
                {/* <UserClass name={'First'} location='Saudi' /> */}
                {/* <UserClass name={'Second'} location='Saudi' /> */}
                {/* Wrong Approach */}
                {/* {
                    setTimeout(() => {
                        return <UserClass name={'Second'} location='Saudi' />
                    }, 3000)
                } */}
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div className="about-us">
//             <h1>About Us Page</h1>
//             {/* {User({name: 'Afee', location: 'Mumbra'})} */}
//             {/* <User name= {'Mohammed Sahil Shaikh'} location='Mumbai'/> */}
//             <UserClass name={'Amaan'} location='Saudi'/>
//         </div>
//     )
// }

export default About;