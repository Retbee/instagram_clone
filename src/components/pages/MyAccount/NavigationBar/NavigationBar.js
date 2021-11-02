import React from 'react';
import "./NavigationBar.css"
import pathGearIcon from "../../../../images/icon/icon-gear.svg"
import pathArchiveIcon from "../../../../images/icon/icon-archive.svg"
import pathClockIcon from "../../../../images/icon/icon-clock.svg"
import pathQrIcon from "../../../../images/icon/icon-qr-code.svg"
import pathSaveIcon from "../../../../images/icon/icon-save.svg"
import pathFriendIcon from "../../../../images/icon/icon-list.svg"
import pathCovidIcon from "../../../../images/icon/icon-certificate.svg"
import * as api from "../../../API/api"
import {useHistory} from "react-router-dom";
import {persistor} from "../../../../ReduxAndOther/store/store";


const NavigationBar = ({handleActiveNavigationBar, isActiveNavigationBar}) => {

    const history = useHistory()

    const handleSignOut = () => {
        persistor.purge();
        api.signOut()
        history.push('/signin')
        document.body.classList.remove("page_lock");
    }

    return (
        <div className={`navigation ${isActiveNavigationBar ? 'navigation_active' : ''} `}
             onClick={handleActiveNavigationBar}
        >
            <nav className={`navigation__menu ${isActiveNavigationBar ? "navigation__menu_active" : ""}`}
                 onClick={(event) => event.stopPropagation()}
            >
                <ul className="navigation__menu-unordered-list">

                    <li className="navigation__menu-list-item">
                        <img
                            src={pathGearIcon}
                            alt="Настройки"
                            className="navigation__menu-item-image"/>
                        <a href="#1"
                            className="navigation__menu-item-link">
                            Настройки
                        </a>
                    </li>

                    <li className="navigation__menu-list-item">
                        <img
                            src={pathArchiveIcon}
                            alt="Архив"
                            className="navigation__menu-item-image"/>
                        <a href="#1"
                           className="navigation__menu-item-link">
                            Архив
                        </a>
                    </li>

                    <li className="navigation__menu-list-item">
                        <img
                            src={pathClockIcon}
                            alt="Иконка часов"
                            className="navigation__menu-item-image"/>
                        <a href="#1"
                           className="navigation__menu-item-link">
                            Ваши действия
                        </a>
                    </li>

                    <li className="navigation__menu-list-item">
                        <img
                            src={pathQrIcon}
                            alt="Иконка QR-кода"
                            className="navigation__menu-item-image"/>
                        <a href="#1"
                           className="navigation__menu-item-link">
                            QR-код
                        </a>
                    </li>

                    <li className="navigation__menu-list-item">
                        <img
                            src={pathSaveIcon}
                            alt="Иконка сохранённых постов"
                            className="navigation__menu-item-image"/>
                        <a href="#1"
                           className="navigation__menu-item-link">
                            Сохранённые
                        </a>
                    </li>

                    <li className="navigation__menu-list-item">
                        <img
                            src={pathFriendIcon}
                            alt="Иконка списка"
                            className="navigation__menu-item-image"/>
                        <a href="#1"
                           className="navigation__menu-item-link">
                            Близкие друзья
                        </a>
                    </li>

                    <li className="navigation__menu-list-item">
                        <img
                            src={pathCovidIcon}
                            alt="Иконка сертификации"
                            className="navigation__menu-item-image"/>
                        <a href="#1"
                           className="navigation__menu-item-link">
                            Центр информации о Covid-19
                         </a>
                    </li>
                    <button className="button navigation__button"
                            onClick={handleSignOut}
                    >Выйти из аккаунта</button>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationBar;