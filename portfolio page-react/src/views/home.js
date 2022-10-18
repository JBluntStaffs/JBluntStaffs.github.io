import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-links-container">
            <a href="#aboutpage" className="home-link navbar-Link">
              About
            </a>
            <a href="#experience" className="home-link01 navbar-Link">
              Experience
            </a>
            <a href="#projectspage" className="home-link02 navbar-Link">
              Portfolio
            </a>
            <a href="#qa" className="home-link03">
              <span className="navbar-Link">Q&amp;A</span>
              <br></br>
            </a>
            <a href="#contact" className="home-link04 navbar-Link">
              Contact
            </a>
          </div>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <span className="card-Heading home-heading">Logo</span>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link05 navbar-Link">About</span>
              <span className="home-link06 navbar-Link">Experience</span>
              <span className="home-link07 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div id="about" className="home-container2">
        <div id="aboutpage" className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading1 section-Heading">
              Hi! I&apos;m Jack Blunt.
            </h1>
            <span className="home-text02">
              I&apos;m currently studying Games Design and Programming at
              Staffordshire University, and I&apos;m looking for a placement!
            </span>
          </div>
        </div>
      </div>
      <div className="home-clients">
        <div className="home-heading-container">
          <h1 className="home-text03 section-Heading">About Me</h1>
          <span className="home-text04">
            <span>
              I&apos;m 19 years old, and based in the UK. I have a huge passion
              for gaming and the gaming industry, and I am currently looking for
              a placement at a studio somewhere within said industry. I really
              like to make my work fun, goofy and entertaining both to make and
              to enjoy!
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div id="experience" className="home-about">
        <div id="projects" className="home-max-content-width-container">
          <div className="home-heading-container1">
            <h1 className="home-text07 section-Heading">
              Academic / Work Experience
            </h1>
          </div>
          <div className="home-content-container">
            <div className="home-about-1">
              <div className="home-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text08">
                  (2019 - 2021) A Levels at WQE College, Leicester (3 B&apos;s)
                </span>
              </div>
              <div className="home-container4">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text09">
                  (June 2021 - September 2021) Work Experience at a local cinema
                  chain
                </span>
              </div>
              <div className="home-container5">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text10">
                  (September 2021 - now) University Studies at Staffordshire
                  University
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div id="projectspage" className="home-heading-container2">
          <h2 className="home-text11 section-Heading">My Projects</h2>
          <span className="home-text12">
            <span className="home-text13">
              here&apos;s some of my best work so far:
            </span>
            <br className="home-text14"></br>
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <Link to="/video-essay" className="home-navlink">
              <img
                alt="image"
                src="/playground_assets/screenshot%202022-10-15%20143734-1500w.png"
                className="home-image"
              />
            </Link>
            <div className="home-content-container1">
              <Link to="/video-essay" className="home-heading2">
                <span className="card-Heading">Design Video Essay</span>
                <br></br>
              </Link>
              <span className="home-text17">
                A video essay on the game Ultrakill, scripted, recorded and
                edited by myself in a roughly 2 month time frame.
              </span>
            </div>
          </div>
          <div className="home-card1">
            <Link to="/deek-space" className="home-navlink1">
              <img
                alt="image"
                src="/playground_assets/screenshot%202022-10-15%20143230-1500w.png"
                className="home-image1"
              />
            </Link>
            <div className="home-content-container2">
              <Link to="/deek-space" className="home-heading3 card-Heading">
                &quot;Deek Space&quot; Platformer
              </Link>
              <span className="home-text18">
                <span>
                  A 3D platformer level in Unreal Engine 4 that I worked on for
                  my Intro to 3D Games Engines module at university.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-card2">
            <Link to="/top-down" className="home-navlink2">
              <img
                alt="image"
                src="/playground_assets/screenshot%202022-10-15%20142735-1500w.png"
                loading="eager"
                className="home-image2"
              />
            </Link>
            <div className="home-content-container3">
              <Link to="/top-down" className="home-heading4">
                <span className="card-Heading">Top-Down Shooter Prototype</span>
                <br></br>
              </Link>
              <span className="home-text23">
                <span>
                  A prototype of a basic top-down shooter made in Unity Engine,
                  but with the added bonus of a working Minecraft-esque
                  inventory system.
                </span>
                <br></br>
                <br></br>
                <span>
                  I worked on this for my Rapid Games Prototyping module at
                  University.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-faqs">
        <h2 id="qa" className="home-text29 section-Heading">
          Q&amp;A
        </h2>
        <div className="home-content-container4">
          <div className="home-faq">
            <div className="home-question-container">
              <span className="home-question">
                What got you into games design, the industry and how they are
                made?
              </span>
            </div>
            <div className="home-answer-container">
              <span className="home-answer">
                <span>
                  I&apos;ve always enjoyed videogames, even as a kid, but it was
                  only in the past few years that I realised I wanted to make
                  them as a career! I&apos;d had the idea in the back of my mind
                  since my GCSEs, but it wasn&apos;t until partway through my A
                  Levels that I had the realisation that I actually
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text31">could</span>
                <span>
                  {' '}
                  make them myself and give others the experiences I had
                  enjoyed, and that was when I really started thinking about how
                  games are designed and made.
                </span>
              </span>
            </div>
          </div>
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">
                What games are your biggest inspirations (and favourite to
                play)?
              </span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer1">
                <span>
                  I&apos;ve started trying a lot more games for design
                  inspiration (and also to try all sorts of different kinds of
                  them), and as of the past few years I think some really
                  well-designed titles include Deep Rock Galactic, Ultrakill and
                  Ghost of Tsushima.
                </span>
                <br></br>
                <br></br>
                <span>
                  However, if we&apos;re talking about all-time favourites,
                  I&apos;d have to say TLOZ: Breath of the Wild, Bloodborne and
                  Destiny take that title.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                What&apos;s most important to you when it comes to producing a
                game?
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer2">
                <span>
                  The main priority to me is making the game fun, both to make
                  and to play - If you&apos;re hating the process of making the
                  project, that will definitely carry over into its quality, and
                  will therefore make it less fun for whoever&apos;s playing it.
                </span>
                <br></br>
                <br></br>
                <span>
                  Also, I believe it&apos;s way more important to make a game
                  that respects your time and money than to try to maximise
                  earnings - If people feel that your game is fun then
                  they&apos;ll put more hours into it over time while still
                  being able to take breaks when they want to. However, if they
                  play a game that has a massive grind with the fear of missing
                  out on content if they aren&apos;t playing all the time, then
                  they&apos;re way more likely to not enjoy the game as much and
                  eventually burn out of the game entirely.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator5"></div>
      <div className="home-subscribe">
        <img
          alt="image"
          src="/playground_assets/screenshot%202022-10-14%20152458-1500w.png"
          loading="eager"
          className="home-image3"
        />
        <div id="contact" className="home-container6">
          <div className="home-heading-container3">
            <h1 className="home-text43">
              If you&apos;re interested in my work, send me an email at
              Jackblunt.jb@gmail.com!
            </h1>
          </div>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <a
              href="https://twitter.com/BeenzyBoy"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCJa7zFX-TwEK1aPqpBpqqyg"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/JBluntStaffs"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
              </svg>
            </a>
          </div>
          <div className="home-copyright-container">
            <a
              href="mailto:jackblunt.jb@gmail.com?subject=Portfolio Contact"
              className="home-link12"
            >
              <span>j</span>
              <span className="home-text45">ackblunt.jb@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
