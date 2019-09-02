import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Specialty</span>
                <h2 className="colorlib-heading animate-box">My Skills</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <p>
                  Logically, as a programmer, I have to show you my skills through statistcs :&#41;
                </p>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>Hello World</h3>
                  <div className="progress">
                    <div className="progress-bar color-1" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Entrepreneurship</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} style={{ width: '99%' }}>
                      <span>99%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>HTML5</h3>
                  <div className="progress">
                    <div className="progress-bar color-3" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>CSS3</h3>
                  <div className="progress">
                    <div className="progress-bar color-4" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}>
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>JavaScript</h3>
                  <div className="progress">
                    <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}>
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Public Speaking</h3>
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} style={{ width: '99%' }}>
                      <span>99%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}