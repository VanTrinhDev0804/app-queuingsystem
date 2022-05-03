import React, { useEffect } from 'react';

import './App.less';
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import PageRender from './PageRender';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { addUser } from 'redux/slice/authSlice';



function App() {



    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={PageRender} exact />
                    <Route path="/:page" component={PageRender} exact />
                    <Route path="/:page/:control" component={PageRender} exact />
                    <Route path="/:page/:control/:id" component={PageRender} exact />
                </Switch>
            </BrowserRouter>
        </>
    );

}

export default App;
