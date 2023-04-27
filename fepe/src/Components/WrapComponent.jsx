import React from 'react';

import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FoodTruckComponent from './wrap/category/FoodTruckComponent';
import TimeTableComponent from './wrap/category/TimeTableComponent';
import ClubComponent from './wrap/category/ClubComponent';
import MapComponent from './wrap/category/MapComponent';





export default function WrapComponent(){
   return (
      <div id="wrap">



         <HeaderComponent/>
         <MainComponent/>
         <TimeTableComponent/>
         <FoodTruckComponent/>
         <ClubComponent/>
         <MapComponent/>
      </div>
   ); 
};

/* 라우터 설치 & 코드구현 */