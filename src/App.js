import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Secured from './Secured';
import UserInfo from "./UserInfo";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route exact path="/" component={Secured}/>
            </div>
            <div className="container">
                <Route exact path="/" component={UserInfo}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
