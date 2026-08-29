import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import avatarImg from "./assets/avatar.png";
import aboutImg from "./assets/about.jpeg";
import AheroImg from "./assets/Ahero.png";
import AheroCover from "./assets/Ahero-cover.png";
import AheroPOCImg from "./assets/Ahero-POC.png";
import AheroTestimonialsImg from "./assets/Ahero-testimonials.png";
import MDBImg from "./assets/MDB.png";
import MDBCoverImg from "./assets/mdb-cover.png";
import RPImg from "./assets/RP.png";
import RPCoverImg from "./assets/RP-cover.png";
import RPEnforceImg from "./assets/RP-enforce.png";
import RPSafeImg from "./assets/RP-safe.png";
import RPDetectImg from "./assets/RP-detect.png";
import SCImg from "./assets/SC.png";
import SCCoverImg from "./assets/SC-cover.png";
import SCPictureImg from "./assets/SC-picture.png";
import SCFindingsImg from "./assets/SC-findings.png";
import aboutOneImg from "./assets/1.jpeg";
import aboutTwoImg from "./assets/2.jpeg";
import aboutThreeImg from "./assets/3.jpeg";
import aboutFourImg from "./assets/4.jpeg";
import aboutFiveImg from "./assets/5.jpeg";
import "./App.css";

const projectPalette = ["#d7d2d1", "#cfc7d1", "#e4dbd2", "#d9d9d7"];
const randomProjectColor =
  projectPalette[Math.floor(Math.random() * projectPalette.length)];
const securityCenterVisualColors = ["#dfeaf8", "#cfc7d1", "#e4dbd2"];
const aheroVisualColors = ["#dfeaf8", "#e9e2de", "#cfc7d1"];
const aheroThumbnailColor = "#cfc7d1";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <NavLink to="/resume" className="footer-link">
        Resume
      </NavLink>
      <a href="mailto:allisonmui9@gmail.com" className="footer-link">
        Contact me: allisonmui9@gmail.com
      </a>
    </footer>
  );
}

