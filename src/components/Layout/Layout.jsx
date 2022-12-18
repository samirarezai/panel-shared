import React from "react";

const Layout = (props  ) => {
    const styles = {
        container: {
            backgroundColor: "#0A1930",
            color: "#fff",
            width: "100%",
            margin: "auto",
            minHeight: "100vh",
        },
        children: {
            textAlign: "right",
            direction: "rtl",
            height: "100%",
            paddingBottom: "64px",
        },
    };
    return <div style={styles.container}>
        {props.children}
    </div>;
};

export default Layout;