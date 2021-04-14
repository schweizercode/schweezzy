import React from 'react';
import img1 from './images/dj.jpg';
import img2 from './images/producer.jpg';



function Mainpage() {
    return (

        <div class='row'>
            <div class='column'>
                <img src={img1} alt="" style={{ width: '40%' }} />
                <img src={img2} alt="" />
            </div>
        </div>


    );
}



export default Mainpage;

