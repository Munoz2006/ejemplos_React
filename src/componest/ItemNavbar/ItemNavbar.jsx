import { NavLink } from "react-router-dom";

export const ItemNavbar = ({content, route, style}) => {
    return(
        <li>
            <NavLink className={style} to={route}>{content}</NavLink>
        </li>
    )
}