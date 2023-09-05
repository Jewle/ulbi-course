import React, {FC} from 'react';
import {Link} from "react-router-dom";
import classNames from "helpers/classNames/classNames";
import cls from './NavBar.module.scss'
import AppLink from "shared/ui/AppLink";
interface NavBarProps {
    className?:string
}
const NavBar:FC<NavBarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink to={'/about'}>О нас</AppLink>
            <AppLink to={'/main'}>Главная</AppLink>
            <AppLink to={'/counter'}>Счётчик</AppLink>
        </div>
    );
};

export default NavBar;
