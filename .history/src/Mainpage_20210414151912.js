import React from 'react';
import img1 from './images/dj.jpg';
import img2 from './images/producer.jpg';




function Mainpage() {
    return (

        <div class='container-fluid'>
            <div class='row'>
                <div class='"col-md-3 col-sm-6 small-screen-margin-top"'>
                    <div class='dj'>
                        <img src={img1} alt="" style={{ width: '1000px', float: 'left', opacity: '0.8' }} />
                    </div>
                </div>

                <div class='"col-md-3 col-sm-6 small-screen-margin-top"'>
                    <img src={img2} alt="" style={{ width: '1', float: 'right', opacity: '0.8' }} />
                </div>
            </div>
        </div>



    );
}



export default Mainpage;

