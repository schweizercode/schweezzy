import React from 'react';
import Image from './images/Dj.jpg';
import Image from './images/Producer.jpg';



function Mainpage() {
    return (
        <>
            <div>
                <Image src={DJ} alt="dj" />
            </div>
            <div>
                <Image src={Producer} alt="producer" />
            </div>
        </>
    );
}



export default Mainpage;

