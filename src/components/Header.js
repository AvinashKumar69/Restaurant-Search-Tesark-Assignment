import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-slate-200">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Tesark Restaurent Search</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <SearchBar />
                </nav>
            </div>
        </header>
    )
}

export default Header;