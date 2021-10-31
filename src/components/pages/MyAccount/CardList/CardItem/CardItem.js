import React from 'react';
import "./CardItem.css"

const CardItem = ({card, onOpenCard}) => {

    const handleOpenImage = () => {
        onOpenCard(`/publications`)
    }

    return (
        <li className="photo-cards__item-list">
            <img
                src={card.link}
                alt="Image"
                className="photo-cards__item-image"
                onClick={handleOpenImage}
            />
        </li>
    );
};

export default CardItem;