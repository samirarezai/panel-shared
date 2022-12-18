import React from 'react';
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme/theme";

const drawerWidth = "200px";
const styles = {
    children: {
        textAlign: "right",
        direction: "rtl",
        height: "100%",
        paddingBottom: "64px",
    },
};
const Main = ({open, children,className=''}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: '1.6rem 1rem',
                width:
                    !isMobile && open
                        ? `calc(100% - ${drawerWidth})`
                        : isMobile
                            ? "100%"
                            : `calc(100% - 48px)`,
            }}
            style={styles.children}
            className={className}
        >
            {children}
        </Box>
    );
};

export default Main;