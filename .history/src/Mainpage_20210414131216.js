import React from 'react';
import img1 from './images/dj.jpg';
import img2 from './images/producer.jpg';




function Mainpage() {
    return (

        <div class='row'>
            <div class='column'>
                <img src={img1} alt="" style={{ float: 'left', width: '1800px', height: '300px', }} />
                <img src={img2} alt="" style={{ width: '50%', float: 'right' }} />
            </div>
        </div>


    );
}



export default Mainpage;

