import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SubMenuItem } from "./SubMenuItem";
import { Divider } from "@mui/material";
import ExwinoIcon from "./../FontTypography/exwino";
import theme from "../theme/theme";

const MenuItem = ({selectedItem,menuItem,onClick,open,mobileOpen,collapseOpenBoolean,onClickSubMenu,location}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <ListItemButton
                dir="rtl"
                style={{ position: "relative" }}
                // id={location.pathname.startsWith(menuItem.link) ? "active" : ""}
                className={`${
                    selectedItem === menuItem.elementNo
                        ? menuItem.subNav && menuItem.subNav.length > 0
                            ? "activeItem"
                            : "activeItem activeItem_none_submenu"
                        : "disActiveItem"
                }`}
                onClick={onClick}
            >
                <ListItemIcon>
                    {selectedItem === menuItem.elementNo ? (
                        // <img id="icon" src={menuItem.activeIcon} width={24} />
                        <ExwinoIcon icon={menuItem.icon} classes="text-primary" />
                    ) : (
                        <ExwinoIcon
                            icon={menuItem.icon}
                            classes={`color-icon-default ${
                                menuItem.title === "تیکت" ? "disActiveEmailIcon" : ""
                            }`}
                        />
                        // <img
                        //   id="icon"
                        //   src={menuItem.icon}
                        //   className={`${
                        //     menuItem.title === "تیکت" ? "disActiveEmailIcon" : ""
                        //   }`}
                        //   width={24}
                        // />
                    )}
                </ListItemIcon>
                <ListItemText
                    className={
                        open || (mobileOpen && isMobile) ? "display-block" : "display-none"
                    }
                    primary={menuItem.title}
                />
                {menuItem.subNav && menuItem.subNav.length ? (
                    collapseOpenBoolean ? (
                        <KeyboardArrowUpRoundedIcon
                            className={`subItem-icon-open
                ${
                                open || (mobileOpen && isMobile)
                                    ? "display-block"
                                    : "display-none"
                            }`}
                        />
                    ) : (
                        <KeyboardArrowDownRoundedIcon
                            className={`subItem-icon-open
                ${
                                open || (mobileOpen && isMobile)
                                    ? "display-block"
                                    : "display-none"
                            }`}
                        />
                    )
                ) : menuItem.subNav &&
                menuItem.subNav.length === 0 &&
                selectedItem !== menuItem.elementNo ? (
                    <KeyboardArrowDownRoundedIcon
                        className={`subItem-icon-open
              ${
                            open || (mobileOpen && isMobile)
                                ? "display-block"
                                : "display-none"
                        }`}
                    />
                ) : null}
                {!open && menuItem.subNav && menuItem.subNav.length ? (
                    <div className={`popover ${open ? "display-none" : "hoverPopover"}`}>
                        <p style={{ padding: 12, margin: 0 }}>{menuItem.title}</p>
                        <Divider />
                        <SubMenuItem
                            open={open}
                            mobileOpen={mobileOpen}
                            menuItem={menuItem}
                            location={location}
                        />
                    </div>
                ) : !open ? (
                    <div className={`popover ${open ? "display-none" : "hoverPopover"}`}>
                        <p style={{ padding: 12, margin: 0 }}>{menuItem.title}</p>
                    </div>
                ) : null}
            </ListItemButton>
            {(open || (mobileOpen && isMobile)) &&
                // selectedItem === menuItem.elementNo &&
                collapseOpenBoolean &&
                menuItem.subNav &&
                menuItem.subNav.length && (
                    <Collapse
                        className={
                            open || (mobileOpen && isMobile)
                                ? "display-block"
                                : "display-none"
                        }
                        in={
                            (open || (mobileOpen && isMobile)) &&
                            // selectedItem === menuItem.elementNo &&
                            collapseOpenBoolean &&
                            menuItem.subNav &&
                            menuItem.subNav.length
                        }
                        timeout="auto"
                        unmountOnExit
                    >
                        <SubMenuItem
                            open={open}
                            mobileOpen={mobileOpen}
                            menuItem={menuItem}
                            onClick={onClickSubMenu}
                            location={location}
                        />
                    </Collapse>
                )}
        </>
    );
};

export default MenuItem;