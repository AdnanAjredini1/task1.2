import React from 'react';
import img from '../assets/gojo.jpg';

export default function Card({ date, btnName, text, color }) {
  return (
    <div className="card">
      <p style={{fontSize:'0.9rem'}}>{date}</p>
      <div style={{ display: "flex", flexDirection: "row", gap: '20px', alignItems: 'center' }}>
        <p style={{backgroundColor:color,paddingTop:'1px',paddingInline:'18px',borderRadius:'5px',color:'white'}}>{btnName}</p>
        <img src={img} alt="User Avatar" style={{ width: '37px', height: '37px' }} />
        <p>Kevin Joe</p>
      </div>
      <p style={{color:'#A0A0A0'}}>{text}</p>
      <button>Download</button>
    </div>
  );
}