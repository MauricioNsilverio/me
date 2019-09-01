import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        <strong>Hi, my name is Maurício Silvério.</strong> I'm a 17-year-old Brazilian guy willing to use
                        technology and entrepreneurship in order to foster education access around the globe.
                      </p>
                      <p>
                        I have the dream of studying in an American university so that I can learn with the best professors
                        in the world and network with other prospective students in an enriching cultural environment.
                        <br />
                        <br />
                        Then, By learning about artificial intelligence and social entrepreneurship, I hope to improve the app
                        code efficiency of my startup to expand it to a global scale. I want to use iDuk to give underprivileged
                        students access to the best schools in Brazil, thereby innovating our educational system.
                        <br />
                        <br />
                        Visit <a href="https://iduk.me" target="_blank" rel="noopener noreferrer">iduk.me</a> to follow our transformation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                      <span className="icon2"><i className="icon-bulb" /></span>
                      <h3>Public Speaking</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                      <span className="icon2"><i className="icon-globe-outline" /></span>
                      <h3>Java Script</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                      <span className="icon2"><i className="icon-data" /></span>
                      <h3>Mentoring</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                    <div className="services color-4">
                      <span className="icon2"><i className="icon-phone3" /></span>
                      <h3>Entrepreneurship</h3>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div className="hire">
                      <h2>I am happy to know you <br />that 300+ projects done sucessfully!</h2>
                      <a href="#" className="btn-hire">Hire me</a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}