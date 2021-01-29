import React from "react";

function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return(
        <nav>
            <ul className="flex-row">
                {tabs.map(tab => (
                    <li className={`mx-2 ${props.currentPage === tab && 'navActive'}`} key={tab}>
                        <a
                            href={'#' + tab}
                            onClick={() => props.handlePageChange(tab)}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;