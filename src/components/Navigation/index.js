import React from "react";

function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return(
        <nav>
            <ul>
                {tabs.map(tab => (
                    <li key={tab}>
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