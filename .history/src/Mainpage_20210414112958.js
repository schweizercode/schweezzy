import React from 'react';
import DJ from './images/Dj.jpg';
import Producer from './images/Producer.jpg';



function Mainpage() {
    return (
        <>
            <div>
                <DJ src={DJ} alt="dj" />
            </div>
            <div>
                <Producer src={Producer} alt="producer" />
            </div>
        </>
    );
}



export default Mainpage;

