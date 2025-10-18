import React from "react";
import ReactDOM from 'react-dom/client'

const reactHeader = React.createElement('div', { className: 'title' },
    [
        React.createElement('h1', {}, 'I am h1 tag by React'),
        React.createElement('h2', {}, 'I am h2 tag by React'),
        React.createElement('h3', {}, 'I am h3 tag by React'),
    ]
)

const jsxHeader = (
    <div className="title">
        <h1>I am h1 tag by JSX.</h1>
        <h2>I am h2 tag by JSX</h2>
        <h3>I am h3 tag by JSX.</h3>
    </div>
)

const JSXHeader = () => (
    <div className="title">
        <h1>I am h1 tag by JSx in a Function Component</h1>
        <h2>I am h2 tag by JSX in a Function Component</h2>
        <h3>I am h3 tag by JSX in a Function Component.</h3>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        {reactHeader}
        {jsxHeader}
        <JSXHeader />
    </div>

);