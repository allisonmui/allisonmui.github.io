import React, { useEffect } from 'react';
import Nav from './Nav';
import SidekickLanding from './images/landing-images/Sidekick-Landing-Cover.png'
import GuidesLanding from './images/landing-images/Guides-Landing-Cover.png'
import ResearchLanding from './images/landing-images/Research-Landing-Cover.png'
import { Link } from 'react-router-dom';

export default function Landing() {
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
        </div>
        {/* landing tiles */}
        <Link to='/sidekick' className='card-link'>
            <div className='text-container marginCenter mt-48'>
                <h3 className='mt-0 mb-0'>Eliminating Digital Distractions and Promoting Deep Work</h3>
                <p className='subtitle mt-8 mb-0'>April 2021 - Ongoing</p>
                <img src={SidekickLanding} width="100%" className='mt-24'/>
            </div>
        </Link>

        <Link to='/guides' className='card-link'>
            <div className='text-container marginCenter mt-48'>
                <h3 className='mt-0 mb-0'>Creating a Guided Setup Experience for Learners</h3>
                <p className='subtitle mt-8 mb-0'>August 2021 - 3 months</p>
                <img src={GuidesLanding} width="100%" className='mt-24'/>
            </div>
        </Link>

        <Link to='/docsresearch' className='card-link'>
            <div className='text-container marginCenter mt-48 mb-56'>
                <h3 className='mt-0 mb-0'>Creating a Regular Pulse on Our Docs Experience</h3>
                <p className='subtitle mt-8 mb-0'>May 2021 - Ongoing</p>
                <img src={ResearchLanding} width="100%" className='mt-24'/>
            </div>
        </Link>

    </div>
    </>
  )
};
