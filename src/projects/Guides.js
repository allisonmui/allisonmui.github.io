import React, { useEffect } from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

// images
import guidesCover from '../images/guides-images/guides-cover.png';
import guidesProcess from '../images/guides-images/guides-process.png';
import guidesProblem from '../images/guides-images/guides-problem.png';
import guidesDaci from '../images/guides-images/guides-daci.png';
import persona from '../images/guides-images/guides-persona.png';
import ideas from '../images/guides-images/guides-ideas.png';
import screen1 from '../images/guides-images/guides-screen1.png';
import screen2 from '../images/guides-images/guides-screen2.png';
import metrics from '../images/guides-images/guides-metrics.png';


export default function Guides() {
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
            <h1 className='mt-0 mb-0'>Creating a Guided Setup Experience for Learners</h1>
            <p className='subtitle mt-8'>August 2021 - 3 months</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={guidesCover} width="100%"/>
        </div>

        <div className='text-container marginCenter mt-32'>
            <p>From our annual research, we learned the majority of MongoDB users visit 
                Docs to get guidance on a specific task. We also learned that 50% of our 
                users identify as learners.</p>
            <p className='mt-16'>At the same time, we also saw MongoDB Guides rise to the 5th 
            most visited property in all of our documentation. Why? Even though this part of the 
            site hadn’t been touched in 5 years, this happened because it was giving the people 
            the task-centric content they needed - even if it was at the smallest adequate level (trust 
            me - our users always gave us an earful during user interviews). But, to point out the obvious, 
            ‘smallest adequate level’ does not cut it.</p>
            <p className='mt-16'>To create an intentional strategy tailored for our learners and 
            optimize on the organic growth of the property, I led the transformation of our static Guides 
            page to a step by step learning experience.</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={guidesProcess} width="100%"/>
            <p className='caption marginCenter mt-8'>My overall process for this project</p>
        </div>

        <div className='text-container marginCenter mt-80'>
            <h2>Understanding the problem</h2>
            <p className='mt-8'>Originally, this project was framed as a quick and dirty redesign - 
            however, I made an effort to understand exactly what was happening around this Guides page.</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={guidesProblem} width="100%"/>
            <p className='caption marginCenter mt-8'>Some key takeaways from user interviews and Google Analytics.</p>
        </div>

        <div className='text-container marginCenter mt-40'>
            <div className='quote-container marginCenter'>
                <p className='quote mt-40 mb-0'>Due to a lack of owner and content vision, the guides property was abandoned and 
                delivers an outdated mixed bag of helpful and unhelpful content for users to figure out on their own.</p>
                <p className='subtitle mt-8'>The problem</p>
            </div>
            <p className='mt-40'>The team quickly realized that a fresh coat of paint wouldn’t be enough to hide the cracks underneath.</p>
            <div className='quote-container marginCenter'>
                <p className='quote mt-40 mb-0'>To create a guided and delightful experience for our learners that sets them up for success 
                and drives influence towards MongoDB Atlas. </p>
                <p className='subtitle mt-8'>The project goal</p>
            </div>
        </div>

        <div className='text-container marginCenter mt-80'>
            <h2>Driving the 3 parts</h2>
            <p className='mt-8'>Moving into the next phase of the project, I split our team into 3 main objectives: content strategy, design, and maintenance.</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={guidesDaci} width="100%"/>
            <p className='caption marginCenter mt-8'>A DACI rundown of the main stakeholders presented during project kickoff.</p>
        </div>

        <div className='text-container marginCenter mt-80'>
            <h4>Content Strategy</h4>
            <p className='mt-8'>Many of the current pain points were due to a lack of content strategy. It was extremely important to name a lead that would be 
            responsible for identifying and driving an intentional content approach.</p>
            <p className='mt-16'>The director soon identified someone he trusted to lead the content vision on guides. Next, I led the 3 of us through a series of 
            brainstorming sessions to kickoff the content strategy objective.</p>
            <p className='mt-16'>We discussed topics such as:</p>
            <ul className='mt-16'>
                <li>What content should live on Guides?</li>
                <li className='mt-8'>How much guidance and opinion should we provide the user?</li>
                <li className='mt-8'>What’s the difference between guides, tutorials, and how-tos?</li>
                <li className='mt-8'>Should the guides have a standard format?</li>
                <li className='mt-8'>What should the tone of voice be?</li>
                <li className='mt-8'>Are we teaching concepts? Or demonstrating tasks?</li>
            </ul>
            <div className='quote-container marginCenter mt-40 mb-40'>
                <p className='quote mb-0'>Guides specifically houses step by step procedures on how to complete specific getting started with MongoDB tasks.</p>
                <p className='subtitle mt-8'>The latest version of the content strategy</p>
            </div>
            <p className='mt-16'>After identifying the content strategy, this team then moved into completing a content audit, updating procedures, and writing net-new guides.</p>

            <h4 className='mt-80'>Design</h4>
            <p className='mt-8'>Moving in parallel with the content worked, I kicked off the design process.</p>
            <p className='mt-16'>Luckily, the content strategy was identified, giving me a direction to move off of.</p>
            <p className='mt-16'>I started off with primary research. Because 50% of our users identify as learners and we honed in on a content strategy around getting started, I 
            really worked to understand how learners were currently getting started with MongoDB and what pain points existed. Some key takeaways were:</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={persona} width="100%"/>
        </div>

        <div className='text-container marginCenter mt-32'>
            <p className='mt-8'>Afterwards, I dove into sketching ideas and evaluating different concepts. I explored ideas such as how to clarify the ‘end of getting started,’ how 
            to provide a sense of guidance, or how to deliver learning materials in different methods.</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={ideas} width="100%"/>
            <p className='caption marginCenter mt-8'>Obligatory sketching clips - yes, I actually did these during the project and not after 😅</p>
        </div>

        <div className='text-container marginCenter mt-32'>
            <p>After several rounds of feedback, I decided to narrow in on 2 concepts:</p>
            <ul className='mt-8'>
                <li>A chapter by chapter learning approach</li>
                <li className='mt-8'>Exchangeable learning blocks</li>
            </ul>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={screen1} width="100%"/>
            <img src={screen2} width="100%" className='mt-32'/>
        </div>

        <div className='text-container marginCenter mt-80'>
            <h4>Maintenance Planning</h4>
            <p className='mt-8'>To maintain the health of the property, a key part of this project was identifying 
            a maintenance plan. Other teammates wanted to contribute to the Guides corpus, which was amazing, but we 
            wanted to make sure we didn’t repeat old mistakes of mixed and unmaintained content. I pulled together a 
            working group of key content players for again, a series of brainstorming sessions.</p>
            <p className='mt-16'>As a result, we aligned on:</p>
            <ul className='mt-8'>
                <li>A writing process for future net-new guides.</li>
                <li className='mt-8'>An intake process for guides that previously lived on other MongoDB sites.</li>
                <li className='mt-8'>A yearly review cycle to ensure all content was up to date.</li>
            </ul>

            <h2 className='mt-80'>Measuring success</h2>
            <p className='mt-8'>To measure success towards our project goal, I ensured the measurement of a couple KPIs.</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={metrics} width="100%"/>
            <p className='caption marginCenter mt-8'>This page has only recently been implemented and has not yielded statistically significant results.</p>
        </div>
    </div>

    <div className='nav-container marginCenter mt-48 mb-48'>
        <hr />
        <div className='mt-32'>
            <p className='mb-0'>Thanks for reading!</p>
            <Link to='/'><p className='mt-0 link'>Explore more work</p></Link>
        </div>
    </div>
    </>
  )
}