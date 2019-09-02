import React, { Component } from 'react';

export default class Counters extends Component {
  render() {
    return (
      <div id="colorlib-counter" className="colorlib-counters" style={{ backgroundImage: 'url(images/cover_bg_1.jpg)' }} data-stellar-background-ratio="0.5">
        <div className="overlay" />
        <div className="colorlib-narrow-content">
          <div className="row">
          </div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter">999+</span>
              <span className="colorlib-counter-label">Cups of coffee</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={10} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">Projects</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={1500} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">People impacted with my projects</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={10} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">Partners</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}