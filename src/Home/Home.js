import React, { Component, useEffect } from 'react';
import Contact from '../Contact/Contact';
import Team from '../Team/Team';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';

const Home = (props) => {
       
        console.log(props);
        return (
            <div>
                <header >
                    <div className="logoDiv">
                        <img className="logoImg" alt="" src="https://pfizer.sharepoint.com/sites/Launchpad-stg/SiteAssets/getListItemREACT/Images/Logo.PNG" />
                    </div>  
                    <div>
                        Test</div>               
                    <nav>
                        <ul>
                            <li><Link to={{
                                pathname: "/home"
                            }}>Home</Link></li>
                            <li><Link to={{
                                pathname: "/team"
                            }}>Team</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/home" component={Contact} />
                    <Route path="/team" component={Team} />
                    <Redirect from="/" to="/home" />
                </Switch>
                
              
            </div>
        );
    }

export default withRouter(Home);