import React, {useEffect, useState} from 'react';
import Header from "../../common/Header/Header";
import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";
import * as api from "../../API/api"
import Preloader from "../../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {
    addCurrentDataUser,
    addCurrentUserId,
    addNewCard,
} from "../../../ReduxAndOther/features/currentUser/currentUserSlice";
import {useHistory} from "react-router-dom";
import PopupCreateCard from "./PopupCreateCard/PopupCreateCard";
import NavigationBar from "./NavigationBar/NavigationBar";


const MyAccount = ({
                       isActivePreloader,
                       setIsActivePreloader,
                   }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const userId = history.location.pathname
    const myUserId = useSelector((state) => state.loggedInUser.value)
    const cards = useSelector((state) => state.currentUser.value).cards

    const [isActivePopupCreateCard, setIsActivePopupCreateCard] = useState(false)
    const [isActiveNavigationBar, setIsActiveNavigationBar] = useState(false)


    const handleGetUserProfile = async (userId) => {
        setIsActivePreloader(true)
        const userProfile = await api.getUserProfile(userId)
        dispatch(addCurrentDataUser(userProfile))
        dispatch(addCurrentUserId(userId))
        setIsActivePreloader(false)
    }

    const handleActivePopupCreateCard = () => {
        setIsActivePopupCreateCard(!isActivePopupCreateCard)
        document.body.classList.toggle("page_lock");
    }

    const handleActiveNavigationBar = () => {
        setIsActiveNavigationBar(!isActiveNavigationBar)
        document.body.classList.toggle("page_lock");
    }

    const handleAddCard = async ({
                                     link,
                                     textLocation,
                                     textDescription
                                 }) => {
        const newCard = await api.addCard(
            link,
            textLocation,
            textDescription,
            cards,
            myUserId
        )
        dispatch(addNewCard(newCard))
        handleActivePopupCreateCard()
    }

    useEffect(() => {
        if (userId !== '') {
            handleGetUserProfile(userId)
        }
    }, [userId])

    return (
        <>
            {isActivePreloader
                ?
                <>
                    <Preloader/>
                </>
                :
                <>
                    <Header
                        handleActivePopupCreateCard={handleActivePopupCreateCard}
                        handleActiveNavigationBar={handleActiveNavigationBar}
                    />
                    <PopupCreateCard
                        handleAddCard={handleAddCard}
                        isActivePopupCreateCard={isActivePopupCreateCard}
                        handleActivePopupCreateCard={handleActivePopupCreateCard}
                    />
                    <Profile/>
                    <CardList/>
                    <NavigationBar
                        handleActiveNavigationBar={handleActiveNavigationBar}
                        isActiveNavigationBar={isActiveNavigationBar}
                    />
                </>
            }
        </>
    );
};

export default MyAccount;