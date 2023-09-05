import {FC} from 'react';
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import classNames from "helpers/classNames/classNames";

enum LinkTheme{
    PRIMARY='primary',
    SECONDARY  = 'secondary'
}

interface LinkInterface extends LinkProps{
    className?:string,
    children?:any,
    theme?:LinkTheme
}

const AppLink:FC<LinkInterface> = (props) => {
    const {to,
        className,
        children,
        theme=LinkTheme.PRIMARY,
        ...otherProps} = props
    return (
        <Link
            to={to}
            className={classNames(cls.appLink,{}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}

        </Link>
    );
};

export default AppLink;
