import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './video-essay.css'

const VideoEssay = (props) => {
  return (
    <div className="video-essay-container">
      <Helmet>
        <title>Video-Essay - Portfolio Page</title>
        <meta property="og:title" content="Video-Essay - Portfolio Page" />
      </Helmet>
      <div className="video-essay-navbar">
        <div className="video-essay-links-container">
          <Link to="/" className="video-essay-link navbar-Link">
            Home
          </Link>
        </div>
        <div data-type="BurgerMenu" className="video-essay-burger-menu">
          <svg viewBox="0 0 1024 1024" className="video-essay-icon">
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="video-essay-mobile-menu">
          <div className="video-essay-container1">
            <span className="card-Heading video-essay-heading">Logo</span>
            <div data-type="CloseMobileMenu" className="video-essay-close-menu">
              <svg viewBox="0 0 1024 1024" className="video-essay-icon02">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="video-essay-links-container1">
            <span className="video-essay-link01 navbar-Link">About</span>
            <span className="video-essay-link02 navbar-Link">Experience</span>
            <span className="video-essay-link03 navbar-Link">Portofolio</span>
            <span className="navbar-Link">Contact</span>
          </div>
        </div>
      </div>
      <div className="video-essay-clients">
        <div className="video-essay-heading-container">
          <h1 className="video-essay-text section-Heading">
            Ultrakill Design Video
          </h1>
          <span className="video-essay-text01">
            <span>
              This is a video I made discussing the design of the game
              Ultrakill, and why I love it. The video is very loose, jokey and
              informal, as I believe talking about a game&apos;s design should
              be just as enjoyable as making or playing it. For that reason, I
              tried to make the video entertaining as well as a review / design
              discussion.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              It was made in its entirety by myself in a (roughly) 2 month time
              frame - I picked up video editing on Premiere Pro, wrote my own
              script and recorded the voiceover.The video is on my personal
              YouTube channel under the alias Beenz. I may make more of these
              design videos on other games I enjoy in the future as
              side-projects to whatever I work on!
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="video-essay-container2">
        <div className="video-essay-hero">
          <iframe
            src="https://www.youtube.com/embed/k1ImH8agclI"
            className="video-essay-iframe"
          ></iframe>
        </div>
      </div>
      <div className="video-essay-clients1">
        <div className="video-essay-heading-container1">
          <h1 className="video-essay-text07">Interested in my work?</h1>
          <span className="video-essay-text08">
            <span>Then get in touch at:</span>
            <br></br>
          </span>
          <a
            href="mailto:jackblunt.jb@gmail.com?subject=Portfolio Contact"
            className="video-essay-link05"
          >
            Jackblunt.jb@gmail.com
          </a>
        </div>
      </div>
      <div className="video-essay-footer">
        <div className="video-essay-social-links">
          <a
            href="https://twitter.com/BeenzyBoy"
            target="_blank"
            rel="noreferrer noopener"
            className="video-essay-link06"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="video-essay-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCJa7zFX-TwEK1aPqpBpqqyg"
            target="_blank"
            rel="noreferrer noopener"
            className="video-essay-link07"
          >
            <svg viewBox="0 0 1024 1024" className="video-essay-icon06">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/JBluntStaffs"
            target="_blank"
            rel="noreferrer noopener"
            className="video-essay-link08"
          >
            <svg viewBox="0 0 1024 1024" className="video-essay-icon08">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
        </div>
        <div className="video-essay-copyright-container">
          <a
            href="mailto:jackblunt.jb@gmail.com?subject=Portfolio Contact"
            className="video-essay-link09"
          >
            <span>j</span>
            <span className="video-essay-text12">ackblunt.jb@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoEssay
