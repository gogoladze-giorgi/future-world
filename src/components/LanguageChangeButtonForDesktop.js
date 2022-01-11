import React from 'react';
import {useNavigate,useParams} from "react-router-dom";
import i18next from "i18next";
import './languageButton.css'

const LanguageChangeButtonForDesktop = () => {
    const Navigate = useNavigate();
    // const {params}=useParams()

    const EnURL =()=>{
        Navigate('/?en')
    }
    const KaURL =()=>{
        Navigate(`/?ka`)
    }

    const showDescription = (f) => {
        if (i18next.language === 'ka') {
            return <div className='flag-button' onClick={EnURL}>
                <span className={`flag-icon flag-icon-gb mx-2`}></span>
                English
            </div>
        }
        return <div className='flag-button' onClick={KaURL}>
            <span className={`flag-icon flag-icon-ge mx-2` }></span>
            Georgia
        </div>
    }

    return (
        <div className='language'>
            <div>
                <div type="button" id="dropdownMenuButton1" aria-expanded="false"
                     onClick={() => {
                         if (i18next.language === 'ka') {
                             i18next.changeLanguage('en')
                         } else {
                             i18next.changeLanguage('ka')
                         }
                     }}>
                    {
                        showDescription()
                    }
                </div>
            </div>
        </div>
    );
};

export default LanguageChangeButtonForDesktop;