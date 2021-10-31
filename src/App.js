import React, {useEffect, useState} from "react";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import * as api from "../src/components/API/api"
import Publications from "./components/pages/Publications/Publications";
import {Switch, Route, useHistory} from "react-router-dom";
import Subscribers from "./components/pages/Subscribers/Subscribers";
import {useDispatch} from "react-redux";
import {
    addLoggedInUser,
} from "./ReduxAndOther/features/loggedInUser/loggedInUserSlice";


import './App.css';
import Login from "./components/pages/Login/Login";
import ProtectedRoute from "./components/API/ProtectedRoute";

//
function App() {

    const dispatch = useDispatch()
    const history = useHistory()

    const [isActivePreloader, setIsActivePreloader] = useState(true)

    const data = {
        email: '10@m.ru',
        password: '123456789'
    }

    const handleLogin = async ({email, password}) => {
        const userId = await api.login({email, password})
        dispatch(addLoggedInUser(userId))
        history.push(`/${userId}`)
    }

    useEffect(() => {
        handleLogin(data)
    }, [])

    return (
        <>
            <Switch>
                <Route path={"/signin"}>
                    <Login handleLogin={handleLogin}/>
                </Route>
                <ProtectedRoute path="/publications" component={Publications}/>
                <Route path="/subscribers" component={Subscribers}/>
                <ProtectedRoute exact path="/:id"
                                component={MyAccount}
                                isActivePreloader={isActivePreloader}
                                setIsActivePreloader={setIsActivePreloader}/>
            </Switch>
        </>
    );
}

export default App;
