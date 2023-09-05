import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import './styles/index.scss'
import useTheme from "./providers/ThemeProvider/lib/useTheme";
import classNames from "helpers/classNames/classNames";
import {Themes} from "app/providers/ThemeProvider/ui/ThemeContext";
import { AboutPage } from 'pages/AboutPage';
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";




const App = () => {
   const {theme,toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {ass:true}, [theme])}>
            <button
                onClick={toggleTheme}
                className={'theme-selector'}>
                {theme===Themes.DARK? Themes.LIGHT : Themes.DARK}
            </button>
                <NavBar/>
                <p className='testing'>Here's app</p>
            <AppRouter/>
            </div>

    );
};

export default App;
