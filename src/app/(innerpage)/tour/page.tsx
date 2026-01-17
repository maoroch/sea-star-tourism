import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Tour from '../../Components/Tour/Tour';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.webp"
                Title="Tours"
            ></BreadCumb>    
            <Tour></Tour>       
    </div>
  );
};

export default page;