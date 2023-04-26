import React from 'react';

export default function MainComponent(){
   return (
      <main id="main">   
        <section>
            <article className="on">
                <div className="inner">
                    <div className="pic">
    
                    </div>

                    <div className="txt">
                        <h2>아티스트명</h2>
                        <p>설명/소개</p>
                    </div>  
                </div>
            </article>

            <article>
                <div className="inner">
                    <div className="pic">
                        
                    </div>

                    <div className="txt">
                        <h2>아티스트명</h2>
                        <p>설명/소개</p>
                    </div>
                </div>
            </article>

            <article>
                <div className="inner">
                    <div className="pic">
                        
                    </div>

                    <div className="txt">
                        <h2>아티스트명</h2>
                        <p>설명/소개</p>
                    </div>
                </div>
            </article>

        </section>    

        <div className="btnPrev">
            <span>PREV</span>
        </div>
        <div className="btnNext">
            <span>NEXT</span>
        </div>

      </main>  
   );
};
