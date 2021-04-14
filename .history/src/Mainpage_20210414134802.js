import React from 'react';
import img1 from './images/dj.jpg';
import img2 from './images/producer.jpg';




function Mainpage() {
    return (

        <div class='row'>
            <div class='column'>
                <img src={img1} alt="" style={{ width: '43%', float: 'left', opacity: '0.8' }} />

            </div>

            <div class='column'>
                <img src={img2} alt="" style={{ width: '50%', float: 'right', opacity: '0.8' }} />
            </div>
        </div>



    );
}



export default Mainpage;

