import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";

import './index.css';
import ReadUsers from './components/ReadUsers'
import CreateUser from './components/CreateUser'
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">See Users</Link>
                </li>
                <li>
                    <Link to="/create">Add User</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={ReadUsers} />
            <Route path="/create" component={CreateUser} />
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
