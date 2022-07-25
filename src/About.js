import React, { useEffect } from 'react';
import Nav from './Nav';
import me from './images/me.png';

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <div>
        <div className='nav-container marginCenter mt-40'>
            {/* header */}
            <Nav />
            <hr />

            <div className='mt-40 mb-56'>
              <img src={me} width="340px" />
              <div className='text-container mt-24'>
                <p>Hi there! Thank you for exploring my work.</p>
                <p className='mt-16'>I’m Allison. I’m currently a product designer at MongoDB 
                in charge of designing the Documentation and Community experience.</p>
                <p className='mt-16'>In my free time, I’m passionate about building my own product, 
                Sidekick, to help others take control of their time and put it towards their dreams.</p>
                <p className='mt-16'>I love to run, cook, do yoga, and more recently surf 🏄‍♀️. 
                  Want to get in touch? Email me at <a href="mailto:allisonmui9@gmail.com" className='link'>allisonmui9@gmail.com.</a></p>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
