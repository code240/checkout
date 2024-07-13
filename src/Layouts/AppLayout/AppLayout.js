import React from 'react';
import './AppLayout.scss';
import { Outlet } from 'react-router-dom';

const AppLayout = (prop) => {
    return (
        <div>
            <header>Header</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default AppLayout;