import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className='flex'>
            <div><h2 className='mt-0 mb-0'>Allison Mui</h2></div>
            <div className='ml-24'>
                <Link to='/' className='nav-link'>
                    <p>Work</p>
                </Link>
            </div>
            
            <div className='ml-24'>
                <Link to='/publications' className='nav-link'>
                    <p>Publications</p>
                </Link>
            </div>
            
            <div className='ml-24'>
                <Link to='/about' className='nav-link'>
                    <p>About</p>
                </Link>
            </div>
        </div>
        </>
    )
};