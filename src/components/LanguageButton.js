import React from 'react';
import i18next from "i18next";
import './languageButton.css'

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'ka',
        name: 'Georgia',
        country_code: 'ge'
    }
]

const LanguageButton = () => {
    return (
        <div className='box d-flex p-lg-3'>
            {languages.map(({code, name, country_code}) => (
                <li key={country_code}>
                    <button className="dropdown-item " onClick={() => i18next.changeLanguage(code)}>
                        <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                        {name}
                    </button>
                </li>
            ))}
        </div>
    );
};

export default LanguageButton;