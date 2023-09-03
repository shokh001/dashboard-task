import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./layout.style";
import Sidebar from "components/Sidebar";
import Topbar from "components/Topbar";

function Layout() {
    return (
        <Container>
            <Sidebar />
            <Main>
                <Topbar />
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Outlet />
                </Suspense>
            </Main>
        </Container>
    );
}

export default Layout;
