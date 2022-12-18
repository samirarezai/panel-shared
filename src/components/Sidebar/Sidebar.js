import React from "react";
import {styled, useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import MobileDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
// import {useHistory} from "react-router-dom";
import RTL from "../rtl/index";
// import company_logo_white from "../assets/vector/company_logo/70.svg";
// import company_logo_white_small from "../assets/vector/company_logo/60.svg";
// import backIcon from "../assets/vector/back-dashboard.svg";
import ExwinoIcon from "../FontTypography/exwino";

const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    overflow: "visible",
    // width: `calc(${theme.spacing(5)} + 1px)`,
    width: `48px !important`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(5)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
    // overflow: "visible",
}));

const DrawerHeader = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    backgroundColor: "#7e94ff",
    boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Sidebar = (props = {
    open: true,
    children: '',
    ROOT: '',
    SidebarData: [],
    renderItemsDrawer: '',
    company_logo_white: '',
    company_logo_white_small: '',
    backIcon: '',
    onClick:()=>{}
}) => {
    // const history = useHistory();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    // const renderItemsDrawer = React.useMemo(() => {
    //     if(props.SidebarData?.length >0)
    //     return props.SidebarData.map((item, index) => {
    //         // if (!isMobile && item.title !== "تیکت")
    //         if (!isMobile)
    //             return (
    //                 <MenuItem
    //                     menuItem={item}
    //                     open={props.open}
    //                     mobileOpen={props.mobileOpen}
    //                     key={index}
    //                 />
    //             );
    //         else if (isMobile && item.title === "تیکت")
    //             return (
    //                 <MenuItem
    //                     menuItem={item}
    //                     open={props.open}
    //                     mobileOpen={props.mobileOpen}
    //                     key={index}
    //                 />
    //             );
    //         else if (isMobile)
    //             return (
    //                 <MenuItem
    //                     menuItem={item}
    //                     open={props.open}
    //                     mobileOpen={props.mobileOpen}
    //                     key={index}
    //                 />
    //             );
    //
    //     });
    //     return '';
    // }, [props.SidebarData, props.open, props.mobileOpen, isMobile]);

    // const container = window ? (window !== undefined ? () => window.document.body : undefined) : '';

    return (<RTL>
        <CssBaseline/>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {isMobile ? (
            <MobileDrawer
                // container={container}
                variant="temporary"
                open={props.mobileOpen}
                onClose={() => props.setMobileOpen(false)}
                anchor="right"
                className="sidebar"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                style={{width: drawerWidth}}
            >
                <Toolbar className="toolbarLogo">
                    <Box className="logo" onClick={props.onClick}>
                        <img alt="" src={props.company_logo_white} className="w-75"/>
                    </Box>
                </Toolbar>
                {/*<Divider/>*/}
                <div className={`navDashboard ${props.mobileOpen ? "overflowY" : ""}`}>
                    {props.renderItemsDrawer}
                </div>
                {/*<Divider/>*/}
            </MobileDrawer>
        ) : (
            <Drawer
                variant="permanent"
                className="sidebar"
                anchor="right"
                open={props.open && !isMobile}
                theme={theme}
                sx={{width: '200px'}}
            >
                <DrawerHeader className="toolbarLogo" theme={theme}>
                    {/* company logo */}
                    <Box className="logo"
                        onClick={props.onClick}
                    >
                        <img alt=""
                             src={props.open ? (props.company_logo_white) : ( props.company_logo_white_small)}
                             className="w-75"/>
                    </Box>
                </DrawerHeader>
                <div className="drawer-design" dir="ltr" style={{overflowY: props.open ? 'auto' : "visible"}}>

                    {/*<Divider />*/}
                    <div className={`navDashboard ${props.open ? "overflowY" : ""}`}>
                        {props.renderItemsDrawer}
                    </div>
                    {/*<Divider />*/}

                </div>
                <button
                    className={`btnDrawer ${!props.open ? "closeBtnDrawer" : ""}`}
                    // style={{
                    //     display: {xs: "none !important", md: "block !important"},
                    // }}
                    onClick={() => props.setOpen(state => !state)}
                    style={{backgroundImage: `url(${props.backIcon})`}}
                >
                    {/*{props.open ? (*/}
                    {/*  <ChevronRightIcon onClick={handleDrawerClose} />*/}
                    {/*) : (*/}
                    {/*  <ChevronLeftIcon onClick={handleDrawerOpen} />*/}
                    {/*)}*/}
                    {/*<span className="back-btn">*/}
                    {/*    <img src={props.backIcon} alt="back"/>*/}
                    {/*</span>*/}
                    <span className="button-all">
                           <span className="icon-btn">
                             <ExwinoIcon icon="close-circle" classes="color-icon-default"/>
                        </span>
                        </span>
                </button>
            </Drawer>
        )}
    </RTL>);
};

export default Sidebar;