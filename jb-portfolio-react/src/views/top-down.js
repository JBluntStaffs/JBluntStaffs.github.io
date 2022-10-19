import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './top-down.css'

const TopDown = (props) => {
  return (
    <div className="top-down-container">
      <Helmet>
        <title>Top-Down - JB-portfolio</title>
        <meta property="og:title" content="Top-Down - JB-portfolio" />
      </Helmet>
      <div className="top-down-navbar">
        <div className="top-down-links-container">
          <Link to="/" className="top-down-link navbar-Link">
            Home
          </Link>
        </div>
        <div data-type="BurgerMenu" className="top-down-burger-menu">
          <svg viewBox="0 0 1024 1024" className="top-down-icon">
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="top-down-mobile-menu">
          <div className="top-down-container1">
            <span className="card-Heading top-down-heading">Logo</span>
            <div data-type="CloseMobileMenu" className="top-down-close-menu">
              <svg viewBox="0 0 1024 1024" className="top-down-icon02">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="top-down-links-container1">
            <span className="top-down-link01 navbar-Link">About</span>
            <span className="top-down-link02 navbar-Link">Experience</span>
            <span className="top-down-link03 navbar-Link">Portofolio</span>
            <span className="navbar-Link">Contact</span>
          </div>
        </div>
      </div>
      <div className="top-down-clients">
        <div className="top-down-heading-container">
          <h1 className="top-down-text section-Heading">
            Top-Down Shooter Prototype
          </h1>
          <h1 className="top-down-text01">Project Overview</h1>
          <span className="top-down-text02">
            <span>
              As part of my Rapid Games Prototyping module we had to create
              several different prototypes based on different provided
              frameworks, and prompts on the direction we should take them over
              the 6 weeks we got to develop each of them.
            </span>
            <br></br>
            <br></br>
            <span>
              One of these prototypes was a top-down shooter, and our goal was
              to add some new, interesting mechanics to what was already
              provided. I decided to do something a little out of the box and
              create a fully functional, Minecraft-esque inventory system within
              the shooter.
            </span>
            <br></br>
            <br></br>
            <span>
              The only known major bug that I can think of is that the
              inventory&apos;s hotbar UI doesn&apos;t show up until the
              inventory is opened for the first time by pressing the E key.
            </span>
            <br></br>
            <br></br>
            <span>
              The gameplay video, which was uploaded on my university archive
              YouTube channel, can be found below.
            </span>
            <br></br>
          </span>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1AHn6jjCf8E-XqdKgJHkZ73_2WXBz0ipv?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className="top-down-link05"
        >
          Download Link (Google Drive)
        </a>
      </div>
      <div className="top-down-container2">
        <div className="top-down-hero">
          <iframe
            src="https://www.youtube.com/embed/Y_4ZUR3oUGA"
            className="top-down-iframe"
          ></iframe>
        </div>
      </div>
      <div className="top-down-clients1">
        <div className="top-down-heading-container1">
          <h1 className="top-down-text14">My Contributions</h1>
          <span className="top-down-text15">
            <span>For this project, I managed to implement:</span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              1)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="top-down-text21">
              An inventory system akin to that of Minecraft, with item stacking,
              the ability to move stacks from one part of the inventory to
              another and stack splitting. The inventory has interactable UI to
              allow for these features.
            </span>
            <br></br>
            <br></br>
            <span>
              2)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="top-down-text25">
              Several different items for use in the inventory, some having uses
              such as bandages that heal the player or ammunition for the
              Crossbow weapon. Most items that aren&apos;t the two weapons the
              player uses can drop from the enemies that spawn in the stage.
            </span>
            <br></br>
            <br></br>
            <span>
              3)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="top-down-text29">
              A new projectile weapon, the Crossbow, that uses up ammunition
              (the Arrows item) and will not fire unless there are arrows in the
              player&apos;s inventory.
            </span>
            <br className="top-down-text30"></br>
            <br></br>
            <span>
              The prototype acts as a small horde survival game where you try to
              defeat as many enemies as possible before you get overrun.
            </span>
            <br></br>
            <br></br>
            <span>
              One important note is that the sprite work for the items and
              inventory&apos;s UI are not my own; as the project was a prototype
              made in a short timespan, I sourced these elements from various
              places (the most telling one being the Minecraft crossbow sprite
              for the crossbow).
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="top-down-container3">
        <div className="top-down-hero1">
          <div className="top-down-heading-container2">
            <h1 className="top-down-text37">
              Thoughts on the Project (and Images)
            </h1>
            <span className="top-down-text38">
              <span>
                The main thing I learned from this project was managing scope -
                The ideas I had were way too big for a 6-week prototype, and
                while I got the main bulk of the concept done (the inventory
                system) the rest of the project suffered because of it, and that
                reflects somewhat in how the gameplay itself is relatively basic
                and bare-bones.
              </span>
              <br></br>
              <br></br>
              <span>
                This was a learning experience though - If there are deadlines,
                don&apos;t think too big! Otherwise you&apos;ll either work 24/7
                to get the project done (and end up hating it) or you&apos;ll
                never finish it in the first place, and both outcomes
                aren&apos;t great.
              </span>
              <br></br>
              <br></br>
              <span>
                I&apos;m going to try to keep this lesson with me on future
                projects, whether that&apos;s in university or even in industry.
              </span>
              <br></br>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/screenshot%202022-10-16%20144533-800h.png"
            className="top-down-image"
          />
          <img
            alt="image"
            src="/playground_assets/screenshot%202022-10-16%20144418-800h.png"
            className="top-down-image1"
          />
          <img
            alt="image"
            src="/playground_assets/screenshot%202022-10-16%20144239-800h.png"
            className="top-down-image2"
          />
        </div>
      </div>
      <div className="top-down-clients2">
        <div className="top-down-heading-container3">
          <h1 className="top-down-text47">Interested in my work?</h1>
          <span className="top-down-text48">
            <span>Then get in touch at:</span>
            <br></br>
          </span>
          <a
            href="mailto:jackblunt.jb@gmail.com?subject=Portfolio Contact"
            className="top-down-link06"
          >
            Jackblunt.jb@gmail.com
          </a>
        </div>
      </div>
      <div className="top-down-footer">
        <div className="top-down-social-links">
          <a
            href="https://twitter.com/BeenzyBoy"
            target="_blank"
            rel="noreferrer noopener"
            className="top-down-link07"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="top-down-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCJa7zFX-TwEK1aPqpBpqqyg"
            target="_blank"
            rel="noreferrer noopener"
            className="top-down-link08"
          >
            <svg viewBox="0 0 1024 1024" className="top-down-icon06">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/JBluntStaffs"
            target="_blank"
            rel="noreferrer noopener"
            className="top-down-link09"
          >
            <svg viewBox="0 0 1024 1024" className="top-down-icon08">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
        <div className="top-down-copyright-container">
          <a
            href="mailto:jackblunt.jb@gmail.com?subject=Portfolio Contact"
            className="top-down-link10"
          >
            <span>j</span>
            <span className="top-down-text52">ackblunt.jb@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopDown
