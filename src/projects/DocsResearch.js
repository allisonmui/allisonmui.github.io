import React, { useEffect } from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

// images
import researchCover from '../images/research-images/research-cover.png';
import researchProcess from '../images/research-images/research-process.png';
import stickies from '../images/research-images/research-stickies.png';
import kpi from '../images/research-images/research-kpi.png';
import persona from '../images/research-images/research-persona.png';
import videos from '../images/research-images/videos.png';
import language from '../images/research-images/language.png';
import zoom from '../images/research-images/zoom.png';


export default function Research() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <div className='nav-container marginCenter mt-40'>
      {/* header */}
      <Nav />
      <hr />

      <div className='text-container marginCenter mt-56'>
        <h1 className='mt-0 mb-0'>Creating a Regular Pulse on Our Docs Experience</h1>
        <p className='subtitle mt-8'>May 2021 - Ongoing</p>
      </div>

      <div className='image-container marginCenter mt-32'>
          <img src={researchCover} width="100%"/>
      </div>

      <div className='text-container marginCenter mt-32'>
        <p>To holistically evaluate the satisfaction and health of our docs, I created a 
          regular research method that the Docs team and many other teams at MongoDB have adopted ever since.</p>
      </div>

      <div className='image-container marginCenter mt-32'>
          <img src={researchProcess} width="100%"/>
          <p className='caption marginCenter mt-8'>My overall process for this project</p>
      </div>

      <div className='text-container marginCenter mt-80'>
        <h2>Project goal</h2>
        <div className='quote-container marginCenter mt-40 mb-40'>
          <p className='quote'>To develop a method to holistically measure the quality and satisfaction of our Docs experience.</p>
        </div>

        <p>This was important for many reasons:</p>
        <ul className='mt-8'>
          <li>To continue strategically growing the Docs roadmap.</li>
          <li className='mt-8'>To gain insight into prevalent pain points.</li>
          <li className='mt-8'>To measure a change of Docs performance.</li>
        </ul>

        <h2 className='mt-80'>Identifying our research methods</h2>
        <p className='mt-8'>To our surprise, no one in the industry had quite figured out the magic KPI for this yet. Working closely 
        with the Docs Product Manager, our first instinct was to talk to our users. We wanted to know just how users are feeling about 
        our docs. Are they effectively problem solving their issues with docs? Are they effectively learning new concepts? Are they 
        happy or disgruntled after their visit?</p>
        <p className='mt-16'>I then dove into the deep and thorough world of talking to users best practices and learned just how 
        detailed surveys and interviews should be. I even wrote up a list of {}
        <a className='link' target="_blank" href="https://medium.com/product-gals/the-art-of-surveys-the-collective-survey-best-practices-ed7a2bc90048?source=collection_home---4------5-----------------------">
        tips and techniques.</a></p>
        <p className='mt-16'>This led us to 2 main research methods to continue on with:</p>

        <div className='quote-container marginCenter mt-40 mb-40'>
          <p className='quote mt-0 mb-0'>1 Annual Survey</p>
          <p className='quote mt-8'>3 Quarterly User Interviews</p>
        </div>

        <p>Let’s focus on the annual survey.</p>

        <h2 className='mt-80'>Identifying a Clear-Cut Research Objective</h2>
        <p className='mt-8'>As with many things, I believe the key to effective 
        execution is effective preparation. For this, the first step to effective 
        preparation is to align on a specific, clear-cut research objective.</p>
        <p className='mt-16'>To identify this, I launched a series of design studios 
        with our main stakeholders. We knew that the outcome of this research should 
        impact three main streams: content, design, and product strategy. Each design 
        studio was conducted with a specific stream or its perspective in mind. As a 
        group, we brainstormed and discussed the following questions:</p>

        <div className='quote-container marginCenter mt-40 mb-40'>
          <p className='quote mt-0 mb-0'>What do you want to uncover with this research?</p>
          <p className='quote mt-16'>What next actions or artifacts do you desire as a result?</p>
        </div>
      </div>

      <div className='image-container marginCenter mt-32'>
          <img src={stickies} width="100%"/>
          <p className='caption marginCenter mt-8'>This was a result of our design studio. I facilitated a session with 8 stakeholders.</p>
      </div>

      <div className='text-container marginCenter mt-32'>
        <p>As a result, we nailed down a specific, clear-cut research objective and a defined set of research questions and desired outcomes.</p>

        <h2 className='mt-80'>Creating the Research Plan</h2>
        <p className='mt-8'>Based on our research objective, we had an ambitious goal: measuring overall satisfaction and quality of our docs. 
        We knew we wanted a big standard metric we could carry over time that measured overall quality and health.</p>
        <p className='mt-16'>Upon my research, I learned about the <a className='link' target="_blank" href="https://www.researchgate.net/publication/331088095_Beyond_Accuracy_What_Documentation_Quality_Means_to_Readers">Strimling Study</a> 
        - a study conducted by a technical writer on how to measure the quality of information. Strimling defined quality by 4 main characteristics: 
        accurate, relevant, easy to understand, and accessible. Along with the PM, we then thought about how these characteristics could relate to our 
        Docs and wrote definitions and user stories for each one. This created our standard quality KPI.</p>
      </div>

      <div className='image-container marginCenter mt-32'>
          <img src={kpi} width="100%"/>
          <p className='caption marginCenter mt-8'>Voila - our quality KPI.</p>
      </div>

      <div className='text-container marginCenter mt-32'>
        <p>The rest of our survey questions worked on expanding the details for the 4 quality characteristics.</p>
        <h2 className='mt-80'>Launching the Survey</h2>
        <p className='mt-8'>I was conducting a pretty large research effort that would have an impact on the entire department. Needless to say, it was important to have eyes on it other than just mine and the PM’s. To prepare, we worked through a 
        series of invaluable releases beforehand to catch any mistakes.</p>
        <p className='mt-8'>This included:</p>
        <ul className='mt-8'>
          <li>3 stakeholder reviews to confirm we were hitting our research objectives and eliminating any irrelevant questions.</li>
          <li className='mt-8'>1 pilot test with 17 internal employees to test survey fatigue and topics of confusion.</li>
          <li className='mt-8'>1 pilot test with 20 MongoDB users to evaluate the quality of responses.</li>
        </ul>
        <p className='mt-16'>We made adjustments after each release and that was it. Our survey went out in the wild and we reached our target sample size of 1000 participants.</p>
        
        <h2 className='mt-80'>Analyzing the results and following through</h2>
        <p className='mt-8'>Of course - The results were extremely interesting and insightful. After sharing with the entire education department, here’s a look at some of the work that came out as a result:</p>
      </div>

      <div className='image-container marginCenter mt-32'>
          <img src={persona} width="100%"/>
          <p className='caption marginCenter mt-8'>These results helped us understand our main audience - full stack developers - better.</p>

          <div className='mt-32'>
            <img src={videos} width="100%"/>
            <p className='caption marginCenter mt-8'>There were a high number of requests for adding videos in Docs. So we prioritized it!</p>
          </div>

          <div className='mt-32'>
            <img src={language} width="100%"/>
            <p className='caption marginCenter mt-8'>There were a high number of requests for providing examples in different programming languages. So we prioritized it!</p>
          </div>
      </div>

      <div className='text-container marginCenter mt-32'>
        <h2 className='mt-80'>Sharing across the company</h2>
        <p className='mt-8'>After the success others saw this research had on our department, many teams and other PMs reached out to me for advice on how to lead their own. I 
        then led a series of workshops to walk through my creation process, best practices in talking to users, and tips and techniques on how to get the most out of your questions 
        and responses.</p>
      </div>

      <div className='image-container marginCenter mt-32'>
          <img src={zoom} width="100%"/>
          <p className='caption marginCenter'>A clip from one of my knowledge sharing zoom workshops.</p>
      </div>

      <div className='text-container marginCenter mt-32'>
        <p>To this day, the Docs department and many others carve out room every year to conduct this research. It has led to a better team-wide understanding of our 
          audiences and a data-centric approach to product prioritization.</p>
      </div>
    </div>

    <div className='nav-container marginCenter mt-48 mb-48'>
        <hr />
        <div className='mt-32'>
            <p className='mb-0'>Thanks for reading!</p>
            <Link to='/work'><p className='mt-0 link'>Explore more work</p></Link>
        </div>
    </div>

    </>
  )
}