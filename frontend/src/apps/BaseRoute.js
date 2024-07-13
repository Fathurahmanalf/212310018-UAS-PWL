import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../modules/Page/Home/Home';
import Artikel from '../modules/Page/Artikel/Artikel';
import ArtikelOne from '../modules/Page/Artikel/Component/ArtikelOne';
import ArtikelTwo from '../modules/Page/Artikel/Component/ArtikelTwo';
import SignIn from '../modules/Page/Auth/SignIn';
import SignUp from '../modules/Page/Auth/SignUp';
import LayoutInit from '../components/LayoutInit';
import Chatbot from '../modules/Page/Chatbot/Chatbot';


export default function BaseRoute () {
    return (

        <React.Suspense>
            <Routes>
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />

                <Route path="/" element={ <LayoutInit> <Home /> </LayoutInit>} />
                <Route path="/artikel" element={<LayoutInit> <Artikel /> </LayoutInit>} />
                <Route path="/artikelOne" element={<LayoutInit> <ArtikelOne /> </LayoutInit>} />
                <Route path="/artikelTwo" element={<LayoutInit><ArtikelTwo /> </LayoutInit>} />
                <Route path="/chatbot" element={<LayoutInit><Chatbot /> </LayoutInit>} />
            </Routes>
        </React.Suspense>

    )
}
