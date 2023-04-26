import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';

export default function WrapComponent(){
   return (
      <div id="wrap">
         <HeaderComponent/>
         <MainComponent/>
      </div>
   );
};

/* 라우터 설치 & 코드구현 */