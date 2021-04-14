import React from 'react';
import img1 from './images/dj.jpg';
import img2 from './images/producer.jpg';
import Image from 'react-bootstrap/Image'



function Mainpage() {
    return (

        <div class='row'>
            <div class='column'>
                <Image fluid>
                    <img src={img1} alt="" style={{ width: '45%' }} />
                    <img src={img2} alt="" />
                </Image>
            </div>
        </div>


    );
}



export default Mainpage;

