import React from 'react';
import Peking from '../images/peking.jpg'

// Homepage HTML
function HomePage() {

    return (
        <>
            <img className='front' src={Peking} alt="Peking" />
            <h2>Address:</h2>
            <p className="important">835 Beachway Dr. Indianapolis, IN 46224</p>
            <h2>Phone Number:</h2>
            <p className="important">317-390-1883</p>
            <h2>Hours:</h2>
            <p className="important">Monday - Saturday: 11:00 am - 9:30 pm</p>
            <p className="important"><b>Sunday: Closed</b></p>
        </>
    );
}

export default HomePage;