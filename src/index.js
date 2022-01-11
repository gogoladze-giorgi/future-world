import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css'
import App from './App';


i18n
    .use(HttpApi)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs: ['en', 'ka'],
        fallbackLng: "en",
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/language/locales/{{lng}}/translation.json',
        },

    });
const loadingMarkap = (
    <div className="py-4 text-center">
        <h2>Loading..</h2>
    </div>
)

ReactDOM.render(
    <Suspense fallback={loadingMarkap}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Suspense>,
    document.getElementById('root')
);
