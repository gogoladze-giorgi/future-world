import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import loadable from '@loadable/component'
import MainPage from "./pages/MainPage";
import Footer from "./components/Main/Footer";
import Navbar from "./components/Main/Navbar";
import './App.css'
import MessengerCustomerChat from 'react-messenger-customer-chat';


const AurTeam = loadable(() => import("./pages/AurTeam"))
const AboutUs = loadable(() => import("./pages/AboutUs"))
const Levels = loadable(() => import("./pages/Levels"))
const EnglishPage = loadable(() => import ('./pages/English'))
const GermanPage = loadable(() => import ("./pages/German"))
const RussiaPage = loadable(() => import  ("./pages/Russia"))
const Sapasuri = loadable(() => import ('./pages/Sapasuri'))

function App() {

    const loading = (
        <div className="py-4 text-center">
            <h2>Loading..</h2>
        </div>
    )
    const {innerWidth, innerHeight} = window;

    function showMessanger() {
        return innerWidth <= 1000 ? null : <MessengerCustomerChat
            pageId="106849101872702"
            appId="1304787190039791"
        />
    }


    return <div>
        <div className='backgrounds'>
            <Navbar/>
        </div>
        <Suspense fallback={loading}>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/team' element={<AurTeam/>}/>
                <Route path='/fees' element={<Sapasuri/>}/>
                <Route path='/levels' element={<Levels/>}/>
                <Route path='/english' element={<EnglishPage/>}/>
                <Route path='/german' element={<GermanPage/>}/>
                <Route path='/russia' element={<RussiaPage/>}/>
            </Routes>
        </Suspense>
        {
            showMessanger()
        }
        <Footer/>
    </div>
}

export default App;
