import React from 'react';
import './index.css';

const Layout = (props) => {
    return (
        <div className="layout">
            <header>
                {props.headerSlot}
            </header>
            <main>
                {props.contentSlot}
            </main>
            <footer>
                {props.footerSlot}
            </footer>
        </div>
    );
};

export default Layout;