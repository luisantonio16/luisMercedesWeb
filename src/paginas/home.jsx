import React, { useState } from 'react'


function Home() {

    const [show, setShow] = useState(false);

    
    return (
        <>
        <div className='home-titulos'> 
              <h1>Luis Mercedes Web</h1>
              <p>Desarrollador de Software</p>
        </div>
           
        </>
    );

}
export default Home