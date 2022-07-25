import React, { useEffect } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

// images
import docsNeeds from './images/pub-images/docs-hierarchy.png';
import pmpd from './images/pub-images/10tips-pm-pd.png';
import feedback from './images/pub-images/5-feedback.png';
import deliverables from './images/pub-images/product-deliverables.png';
import act1 from './images/pub-images/act-1.png';
import act3 from './images/pub-images/act-3.png';

export default function Publications() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <div className='nav-container marginCenter mt-40 mb-40'>
        {/* header */}
        <Nav />
        <hr />

        <div className='flex column-gap mt-48'>
            <div>
                <a target="_blank" className='card-link' href="https://uxdesign.cc/10-tips-to-strengthen-your-product-design-product-management-relationship-7be3a2321fab">
                    <img src={pmpd} width='100%'/>
                    <p className='subtitle mt-16 mb-0'>November 5, 2020</p>
                    <p className='bold mt-0 mb-0'>10 tips to strengthen your Product Design and Product Management relationship</p>
                </a>
            </div>

            <div>
                <a target="_blank" className='card-link' href="https://medium.com/product-gals/5-better-ways-for-product-to-provide-design-feedback-e5ba40de6e4">
                    <img src={feedback} width='100%'/>
                    <p className='subtitle mt-16 mb-0'>June 10, 2021</p>
                    <p className='bold mt-0 mb-0'>5 Better Ways for Product to Provide Design Feedback</p>
                </a>
            </div>
        </div>

        <div className='flex column-gap mt-80'>
            <div>
                <a target="_blank" className='card-link' href="https://medium.com/product-gals/applying-maslows-hierarchy-of-needs-to-documentation-aa055ba6526c">
                    <img src={docsNeeds} width='100%'/>
                    <p className='subtitle mt-16 mb-0'>May 6, 2021</p>
                    <p className='bold mt-0 mb-0'>Applying Maslow’s Hierarchy of Needs to Documentation</p>
                </a>
            </div>

            <div>
                <a target="_blank" className='card-link' href="https://medium.com/product-gals/how-product-deliverables-bolster-the-success-of-each-others-work-fcc866681385">
                    <img src={deliverables} width='100%'/>
                    <p className='subtitle mt-16 mb-0'>December 13, 2021</p>
                    <p className='bold mt-0 mb-0'>How product deliverables bolster the success of each others work</p>
                </a>
            </div>
        </div>
        
        <div className='flex column-gap mt-80'>
            <div>
                <a target="_blank" className='card-link' href="https://medium.com/product-gals/the-art-of-surveys-the-collective-survey-best-practices-ed7a2bc90048">
                    <img src={act1} width='100%'/>
                    <p className='subtitle mt-16 mb-0'>April 27, 2021</p>
                    <p className='bold mt-0 mb-0'>The Art of Surveys: The Collective Survey Best Practices</p>
                </a>
            </div>

            <div>
                <a target="_blank" className='card-link' href="https://medium.com/product-gals/the-art-of-surveys-analyzing-data-to-improve-the-docs-experience-6d8129ab9378">
                    <img src={act3} width='100%'/>
                    <p className='subtitle mt-16 mb-0'>January 10, 2022</p>
                    <p className='bold mt-0 mb-0'>The Art of Surveys: Analyzing Data to Improve the Docs Experience</p>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}