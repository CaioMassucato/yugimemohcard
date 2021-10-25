import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MyCollection from '../pages/MyCollection';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/mycollection' component={MyCollection} />
            </Switch>
        </Router>
    );
}

export default Routes;