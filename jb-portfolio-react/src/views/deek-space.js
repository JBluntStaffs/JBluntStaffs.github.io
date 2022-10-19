import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './deek-space.css'

const DeekSpace = (props) => {
  return (
    <div className="deek-space-container">
      <Helmet>
        <title>Deek-Space - JB-portfolio</title>
        <meta property="og:title" content="Deek-Space - JB-portfolio" />
      </Helmet>
      <div className="deek-space-navbar">
        <div className="deek-space-links-container">
          <Link to="/" className="deek-space-link navbar-Link">
            Home
          </Link>
        </div>
        <div data-type="BurgerMenu" className="deek-space-burger-menu">
          <svg viewBox="0 0 1024 1024" className="deek-space-icon">
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="deek-space-mobile-menu">
          <div className="deek-space-container1">
            <span className="card-Heading deek-space-heading">Logo</span>
            <div data-type="CloseMobileMenu" className="deek-space-close-menu">
              <svg viewBox="0 0 1024 1024" className="deek-space-icon02">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="deek-space-links-container1">
            <span className="deek-space-link01 navbar-Link">About</span>
            <span className="deek-space-link02 navbar-Link">Experience</span>
            <span className="deek-space-link03 navbar-Link">Portofolio</span>
            <span className="navbar-Link">Contact</span>
          </div>
        </div>
      </div>
      <div className="deek-space-clients">
        <div className="deek-space-heading-container">
          <h1 className="deek-space-text section-Heading">
            &quot;Deek Space&quot; Level
          </h1>
          <h1 className="deek-space-text01">Project Overview</h1>
          <span className="deek-space-text02">
            <span>
              For the second semester of my Intro to 3D Games Engines module, I
              was tasked with making a level from scratch using a provided
              character blueprint, a level manager blueprint and some level
              assets. The character blueprint is a small goblin character called
              Deek that can run, jump, mantle some ledges and has the
              functionality to use and equip various weapons, with the one
              provided being a wrench that acts as a basic melee attack.
            </span>
            <br></br>
            <br></br>
            <span>
              Before we were tasked with making our levels, during that semester
              the students of the course were taught how to use some
              functionalities of the Unreal engine such as materials, the
              particles editor and text box UI appearing / disappearing when
              entering or leaving an area. Each of these (and some other
              features we were taught) appeared in some form in our levels.
              Below is the final gameplay video submitted to the YouTube channel
              I use to document course-related videos and recordings.
            </span>
            <br></br>
          </span>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1oRW1BBnF6OKAvijU9xMOF4hgcMZqMeRp?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className="deek-space-link05"
        >
          Download Link (Google Drive)
        </a>
      </div>
      <div className="deek-space-container2">
        <div className="deek-space-hero">
          <iframe
            src="https://www.youtube.com/embed/7g9GaCE9SXA"
            className="deek-space-iframe"
          ></iframe>
        </div>
      </div>
      <div className="deek-space-clients1">
        <div className="deek-space-heading-container1">
          <h1 className="deek-space-text08">My Contributions</h1>
          <span className="deek-space-text09">
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
            <span className="deek-space-text15">
              Level assets imported from a previous project to create a
              different theme for the level, as well as a couple of textures for
              some extra objects at the end of the stage.
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
            <span className="deek-space-text19">
              Two new weapons - a healing syringe, and a flare that throws
              projectiles that light up the area - as well as new functionality
              for the wrench weapon.
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
            <span className="deek-space-text23">
              A stage that utilises lighting, an enemy turret actor, and the new
              wrench functionality to provide some puzzles and / or challenge
              for the player.
            </span>
            <br></br>
            <br></br>
            <span>
              The level is approximately 2 and a half minutes long (for me,
              someone who knows it inside and out).
            </span>
          </span>
        </div>
      </div>
      <div className="deek-space-container3">
        <div className="deek-space-hero1">
          <div className="deek-space-heading-container2">
            <h1 className="deek-space-text27">
              Early Design Choices (and Images)
            </h1>
            <span className="deek-space-text28">
              <span>
                My initial idea for the level was inspired by the Dead Space
                series of games - I knew from the get-go that I wanted to use
                lighting, and have a space theme. However, a major issue with
                this was that none of the assets given to us were very
                space-themed.
              </span>
              <br></br>
              <br></br>
              <span>
                Therefore, after asking my lecturers if I could do so (so that I
                don&apos;t accidentally plagiarize), I imported all of the stage
                assets from my previous semester&apos;s project, which DID have
                a space theme. It took some time to re-texture and re-size them
                all though, as their textures were unlinked due to being moved
                to a new project.
              </span>
              <br></br>
              <br></br>
              <span>
                Another early decision I made was that the wrench should be more
                than just a melee weapon. If you&apos;re on a highly advanced
                spaceship, it&apos;s probably going to need repairs at some
                point, and that&apos;s when the premise was born - Deek was
                going to be an astro-handyman repairing a spaceship! I
                implemented a check for hitting certain &quot;broken
                machine&quot; objects that fixes them when they are hit with the
                wrench, giving the wrench a use in puzzles that require finding
                and repairing machines to open doors.
              </span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/screenshot%202022-10-16%20125639-800h.png"
            className="deek-space-image"
          />
          <img
            alt="image"
            src="/playground_assets/screenshot%202022-10-16%20125729-800h.png"
            className="deek-space-image1"
          />
          <img
            alt="image"
            src="/playground_assets/screenshot%202022-10-16%20125403-800h.png"
            className="deek-space-image2"
          />
        </div>
      </div>
      <div className="deek-space-clients2">
        <div className="deek-space-heading-container3">
          <h1 className="deek-space-text36">Interested in my work?</h1>
          <span className="deek-space-text37">
            <span>Then get in touch at:</span>
            <br></br>
          </span>
          <a
            href="mailto:jackblunt.jb@gmail.com?subject=Portfolio Contact"
            className="deek-space-link06"
          >
            Jackblunt.jb@gmail.com
          </a>
        </div>
      </div>
      <div className="deek-space-footer">
        <div className="deek-space-social-links">
          <a
            href="https://twitter.com/BeenzyBoy"
            target="_blank"
            rel="noreferrer noopener"
            className="deek-space-link07"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="deek-space-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCJa7zFX-TwEK1aPqpBpqqyg"
            target="_blank"
            rel="noreferrer noopener"
            className="deek-space-link08"
          >
            <svg viewBox="0 0 1024 1024" className="deek-space-icon06">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/JBluntStaffs"
            target="_blank"
            rel="noreferrer noopener"
            className="deek-space-link09"
          >
            <svg viewBox="0 0 1024 1024" className="deek-space-icon08">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
        <div className="deek-space-copyright-container">
          <a
            href="mailto:jackblunt.jb@gmail.com?subject=Portfolio Contact"
            className="deek-space-link10"
          >
            <span>j</span>
            <span className="deek-space-text41">ackblunt.jb@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DeekSpace
