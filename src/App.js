import React, { useState} from "react";
import {Layout, Header, Sidebar, ExwinoIcon} from "./components";
import {ThemeProvider} from '@mui/material/styles';
import theme from "./components/theme/theme";

function App() {
    const [open, setOpen] = React.useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Header
                        open={open}
                        setOpen={setOpen}
                        mobileOpen={mobileOpen}
                        setMobileOpen={setMobileOpen}
                    >
                        my header
                    </Header>
                    <div style={{marginTop:'100px'}}>
                        <ExwinoIcon icon="bag"/>
                    </div>
                    <Sidebar>
                        my sidebar
                    </Sidebar>
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;
