import React from "react";
import ReactDOM from "react-dom/client";


const Heading = () => (
    <div>
        {Title()}
        <Title />
        <h1>Heading from Functional Component 🚀</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Heading />);

const Title = () => <h3>Hello</h3>;

const title = (
    <div>
        <h3>Hello I am const title</h3>
        <h3>How are you</h3>
        {/* <Heading /> */}
    </div>
)