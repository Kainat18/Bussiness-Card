import React from 'react';
import ReactDOM from 'react-dom';
import Image from './components/photo';
import Name from './components/name';
import  Buttons from'./components/button1';
import About from './components/about';
import Interest from './components/interests';
import Footer from './components/footer';


export default function Card(){
    return(
        <div className='container'>
        <Image />
        <Name/>
        <Buttons/>
        <About/>
        <Interest />
        <Footer />
        </div>
    )
}


