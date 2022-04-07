import React, { useEffect } from 'react';

import './App.less';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageRender from './PageRender';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { addUser } from 'redux/slice/authSlice';



function App() {

    const { currentUser } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(addUser({ name: 'Nguyen Van Trinh' }))
    }, [])


    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={PageRender} exact />
                    <Route path="/:page" component={PageRender} exact />
                    <Route path="/:page/:control" component={PageRender} exact />

                </Switch>
            </BrowserRouter>
        </>
    );

}

export default App;
