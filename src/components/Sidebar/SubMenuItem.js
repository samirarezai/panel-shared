import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
// import {useLocation} from "react-router-dom";
import theme from "../theme/theme";

export const SubMenuItem = ({menuItem, open, mobileOpen, onClick,location}) => {
    // const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        menuItem.subNav &&
        menuItem.subNav.map((subItem, index) => (
            <List
                className={`${
                    open || (mobileOpen && isMobile)
                        ? "subItem"
                        : "collapseSubItem"
                } ${
                    location?.pathname && (location?.pathname.concat(location.search).startsWith(subItem.link)
                        ? open || (mobileOpen && isMobile)
                            ? "activeSubItem"
                            : "activeCollapseSubItem"
                        : null)
                }`}
                component="div"
                key={`${index}`}
                disablePadding
            >
                <ListItemButton
                    sx={{pl: 4}}
                    onClick={()=>onClick(subItem,menuItem)}
                >
                    <ListItemText primary={subItem.title} className="pr-4"/>
                </ListItemButton>
            </List>
        ))
    );
};
