import React from 'react';
import img1 from './images/dj.jpg';
import img2 from './images/producer.jpg';
import img3 from './images/backimage.jpg';



function Mainpage() {
    return (

        <div class="hero-image">
            <div class="hero-text">
                <img src={img3} alt=''></img>
                <h1 style={{ fontSize: '50px' }}>schweezzy</h1>
                <p>All About music</p>
            </div>
        </div>



        // <div class='container-fluid'>
        //     <div class='row'>
        //         <div class='"col-md-3 col-sm-6 small-screen-margin-top"'>
        //             <div class='dj'>
        //                 <h3> schweezzy</h3>
        //                 <span> DJ</span>
        //                 <img src={img1} alt="" style={{ width: '1000px', float: 'left', opacity: '0.8' }} />
        //             </div>
        //         </div>

        //         <div class='"col-md-3 col-sm-6 small-screen-margin-top small-screen-margin-bottom"'>
        //             <img src={img2} alt="" style={{ width: '1', float: 'right', opacity: '0.8' }} />
        //         </div>
        //     </div>
        // </div>



    );
}



export default Mainpage;

