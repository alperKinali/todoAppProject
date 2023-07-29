import React from 'react';

function PageTitle({children,  ...rest}) {
  return <p style={{textAlign:"center",marginTop:"20px" ,fontSize:"20px" , fontFamily:"Poppins"}} {...rest}>{children}</p>
    
}

export default PageTitle