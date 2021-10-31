import React from 'react';
import "./PublicationsItem.css"
import {useDispatch, useSelector} from "react-redux";
import * as api from "../../../API/api"
import {updateLikeOfCard} from "../../../../ReduxAndOther/features/currentUser/currentUserSlice";


const PublicationsItem = ({card}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser.value)

    const handleLikeChange = async () => {
        await api.updateNumberOfLikes(card, currentUser.userId, card.likes + 1)
        dispatch(updateLikeOfCard(card))
    }

    return (
        <li className="publications__item-list">

            <div className="publications__wrapper-top">
                <div className="publications__wrapper-image">
                    <img
                        src={currentUser.avatar}
                        alt="Avatar"
                        className="publications__avatar-image"/>
                </div>
                <div className="publications__wrapper-text">
                    <p className="publications__id-profile">
                        {currentUser._id}
                    </p>
                    <a href="#1" className="publications__link-location">
                        Moscow
                    </a>
                </div>

                <button className="publication__button publications__button-action-menu"/>

            </div>

            <img
                src={card.link}
                alt="Image"
                className="publications__item-image"
            />

            <div className="publications__wrapper-bottom">

                <div className="publications__wrapper-button">

                    <div className="publications__wrapper-left-buttons">
                        <button className="publication__button publication__button-like" onClick={handleLikeChange}/>
                        <button className="publication__button publication__button-comment"/>
                        <button className="publication__button publication__button-share"/>
                    </div>
                    <button className="publication__button publication__button-notes"/>
                </div>

                <p className="publications__likes">Likes <span className="publications__likes-count">{card.likes}</span></p>

            </div>
        </li>
    );
};

export default PublicationsItem;