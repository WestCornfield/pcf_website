import React, { ReactElement } from 'react';
import FestivalLogo from '../../assets/logo/pcf_logo_2024.png';
import './header.css';

/**
 * This is the component for the Header page. Placeholder.
 * Will eventually have functionality in later versions.
 *
 * @returns - {ReactElement} - component for Header page
 */
export function Header(): ReactElement {
    return (<div className="header" id="header-container" data-testid="header-container">
        <img src={FestivalLogo} />
    </div>);
}
