import React, { PropTypes } from 'react';

const Navbar = ({ title }) => (
    <nav>
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo">{title}</a>
        </div>
    </nav>
);

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;
