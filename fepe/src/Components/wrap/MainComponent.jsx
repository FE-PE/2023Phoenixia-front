import React from 'react';

export default function MainComponent(){
   return (

      <main id="main">   
        <div className="container">
            <div className="gap">
                <div className="wrap">  
                    <div className="arrow">
                        <button><img src="img/" alt="" /></button>
                    </div>
                    <div className="content">   
                        <ul>
                            <li>
                                <div className="col-gap">
                                    <li><img src="img/1.png" alt="" /></li>
                                        <div className="col-wrap" tabIndex="0">
                                            <ul>
                                                <li><img src="img/portfolio-item26.jpg" alt="" /></li>
                                                <li><h4>ARTIST</h4></li>
                                                <li><p>fdfd</p></li>
                                            </ul>
                                        </div>
                                </div>
                            </li>

                            <li>
                                <div className="col-gap">
                                    <li><img src="img/2.png" alt="" /></li>
                                        <div className="col-wrap" tabIndex="0">
                                            <ul>
                                                <li><img src="img/portfolio-item26.jpg" alt="" /></li>
                                                <li><h4>ARTIST</h4></li>
                                                <li><p>fdfd</p></li>
                                            </ul>
                                        </div>
                                </div>
                            </li>

                            <li>
                                <div className="col-gap">
                                    <li><img src="img/3.png" alt="" /></li>
                                        <div className="col-wrap" tabIndex="0">
                                            <ul>
                                                <li><img src="img/portfolio-item26.jpg" alt="" /></li>
                                                <li><h4>ARTIST</h4></li>
                                                <li><p>fdfd</p></li>
                                            </ul>
                                        </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="pager">

                    </div>
                </div>
            </div>
        </div>
        

      </main>  
   );
};
