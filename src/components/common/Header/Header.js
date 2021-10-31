import React from 'react';
import "./Header.css"
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = ({handleActivePopupCreateCard, handleActiveNavigationBar}) => {

    const history = useHistory();
    const myUserId = useSelector(state => state.loggedInUser.value)
    const currentUser = useSelector(state => state.currentUser.value)

    const handleBackOnPage = () => {
        history.goBack()
    }

    return (
        <header className="header">

            {history.location.pathname === `/${myUserId}` &&
            <>
                <div className="header__content">
                    <p className="header__id-profile">{currentUser._id}</p>
                    <div className="header__button-wrapper">
                        <button
                            className="header__button-add-card header__button"
                            onClick={handleActivePopupCreateCard}
                        />
                        <button className="header__button-menu header__button"
                                onClick={handleActiveNavigationBar}
                        />
                    </div>
                </div>
            </>
            }

            {
                history.location.pathname !== `/${myUserId}` &&
                <div className="header__publications-wrapper">

                    {history.location.pathname === currentUser.userId && `/${myUserId}` !== currentUser.userId &&
                    <>
                        <p className="header__subscribers-id-profile">{currentUser._id}</p>
                        <button
                            className="header__subscribers-button"
                            onClick={handleBackOnPage}
                        />
                    </>
                    }

                    {history.location.pathname === "/subscribers" &&
                    <>
                            <p className="header__subscribers-title">
                                Subscribers
                            </p>
                            <button
                                className="header__subscribers-button"
                                onClick={handleBackOnPage}
                            />
                    </>
                    }

                    {history.location.pathname === "/publications" &&
                    <>
                            <p className="header__publications-id-profile">
                                {currentUser._id}
                            </p>
                            <h1 className="header__publications-title">
                                Publications
                            </h1>
                            <button
                                className="header__publications-button"
                                onClick={handleBackOnPage}
                            />
                    </>
                    }
                </div>
            }
        </header>
    );
};

export default Header;