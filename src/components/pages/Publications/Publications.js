import React from 'react';
import PublicationsItem from "./PublicationsItem/PublicationsItem";
import "./Publications.css"
import Header from "../../common/Header/Header";
import {useSelector} from "react-redux";

const Publications = () => {

    const currentUser = useSelector(state => state.currentUser.value)


    return (
        <>
            <Header />
            <section className="publications">
                <ul className="publications__unordered-list">
                    {currentUser.cards.map((item) =>
                        <PublicationsItem
                            card={item}
                            key={item._id}
                        />
                    )}
                </ul>
            </section>
        </>
    );
};

export default Publications;