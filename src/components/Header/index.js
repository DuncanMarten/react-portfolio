import React from 'react';
import Navigation from "../Navigation";

function Header(props) {
    const {currentPage, handlePageChange} = props;

    return (
        <header className="flex-row px-1">
            <h2 className="name">
                <strong>Duncan Marten</strong>
            </h2>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;