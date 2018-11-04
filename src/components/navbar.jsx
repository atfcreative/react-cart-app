import React from 'react';

//Stateless functional componenet
//Cannot use lifecyle hook
const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered');
    return (  
        <nav className="navbar navbar-light bg-light">
            <button className="navbar-brand btn btn-lg">
                Items in Cart{' '} <span className="badge badge-pill badge-secondary">
                {totalCounters}
                </span>
            </button>
        </nav>
    );
};
 
export default NavBar;