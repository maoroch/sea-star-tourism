'use client';
import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Tour from '../../Components/Tour/Tour';

const page = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#1ca8cb', height: '90px', width: '100%'}}></div>
{/*         <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.webp"
                Title="Tour"
            ></BreadCumb> 
            */}   
            <Tour></Tour>       
    </div>
  );
};

export default page;