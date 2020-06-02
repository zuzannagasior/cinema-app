import React from 'react';
import emptyChair from '../../assets/emptychair.png';
import taken2 from '../../assets/taken2.png';
import yourchair from '../../assets/yourchair.png';

const CinemaHall = () => {
  return (
    <div>
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={emptyChair} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={emptyChair} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={emptyChair} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={taken2} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={emptyChair} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={taken2} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={taken2} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={emptyChair} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={emptyChair} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={taken2} alt="" />
        <img style={{width: "80px", height: "auto", paddingLeft: "24px"}} src={yourchair} alt="" />
    </div>
  );
}

export default CinemaHall;