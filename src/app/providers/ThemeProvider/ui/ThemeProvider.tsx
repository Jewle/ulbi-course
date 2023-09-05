import React, {FC, useMemo, useState} from 'react';
import {ThemeContext, Themes} from "../ui/ThemeContext";

const ThemeProvider:FC<{children:any}> = ({children}) => {
    const [theme,setTheme] = useState<Themes>(Themes.DARK)

    const defProps = useMemo( ()=>({
        theme,
        setTheme

    }), [theme])
    return (
       <ThemeContext.Provider value={defProps}>
           {children}
       </ThemeContext.Provider>
    );
};

export default ThemeProvider;
