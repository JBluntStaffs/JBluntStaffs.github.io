import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <div className="component-hero">
        <div className="component-hero-text-container">
          <h1 className="component-heading section-Heading">{props.Heading}</h1>
          <span className="component-text">{props.Text}</span>
          <div className="component-cta-btn-container"></div>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  Heading: "Hi! I'm Jack Blunt.",
  Text: "I'm currently studying Games Design and Programming at Staffordshire University, and I'm looking for a placement!",
}

AppComponent.propTypes = {
  Heading: PropTypes.string,
  Text: PropTypes.string,
}

export default AppComponent
