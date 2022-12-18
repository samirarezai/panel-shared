import React from "react";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme/theme";

const drawerWidth = 180;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({theme, open, isMobile}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open &&
        !isMobile && {
            marginRight: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    ...(isMobile && {
        width: "100%",
    }),
}));

const Header = (props = {
    open: true,
    children: ''
}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (<AppBar
        position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
        className="appBar"
        open={props.open}
        theme={theme}
        isMobile={isMobile}
        style={{paddingRight: 0}}
    >
        <Toolbar>
            {props.children}
        </Toolbar>
    </AppBar>);
};

export default Header;