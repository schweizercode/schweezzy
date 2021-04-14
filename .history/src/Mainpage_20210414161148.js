import React from 'react';
import img1 from './images/dj.jpg';
import img2 from './images/producer.jpg';
import img3 from './images/backimage.jpg';



function Mainpage() {
    return (

        <div class="container">
            <div class="card img-fluid" style="width:500px">
                <img class="card-img-top" src={img1} alt="Card image" style={{ width: '100 %' }} >
                    <div class="card-img-overlay">
                        <h4 class="card-title">schweezzy</h4>
                        <p class="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <a href="#" class="btn btn-primary">See Profile</a>
                    </div>

            </div >

            </div>

    );
}

export default Mainpage;


        // <div class='container'>
                //     <h2> schweezzy</h2>
        //     <p> DJ </p>
        //     <img src={img1} alt="" style={{ width: '1000px', float: 'left', opacity: '0.8' }} />
        // </div>
        //         </div >

                    {/* <div class='"col-md-3 col-sm-6 small-screen-margin-top small-screen-margin-bottom"'>
                    <img src={img2} alt="" style={{ width: '1', float: 'right', opacity: '0.8' }} />
                </div> */}
