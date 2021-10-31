import React from 'react';
import "./Profile.css"
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const Profile = () => {

    const currentUser = useSelector(state => state.currentUser.value)

    const history = useHistory()

    const handleToSubscribers = () => {
        history.push("/subscribers")
    }

    return (
        <section className="profile">

            <div className="profile__wrapper">
                <div className="profile__wrapper-image">
                    <img className="profile__avatar"
                         src={currentUser.avatar}
                         alt="User's avatar"
                    />
                </div>

                <div className="profile__public-info">
                    <ul className="profile__unordered-list">

                        <li className="profile__item-list">
                            <h2 className="profile__item-number">
                                16
                            </h2>
                            <p className="profile__item-subtitle">
                                Публикации
                            </p>
                        </li>

                        <li className="profile__item-list"
                            onClick={handleToSubscribers}
                        >
                            <h2 className="profile__item-number">
                                106
                            </h2>
                            <p className="profile__item-subtitle">
                                Подписчики
                            </p>
                        </li>

                        <li className="profile__item-list">
                            <h2 className="profile__item-number">
                                206
                            </h2>
                            <p className="profile__item-subtitle">
                                Подписки
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="profile__info">
                <h1 className="profile__name">
                    {currentUser.name}
                </h1>

                <p className="profile__signature">
                    Moscow
                </p>
            </div>

            <button className="profile__button-edit">
                Edit
            </button>
        </section>
    );
};

export default Profile;