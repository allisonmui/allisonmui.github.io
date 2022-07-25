import React, { useEffect } from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

// images
import sidekickCover from '../images/sidekick-images/sidekick-cover.png';
import sidekickMeme from '../images/sidekick-images/sidekick-meme.png';
import sidekickProblem from '../images/sidekick-images/sidekick-problem.png';
import sidekickProcess from '../images/sidekick-images/sidekick-process.png';
import sidekickMVP from '../images/sidekick-images/sidekick-mvp.png';
import sidekickFeedback from '../images/sidekick-images/sidekick-feedback.png';
import hq from '../images/sidekick-images/sidekick-hq.png';
import calendar from '../images/sidekick-images/sidekick-calendar.png';
import blocklist from '../images/sidekick-images/sidekick-blocklist.png';

export default function Sidekick() {
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
            <h1 className='mt-0 mb-0'>Eliminating Digital Distractions and Promoting Deep Work</h1>
            <p className='subtitle mt-8'>April 2021 - Ongoing</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={sidekickCover} width="100%"/>
        </div>

        <div className='text-container marginCenter mt-32'>
            <p>Today’s age is riddled with distractions and technologies fighting for our attention. While these technologies 
                serve their benefits, they create a problem when they prevent people like you and I from reaching, albeit even 
                chasing our potential. <a target="_blank" href="https://thesidekick.app/" className='link'>Sidekick</a> is a productivity tool that eliminates your distractions and conducts your focus sessions. 
                This is my personal project.</p>
            <h2 className='mt-80 mb-0'>Defining the problem</h2>
            <p className='mt-8'>To paint you a story, this project all started with this moment:</p>
            <div className='quote-container marginCenter mt-40'>
                <p className='quote'>Just like any other day, I woke up at 11AM - groggy eyes, 
                messy hair, still in bed - and immediately opened my laptop and typed Netflix.com (I actually only typed N, the rest was autofilled). 
                I turned on my next episode of Parks and Recreation. Falling to the autoplay feature, I watched a couple more episodes. </p>
            </div>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={sidekickMeme} width="100%"/>
        </div>

        <div className='text-container marginCenter mt-32'>
            <div className='quote-container marginCenter'>
                <p className='quote'>Then, my significant other called me. He had recently been bitten by the productivity bug and was always spewing 
                his latest learnings at me. I usually rolled my eyes and laughed it off, but this one quote really hit me:</p>
                <p className='quote mt-40 grayColor'>“There are 86,400 seconds in a day. Each second, you either grow or decay. Are you growing or are you decaying?”</p>
                <p className='quote mt-40'>A quick look in the mirror yielded my answer - I was on my 6th episode of Parks just that morning. It was clear - I was decaying.</p>
            </div>
        </div>

        <div className='text-container marginCenter mt-40'>
            <p>To be honest, I’m just an everyday person - I would say maybe on the more productive side of the spectrum. So why was this happening? I saw my friends and my family 
                also glued to their computers and their screens. Why was that happening?</p>
            <p className='mt-16'>This made me obsessed - I too got bit by the productivity bug. I dove into learning about productivity, the attention economy, read books about focus, 
            reviewed Tristan Harris’ famous presentation, and more. My significant other and I talked to our friends and our family about what they were going through and if they even cared.</p>
            <p className='mt-16'>We coined today’s age - The Golden Age of Distractions. This was our problem area.</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={sidekickProblem} width="100%"/>
        </div>

        <div className='text-container marginCenter'>
            <h2 className='mt-80 mb-0'>Concept Evaluation</h2>
            <p className='mt-8'>We dove into ideation sessions on how to address each aspect of the Golden Age. We talked about ideas such as site blockers, focus timers, pomodoro, focus music, 
            community, accountability, etc, etc, etc. We narrowed down our ideas and eventually sketched the ones we liked best. Just like many newbie founders on the internet, I brought the 
            ideas back to mom and dad to hear what they thought.</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={sidekickProcess} width="100%"/>
            <p className='caption marginCenter mt-8'>We explored concepts using the double diamond approach - diverge, diverge, diverge, converge, converge, converge.</p>
        </div>

        <div className='text-container marginCenter'>
            <h2 className='mt-80 mb-0'>Lo-Fi to MVP</h2>
            <p className='mt-8'>After a bunch of feedback and strategy, we narrowed in on the idea of a site blocker that allows for deep work sessions. Taking what we learned from talking to our friends, 
            we brainstormed the different components and features we could add to our site blocker. To create an MVP, we then plotted the components on an impact vs. effort prioritization matrix.</p>
        </div>
        
        <div className='image-container marginCenter mt-32'>
            <img src={sidekickMVP} width="100%"/>
            <p className='caption marginCenter mt-8'>Thank goodness we prioritized - or else we would’ve never created an MVP!</p>
        </div>

        <div className='text-container marginCenter mt-32'>
            <p>From here, we split roles. He took on the role of the engineer while I took on the role of the designer. The MVP was built and we passed it around to our closest friends for feedback.</p>
        </div>

        <div className='text-container marginCenter'>
            <h2 className='mt-80 mb-0'>Private Beta to Public Beta</h2>
            <p className='mt-8'>Sidekick has been a continuous cycle of fun and improvement. I decided to first launch Sidekick in Private Beta in April 2021. This allowed me to control the quality and quantity 
            of feedback, thus resulting in a tighter feedback loop and loyal customer base. If you’re interested in learning more, I wrote up my process and learnings in this <a target="_blank" href="https://www.indiehackers.com/post/i-launched-invite-only-for-8-months-here-s-why-i-like-it-3bda7e6986" className='link'>article</a>.</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={sidekickFeedback} width="100%"/>
            <p className='caption marginCenter mt-8'>A quick feedback loop allowed for detailed suggestions and reactions to proposed improvements. Here’s one of our exchanges.</p>
        </div>

        <div className='text-container marginCenter mt-32'>
            <p>After 8 months, we grew our user base from 2 to 100, released 12 big features, and resolved too many to count bugs and UX/UI improvements. When January 1st, 2022 hit, 
                I decided to transition Sidekick to public beta.</p>
        </div>

        <div className='image-container marginCenter mt-32'>
            <img src={hq} width="100%"/>
            <img src={calendar} width="100%" className='mt-32'/>
            <img src={blocklist} width="100%" className='mt-32'/>
        </div>

        <div className='text-container marginCenter'>
            <h2 className='mt-80 mb-0'>What’s Next</h2>
            <p className='mt-8'>When it comes to what’s next for Sidekick, there is so much I’m excited for. I’m still in shock that it’s not just us using Sidekick - it’s people all around the 
            world. I can’t even explain how it feels when I do a user interview. We have many plans and feedback points to make action on. What’s coming up in the short term is:</p>
            <ul className='mt-8'>
                <li>Building a desktop app</li>
                <li className='mt-8'>Rebranding for a more unique name and better SEO</li>
                <li className='mt-8'>Implementing monetization</li>
                <li className='mt-8'>Building a public dashboard </li>
            </ul>
            <p className='mt-16'>Wish us luck 😁</p>
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