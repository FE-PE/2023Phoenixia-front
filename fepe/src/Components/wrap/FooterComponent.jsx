import React from 'react';

export default function FooterComponent(){
   return (
      <footer id="footer">
         <div className="container">
            <div className='copyright'>
               <p>ⓒ Festival People X Likelion SCH 11th</p>
            </div>

            <div className='develop-by'>
                Develop By | 
                <a className='developers' href='https://github.com/Ogu1208'>김민아</a>
                <a className='developers' href='https://github.com/wwan13'>김태완</a>
                <a className='developers' href='https://github.com/SeoHaebhin'>서해빈</a>
                <a className='developers' href='https://github.com/YebinLeee'>이예빈</a>
                <a className='developers' href='https://github.com/Antraxmin'>임채민</a>
                <a className='developers' href='https://github.com/degull'>윤승현</a>
            </div>
            <div className='github-organizations'>
                Github Organizations | 
                <a className='github' href='https://github.com/FE-PE'>https://github.com/FE-PE</a>
            </div>

            <div className="logo">
               <img src="img/likelionsch_logo_long.png" alt="" />
            </div>
         </div>
      </footer>
   );
};