const projectCards = [
  {
    id: 1,
    title: "Atlas Resource Policies",
    description: "Guardrails to help enterprises deploy safely and securely.",
    path: "/work/atlas-resource-policies",
    color: "#d7d2d1",
    image: RPImg,
  },
  {
    id: 2,
    title: "Ahero",
    description:
      "A tool for everyday people to fight distractions and chase their dreams.",
    path: "/work/ahero",
    color: "#cfc7d1",
    image: AheroImg,
  },
  {
    id: 3,
    title: "Atlas Security Center",
    description:
      "A dashboard to help enterprises understand their security posture and make intentional decisions to improve.",
    path: "/work/atlas-security-center",
    color: securityCenterVisualColors[0],
    image: SCImg,
  },
  {
    id: 4,
    title: "MongoDB",
    description: "Upcoming 2026 0->1 releases",
    path: "/work/mongodb",
    color: "#dfeeea",
    image: MDBImg,
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="portfolio-shell">
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">
          My work
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>

      <header className="top-bar">
        <div className="title-block">
          <h1>Product</h1>
          <h1 className="accent">Designer</h1>
        </div>

        <div className="avatar-wrap" aria-label="Profile picture">
          <img className="profile-photo" src={avatarImg} alt="Profile" />
        </div>

        <div className="bio-block">
          <p>
            New York–based product designer specializing in complex digital
            experiences and taking ideas from 0→1.
          </p>
          <div className="about-me-row">
            <span>About Me</span>
            <button
              type="button"
              className="circle-button small"
              aria-label="About me"
              onClick={() => navigate("/about")}
            >
              →
            </button>
          </div>
        </div>
      </header>

      <main className="portfolio-grid">
        {projectCards.map((project) => (
          <article
            key={project.id}
            className="project-card"
            style={{ background: project.color }}
            aria-label={project.title}
            role={project.path ? "link" : undefined}
            tabIndex={project.path ? 0 : undefined}
            onClick={() => project.path && navigate(project.path)}
            onKeyDown={(event) => {
              if (
                project.path &&
                (event.key === "Enter" || event.key === " ")
              ) {
                event.preventDefault();
                navigate(project.path);
              }
            }}
          >
            <div
              className="project-thumbnail"
              style={{ background: project.color }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="thumbnail-image"
                />
              ) : null}
              <div className="project-overlay">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
            <button
              type="button"
              className="circle-button"
              aria-label={`View ${project.title}`}
            >
              →
            </button>
          </article>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}

function AtlasResourcePoliciesPage() {
  return (
    <div className="page-shell">
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">
          My work
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>

      <main className="case-study-page">
        <header className="case-study-header">
          <h1>Atlas Resource Policies</h1>
          <p>2024 — Ongoing</p>
          <p className="case-study-intro">
            Atlas Resource Policies are guardrails that help enterprises deploy
            clusters in safe, compliant environments. As the lead designer, I
            partnered closely with Product and Engineering to take the product
            from idea to Private Preview, Public Preview, and ultimately GA in
            2025.
          </p>
        </header>

        <div className="case-study-visual case-study-cover-visual">
          <img
            src={RPCoverImg}
            alt="Atlas Resource Policies case study"
            className="case-study-image"
          />
        </div>

        <div className="case-study-content">
          <section>
            <h2>Problem</h2>
            <p>
              To meet compliance and governance needs, customers often have to
              build their own workarounds or go through lengthy internal reviews
              just to use MongoDB. This creates friction that can discourage
              customers from adopting MongoDB, onboarding new workloads, or
              renewing their annual contracts.
            </p>
          </section>
          <section>
            <h2>Process</h2>
            <p>
              To understand the current state, I partnered with UX Research to
              interview enterprises in highly regulated industries. This
              research led to three governing tenets:
            </p>
            <div className="tenet-quote-list">
              <blockquote>
                Enforce once, enforce everywhere <br />
                Enable safe self-service <br />
                Detect and guide, don&apos;t disrupt
              </blockquote>
            </div>

            <p>
              Guided by these tenets, I moved into concept ideation, iteration,
              and evaluation.
            </p>

            <h3>Enforce once, enforce everywhere</h3>
            <p>
              Create a consistent experience across all interfaces: <br />
              API, CLI, Terraform, and the UI.
            </p>
            <div className="case-study-visual case-study-enforce-visual">
              <img src={RPEnforceImg} alt="" className="case-study-figure" />
            </div>

            <h3>Enable safe self-service</h3>
            <p>
              Give developers the freedom to move quickly within clear
              organizational guardrails - reducing manual reviews, workarounds,
              and misconfigurations.
            </p>
            <div className="case-study-visual case-study-safe-visual">
              <img src={RPSafeImg} alt="" className="case-study-figure" />
            </div>

            <h3>Detect and guide, don&apos;t disrupt</h3>
            <p>
              Surface the issue clearly and make the path to compliance easy.
              Help teams make intentional steps towards complince without
              causing interruptions to productivity.
            </p>
            <div className="case-study-visual case-study-detect-visual">
              <img src={RPDetectImg} alt="" className="case-study-figure" />
            </div>
          </section>

          <section>
            <h2>Impact</h2>
            <p>
              In 2025, Atlas Resource Policies reached General Availability—a
              major milestone in making compliance and governance easier to
              manage for enterprise customers. Throughout the process, I worked
              closely with customers to understand their needs and used that
              feedback to expand the product's capabilities and refine the
              overall experience. Notable metrics include:
            </p>
            <ul>
              <li>1,000+ policies created through self-service</li>
              <li>80% of policies created are actively enforced.</li>
              <li>
                22% of our largest accounts now use Atlas Resource Policies.
              </li>
            </ul>
          </section>

          <section>
            <h2>What's Next</h2>
            <p>
              Currently, Atlas Resource Policies is used by 22% of our largest
              accounts. Of the remaining accounts, some have built their own
              solutions to address these needs, while others aren't aware of the
              product yet. My next focus is deepening policy usage and
              increasing adoption across our top 100 customers.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function AheroPage() {
  return (
    <div className="page-shell">
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">
          My work
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>

      <main className="case-study-page">
        <header className="case-study-header">
          <h1>Ahero</h1>
          <p>2020 — Ongoing</p>
          <p className="case-study-intro">
            <a
              href="https://ahero.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ahero
            </a>{" "}
            is a productivity app that helps people block distractions and
            focus. Alongside my husband, I built the app from the ground up—from
            onboarding and first-touch experiences to the core product,
            conversion, anti-churn experiments, and more. I’m happy to report
            that it now has ~900 monthly active users and ~$300 MRR.
          </p>
        </header>
        <div
          className="case-study-visual case-study-cover-visual"
          style={{ background: aheroThumbnailColor }}
        >
          <img
            src={AheroCover}
            alt="Ahero productivity app"
            className="case-study-image"
          />
        </div>
        <div className="case-study-content">
          <section>
            <h2>Story time</h2>
            <p>
              It was a winter day in 2020, and I had just finished my umpteenth
              rewatch of Desperate Housewives while, of course, scrolling
              Instagram on my phone. The next morning, I woke up and spent the
              first 30 minutes turn hour in bed doing the same thing. It was a
              vicious cycle, and my screen time was running my day before it
              even started.
            </p>
            <p>
              It turned out my husband had the same problem, but his vice was
              YouTube. He’d fall down rabbit hole after rabbit hole. What
              started as a quick search for basketball highlights could somehow
              end with him watching a random video about the deep sea at 2 AM.
            </p>
            <p>
              We’re ambitious people, like many others. But somehow, our screens
              were taking priority. I wasn’t acting on any of the “brilliant”
              ideas I had, and I’d completely forgotten about some of my
              lifelong goals. It wasn’t that Desperate Housewives was more
              important—it was that distractions and screen time had become
              second nature. There had to be another way.
            </p>
            <p>
              We brainstormed an MVP and my husband built our POC that very
              weekend.
            </p>
            <div
              className="case-study-visual"
              style={{ background: aheroVisualColors[1], marginBottom: "2rem" }}
            >
              <img
                src={AheroPOCImg}
                alt="Ahero POC"
                className="case-study-figure"
              />
            </div>
            <p>
              It only grew from there. We quickly launched a free Private Beta
              and shared Ahero across every forum we could find. We closed the
              beta once we reached 100 users. Those early adopters helped us
              iterate on the product and close the gaps we continued to uncover.
            </p>
            <p>Our main questions were:</p>
            <blockquote>
              Are you still distracted? <br />
              Are you able to find time to pursue your goal?
            </blockquote>
            <p>
              After ~year, we launched our paid Public Beta. A few months went
              by without a single purchase. We experimented with
              everything—marketing, our landing page, onboarding, pricing plans,
              and more. And then, finally: a payment. Huzzah!
            </p>
            <p>
              Emails started pouring in, and to this day, we have them printed
              out and taped to our wall. I’ve never felt so humbled and proud.
            </p>
            <div
              className="case-study-visual"
              style={{
                background: aheroVisualColors[2],
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <img
                src={AheroTestimonialsImg}
                alt="Ahero testimonials"
                className="case-study-figure"
              />
            </div>
          </section>

          <section>
            <h2>What&apos;s Next</h2>
            <p>
              Our next focus is: expansion. We want more people to know and use
              Ahero. So, we recently launched an affiliate program and have
              kicked off on an ambitious goal of bringing Ahero into schools.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function AtlasSecurityCenterPage() {
  return (
    <div className="page-shell">
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">
          My work
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>

      <main className="case-study-page">
        <header className="case-study-header">
          <h1>Atlas Security Center</h1>
          <p>2025 — Ongoing</p>
          <p className="case-study-intro">
            Security Center is a dashboard that helps organizations monitor
            their security posture and identify risks and vulnerabilities. What
            started as a conversation became a design-led initiative that I
            drove from idea to sign-off, spanning design strategy, user
            research, ideation, and stakeholder alignment.
          </p>
        </header>
        <div
          className="case-study-visual case-study-cover-visual"
          style={{ background: securityCenterVisualColors[0] }}
        >
          <img
            src={SCCoverImg}
            alt="Atlas Security Center dashboard"
            className="case-study-image"
          />
        </div>
        <div className="case-study-content">
          <section>
            <h2>Problem</h2>
            <p>
              As data volumes grow, AI use cases expand, and more data moves
              across systems, keeping data safe through strong security and
              compliance practices has become increasingly important. Our
              customers were seeing this too, and told us they needed better
              governance, risk management, and control.
            </p>
            <p>
              Looking at the security experience today, we saw security
              touchpoints scattered across Atlas, features surfaced mostly on
              demand, and little guidance on how to configure them effectively.
            </p>
            <p>
              As a result, customers were often left to make their own guesses,
              sometimes creating unintended security gaps. This led us to our
              design question:
            </p>
            <blockquote>
              How can we minimize our security risk by building security into an
              integral part of the customer journey?
            </blockquote>
          </section>

          <section>
            <h2>Process</h2>
            <p>
              With User Research and Product, we conducted several rounds of
              internal and external interviews to understand how customers
              assess their security posture today, how motivated they are to
              improve it, and where MongoDB could help.
            </p>
            <blockquote>
              #1 Create one clear security picture <br />
              #2 Turn findings into action <br />
              #3 Help teams stay ahead
            </blockquote>
            <p>
              With this direction, I moved into ideation. Throughout the
              process, I regularly checked in with Engineering, Security, and
              Support, asking: What do you think? What would stop you from
              investing in this idea?
            </p>
            <p>
              Through these conversations and iterations, I built alignment
              around the Security Center we have today.
            </p>

            <h3>One clear security picture</h3>
            <p>
              Customers felt infromation was too spread out - some even riled on
              their Success Manager to manually pull everything together for
              them. Customers wanted MongoDB to surface blind spots early,
              prioritize risks, and guide them toward safer ways to use the
              product. This insight was gold.
            </p>
            <div
              className="case-study-visual"
              style={{ background: securityCenterVisualColors[1] }}
            >
              <img src={SCPictureImg} alt="" className="case-study-figure" />
            </div>

            <h3>Turn findings into action</h3>
            <p>
              Customers don't always know why a finding was important and
              moreover, how to fix it.
            </p>
            <div
              className="case-study-visual"
              style={{ background: securityCenterVisualColors[2] }}
            >
              <img src={SCFindingsImg} alt="" className="case-study-figure" />
            </div>
          </section>

          <section>
            <h2>What&apos;s Next</h2>
            <p>
              The Security Center is heading into implementation in 2026. We’re
              currently defining the MVP and fast-follow roadmap, with a group
              of private preview partners lined up to help shape the product
              further.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function MongoDBPage() {
  return (
    <div className="page-shell">
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">
          My work
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>

      <main className="case-study-page">
        <header className="case-study-header">
          <h1>Leading Design Across MongoDB’s Biggest Bets</h1>
          <p>2025 — 2026</p>
        </header>
        <div
          className="case-study-visual case-study-cover-visual"
          style={{ background: "#dfeeea" }}
        >
          <img
            src={MDBCoverImg}
            alt="MongoDB product releases"
            className="case-study-image"
          />
        </div>
        <div className="case-study-content">
          <p>
            This past year, I’ve been incredibly lucky to work with talented
            teams bringing 5 major releases to MongoDB. These are all 0→1
            initiatives spanning everything from disaster recovery and data
            encryption to cluster scaling and performance. As the lead designer,
            I owned the user experience from start to finish.
          </p>

          <p>
            I collaborated closely with up to 30 cross-functional partners (on a
            single project!), including:
          </p>
          <ul>
            <li>
              <strong>Product</strong> to shape the design strategy and align on
              success metrics
            </li>
            <li>
              <strong>Engineering</strong> to design within technical
              constraints and scope
            </li>
            <li>
              <strong>Product Marketing</strong> to ensure we positioned the
              product well for the business and told a compelling, approachable
              story
            </li>
            <li>
              <strong>User Research</strong> to make sure we were meeting
              customer needs and expectations
            </li>
          </ul>

          <p>
            It takes a village, and I’m excited to see these projects come to
            life. Since many are tied to upcoming company announcements, reach
            out if you’d like to learn more—I’m happy to share.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page-shell">
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">
          My work
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>

      <div className="about-page">
        <div className="about-media">
          <img
            src={aboutImg}
            alt="Allison and family on a hike"
            className="about-image"
          />
          <p className="about-caption">
            Pictured with my little family on a very dirty hike in Utah.
          </p>
        </div>

        <div className="about-bio">
          <p>
            Hi! I’m Allison. I’m a product designer who loves turning ambiguous
            thoughts and scribbles on paper into thoughtful products people
            actually want to use.
          </p>

          <p>
            With a background in human-computer interaction and business, I like
            to design with the bigger picture in mind—both how the product
            impacts the consumer and how it drives meaningful business outcomes.
          </p>

          <p>
            Outside of work, I’m an amateur triathlete, an even more amateur
            gardener, and dog mom to a very crazy pup.
          </p>
        </div>
      </div>

      <div className="about-tile-gallery" aria-label="More about Allison">
        <img src={aboutOneImg} alt="" className="about-tile" />
        <img src={aboutTwoImg} alt="" className="about-tile" />
        <img src={aboutThreeImg} alt="" className="about-tile" />
        <img src={aboutFourImg} alt="" className="about-tile" />
        <img src={aboutFiveImg} alt="" className="about-tile" />
      </div>
      <SiteFooter />
    </div>
  );
}

function ResumePage() {
  return (
    <div className="page-shell">
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">
          My work
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>

      <div className="page-content">
        <h2>Resume</h2>
        <p>
          Experience includes product design, visual design, prototyping, and
          collaboration with cross-functional teams to ship polished digital
          work.
        </p>
      </div>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/work/atlas-resource-policies"
          element={<AtlasResourcePoliciesPage />}
        />
        <Route path="/work/ahero" element={<AheroPage />} />
        <Route
          path="/work/atlas-security-center"
          element={<AtlasSecurityCenterPage />}
        />
        <Route path="/work/mongodb" element={<MongoDBPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </>
  );
}

export default App;
