import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => React Element(which is a JS Object) => HTML Element (React Element is converted to HTML element using render method) 
// const heading = React.createElement('h1', {id: 'head'}, 'Hello React 🚀');


//JSX is transpiled before it reaches the JavaScript engine by Parcel and Babel.
//JSX => React.createElement (using babel the JSX Element is converted to React Element) => React Element (JS Object) => HTML ELement (using render) 
// const jsxHeading = <h1>Hello React from JSX 🚀</h1>

//Functional Component - Type 1
const Heading1 = () => <h1>Heading from Functional Component 1</h1>

//Functional Components Definition
// It is just a JavaScript Function that returns some JSX or a
// react element.

//Functional Component - Type 2
const Heading2 = () => (
    <div>
        <Heading1 />
        <h1>Heading from Functional Component 2</h1>
        <Heading3 />
    </div>
)

//Functional Component - Type 3
const Heading3 = () => {
    return <h1>Heading from Functional Component 3</h1>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading2 />);