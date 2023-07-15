import React from 'react';

const Header = ({title}) => {
    return (
        <div>
            <header>
                <h1 className='shadow-sm p-3 mb-5 bg-white rounded'>{title}</h1>
            </header>
        </div>
    );
};

export default Header;



