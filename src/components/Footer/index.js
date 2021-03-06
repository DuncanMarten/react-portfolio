import React from "react";
import Github from "../../assets/icons/GitHubLogo.png";
import LinkedIn from "../../assets/icons/LinkedInLogo.png";
import Spotify from "../../assets/icons/SpotifyLogo.png";

function Footer() {

    return (
        <footer className="flex-row">
            <ul className="flex-row center-icons">
                <li className="mx-2">
                    <a href="https://github.com/DuncanMarten" target="_blank" rel="noreferrer">
                        <img src={Github} alt="github logo" className='icon'></img>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="https://www.linkedin.com/in/duncan-marten-61210b1b5/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="linkedin logo" className='icon'></img>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="https://open.spotify.com/user/1291323689?si=j32bG78GRRCqT2HECsYYZw" target="_blank" rel="noreferrer">
                        <img src={Spotify} alt="spotify logo" className='icon'></img>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;