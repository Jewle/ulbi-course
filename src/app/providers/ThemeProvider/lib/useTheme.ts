import {ThemeContext, Themes} from "../ui/ThemeContext";
import {useContext} from "react";

interface IUseTheme {
    toggleTheme:(theme:Themes)=>void,
    theme:string
}

export default function useTheme() {
    const {theme,setTheme} = useContext(ThemeContext)

    const toggleTheme = ()=>{
        const t  = theme===Themes.LIGHT ? Themes.DARK : Themes.LIGHT
        setTheme(t)
    }
    return {
        theme,
        toggleTheme
    }
}
